# Learn ExpressJS

### Basic Routing

```javascript
app.METHOD(PATH,HANDLER)
```

### Route Parameters

```javascript
app.get('/users/:userId', function (req, res) {
  res.send(req.params)
})
```

### Route handlers

```javascript
var funA = function (req, res, next) {
  console.log('FunA')
  next();
}
var funB = function (req, res, next) {
  console.log('FunB')
  next();
}
router.get('/handle/next', [funA, funB], function (req, res, next) {
  console.log('The response will be sent by the next function ...');
  next();
}, function (req, res) {
  res.send('Handled next method!');
});
```

### Middleware

```javascript
router.use(function(req,res,next){
	console.log("Time:",Date.now());
	next();
});
```

### MongoDB

```javascript
const MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/test';

MongoClient.connect(url, function(err, db) {
	if (err) throw new Error(err);
	console.log("MongoDB Connected!");
	db.close();
});
```
### If you needs id field instead of \_id
```javascript
schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});
```
### CRUD with Mongoose

```javascript
const db = require("../models");
const Book = db.books;

// Create and Save a new Book
exports.create = (req, res) => {
  // Validate request
    if (!req.body.title) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
  }

  // Create a Book
  const book = new Book({
      title: req.body.title,
      description: req.body.description,
      published: req.body.published ? req.body.published : false
  });

  // Save Book in the database
    book
    .save(book)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });

};

// Retrieve all Books from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
    var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

    Book.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

// Find a single Book with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

    Book.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Book with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Book with id=" + id });
    });
};

// Update a Book by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }

    const id = req.params.id;

    Book.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Book with id=${id}. Maybe Book was not found!`
        });
      } else res.send({ message: "Book was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Book with id=" + id
      });
    });

};

// Delete a Book with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

    Book.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Book with id=${id}. Maybe Book was not found!`
        });
      } else {
        res.send({
          message: "Book was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Book with id=" + id
      });
    });
};

// Find all published Books
exports.findAllPublished = (req, res) => {
  Book.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving books."
      });
    });
};
```



