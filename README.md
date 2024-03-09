# W2D2-Assignment-FS-S24-Fullstack-JS-with-Node.JS-and-Express

# Assignment: Building a RESTful API with Node.js and Express

## Summary
In this hands-on assignment, you'll apply your knowledge of full-stack development, JavaScript for the backend (Node.js), and the Express.js framework to build a RESTful API. Instead of using MongoDB, you'll use JSON files for data storage.

## My Notes
I used express-generator to generate a base template that is kept in the express-app folder.  Within this folder, all of my logic is in cats.js in the routes folder, and the template is cats.jade in the views folder that is the entire UI.


## Objectives
- Apply Full-stack Development Concepts:
  - Utilize both frontend and backend skills to create a comprehensive solution.
  - Demonstrate an understanding of the importance of full-stack development in modern web applications.
- Implement RESTful API with Node.js and Express:
  - Use Node.js as the runtime environment for server-side JavaScript.
  - Apply Express.js to build a web application framework for creating RESTful APIs.
  - Utilize JSON files for data storage.
- Fetch Cat Images from The Cat API:
  - Utilize The Cat API to fetch random cat images.
  - Store fetched cat image data in JSON files for persistent storage.
- Design and Implement API Endpoints:
  - Define clear and concise API endpoints for managing cat images.
  - Implement CRUD (Create, Read, Update, Delete) operations for cat image resources.
- Client-Server Communication:
  - Enable effective communication between clients and the server through the API.
  - Implement features that allow clients to interact with the API endpoints.
- Testing and Documentation:
  - Test your API using tools like Postman to ensure functionality.
  - Provide clear documentation for your API, including endpoints, request/response formats, and any authentication mechanisms.
- Client Interaction:
  - Create a simple frontend (using HTML, CSS, and client-side JavaScript) to interact with your API.
  - Showcase how the client can communicate with the server through the implemented API.
- Reflection:
  - Reflect on the challenges faced during the development process.
  - Consider improvements or additional features that could enhance the Cat Image API.

## Instructions

1. Setup Environment:
   - Ensure Node.js and npm (Node Package Manager) are installed on your development environment.
   - Obtain an API key from [The Cat API](https://thecatapi.com/) for fetching cat images.

2. Initialize Project:
   - Create a new Node.js project and set up the necessary dependencies, including Express.js and Axios (for making HTTP requests to The Cat API).

3. Define API Endpoints:
   - Identify the resources your API will manage, focusing on cat images.
   - Define API endpoints for CRUD operations related to cat images.

4. Fetch and Save Cat Images:
   - Implement functionality to fetch random cat images from The Cat API.
   - Save the fetched cat images to JSON files for persistent storage.

5. Implement CRUD Operations:
   - Write the necessary code to implement Create, Read, Update, and Delete operations for cat image endpoints.

6. Testing and Documentation:
   - Test your API using tools like Postman to ensure functionality.
   - Provide clear documentation for your API, including endpoints, request/response formats, and any necessary authentication mechanisms.

7. Client Interaction:
   - Create a simple frontend (using HTML, CSS, and client-side JavaScript) to interact with your API.
   - Showcase how the client can perform operations such as viewing all cat images, adding a new cat image, updating existing cat images, and deleting cat images.

8. Reflection:
   - Reflect on the challenges faced during the development process.
   - Consider improvements or additional features that could enhance the Cat Image API.

## Submission Instructions

1. Organize Your Project:
   - Organize your assignment files, including code, documentation, and any additional resources, into a well-structured directory.

2. Initialize Git Repository:
   - Initialize a Git repository in your project directory using the command `git init`.

3. Add and Commit Files:
   - Add your assignment files to the Git repository using `git add .` to stage all files and `git commit -m "Initial commit"` to commit them.

4. Create a GitHub Repository:
   - Create a new repository on GitHub to host your assignment files. You can do this through the GitHub website.

5. Add Remote Repository:
   - Add the GitHub repository as a remote to your local Git repository using `git remote add origin <repository-url>`.

6. Push to GitHub:
   - Push your commits to the GitHub repository using `git push -u origin master`.

7. Verify Submission:
   - Verify that your assignment files are successfully uploaded to your GitHub repository by checking the repository on the GitHub website.

## Test Cases

### Frontend Test Cases

1. View All Cat Images:
   - Test that the frontend displays all cat images retrieved from the backend.
   - Verify that each cat image is properly rendered with its corresponding information.

2. Add a New Cat Image:
   - Enter valid data into the form fields for adding a new cat image.
   - Submit the form and verify that the new cat image appears in the frontend list.
   - Check that the added cat image matches the data entered in the form.

3. Update an Existing Cat Image:
   - Select an existing cat image from the frontend list.
   - Edit the information of the selected cat image.
   - Submit the changes and ensure that the updated information reflects correctly in the frontend.

4. Delete a Cat Image:
   - Select a cat image from the frontend list to delete.
   - Confirm the deletion action and verify that the cat image disappears from the frontend list.
   - Ensure that the deleted cat image is no longer accessible in the frontend.

### Backend Test Cases

1. Fetch Random Cat Images from The Cat API:
   - Make a request to the backend API endpoint responsible for fetching random cat images.
   - Verify that the response contains valid cat image data retrieved from The Cat API.
   - Check that the fetched cat images are properly processed and stored in the backend.

2. Save Cat Images to JSON Files:
   - Confirm that when new cat images are fetched, they are correctly saved to the JSON file.
   - Manually inspect the JSON file to ensure that the saved cat image data matches the fetched data.

3. CRUD Operations:
   - Create Test:
     - Send a request to create a new cat image with valid data.
     - Verify that the new cat image is properly stored in the backend and assigned a unique identifier.
   - Read Test:
     - Retrieve all cat images from the backend using the appropriate API endpoint.
     - Ensure that the response contains a list of all stored cat images.
   - Update Test:
     - Select an existing cat image and send a request to update its information.
     - Verify that the updated information is correctly reflected in the backend storage.
   - Delete Test:
     - Choose a cat image to delete and send a request to remove it from the backend.
     - Confirm that the deleted cat image is no longer present in the backend storage.

4. API Endpoint Testing:
   - Test each API endpoint using tools like Postman or automated testing frameworks.
   - Ensure that the endpoints handle various scenarios such as invalid requests, missing parameters, and authentication errors appropriately.



5. Error Handling:
   - Test error scenarios such as invalid requests, server errors, and data validation failures.
   - Verify that the backend API returns appropriate error responses with relevant error codes and messages.
