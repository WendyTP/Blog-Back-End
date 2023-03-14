/*
set up routes for client to use when sending HTTP requests.
  /api/tutorials: GET, POST, DELETE
  /api/tutorials/:id: GET, PUT, DELETE
  /api/tutorials/published: GET

Q1: what is the object type of tutorials? => access point to all the methods defined in tutorial.controller.js
Q2: what does module.exports exported? => an anonymous function
*/


module.exports = app => {
  const tutorials = require("../controllers/tutorial.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", tutorials.create);

  // Retrieve all Tutorials
  router.get("/", tutorials.findAll);

  // Retrieve all published Tutorials
  router.get("/published", tutorials.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", tutorials.findOne);

  // Update a Tutorial with id
  router.put("/:id", tutorials.update);

  // Delete a Tutorial with id
  router.delete("/:id", tutorials.delete);

  // Delete all Tutorials
  router.delete("/", tutorials.deleteAll);

  app.use('/api/tutorials', router);
};