document.addEventListener(
  "DOMContentLoaded",
  function () {
    function handleThis(className, url){
      console.log("Handling " + url);
      console.log("Handling " + className);
      elements = document.getElementsByClassName(className);
      console.log(elements);
      for (let i = 0; i < elements.length; i++) {
        let element = elements[i];
        element.addEventListener("click", function () {
          console.log(element);
          let id = element.getAttribute("data");
          let name = element.getAttribute("name");
          if(name !== null){ // in rename
            name = prompt("Enter the new name");
            id = id + "/" + name;
          }
          console.log("Clicked " + id);
          let x = fetch(url + id)
          setTimeout(() => {
            location.reload();
          }, 250);
        });
      }
    }

    handleThis("add-cat-button", "cats/add_cat/");
    handleThis("remove-cat-button", "cats/remove_cat/");
    handleThis("rename-cat-button", "cats/rename_cat/");
  },
  false
);
