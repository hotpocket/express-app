var express = require("express");
var router = express.Router();

/* GET cats listing. */
router.get("/", function (req, res, next) {
  fetch("https://api.thecatapi.com/v1/images/search", {
    method: "GET",
    headers: { "Content-type": "application/json;charset=UTF-8" },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      let cats = {};
      json.forEach((cat) => {
        let id = cat.id
        cats[id] = cat.url;
      });
      console.log(cats);

      // read saved cats
      var fs = require('fs');
      var files = fs.readdirSync('cat_data');
      savedCats = {};
      files.forEach(file => {
        let data = fs.readFileSync('cat_data/' + file);
        let cat = JSON.parse(data);
        savedCats[cat.id] = {'name': cat.name, 'url':cat.url};
      });

      res.render("cats", {
        title: "ALL YOUR CATS ARE BELONG TO US",
        message: "Cats Page",
        data: cats,
        ourcats: savedCats
      });
    })
    .catch((err) => console.log(err));
});

router.get("/add_cat/:id", function (req, res, next) {
  let id = req.params.id;
  console.log("OMG CLIcked!" + id);
  fetch("https://api.thecatapi.com/v1/images/" + id, {
    method: "GET",
    headers: {
      "x-api-key":
        "live_omzMpH64MCuMKpTtLK1W1Ya9K5RHc3Z2rE3c7SseZR6yw3uydfCatiM6AQqvoAXK",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      const fs = require('node:fs');
      try {
        if(res['name'] === undefined) {
          res['name'] = "No name"
        }
        fs.writeFileSync(`cat_data/${res['id']}.json`, JSON.stringify(res));
      } catch (err) {console.error(err);}
    })
    .catch((err) => {
      console.log("Error:");
      console.log(err);
    });
});


router.get("/remove_cat/:id", function (req, res, next) {
  let id = req.params.id;
  var fs = require('fs');
  var filePath = 'cat_data/' + id + '.json';
  fs.unlinkSync(filePath);
})

router.get("/rename_cat/:id/:name", function (req, res, next) {
  let id = req.params.id;
  let name = req.params.name;
  console.log("all params: " + id + " " + name);
  // read json
  // change name
  var fs = require('fs');
  let data = fs.readFileSync('cat_data/' + id + '.json');
  let cat = JSON.parse(data);
  cat['name'] = name;
  fs.writeFileSync(`cat_data/${cat['id']}.json`, JSON.stringify(cat));
});


module.exports = router;
