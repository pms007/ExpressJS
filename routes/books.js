var express = require('express');
var router = express.Router();

const bookController = require("../app/controllers/book_controller.js");

//Get Book List
router.get('/',bookController.findAll);

// Get all published Books
router.get("/published", bookController.findAllPublished);

//Create New Book
router.post('/',bookController.create);

//Get Book by Id
router.get('/:id',bookController.findOne);

// Update a Book with id
router.put("/:id", bookController.update);

// Delete a Book with id
router.delete("/:id", bookController.delete);

module.exports = router;