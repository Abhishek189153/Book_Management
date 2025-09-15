const Book = require("../models/bookModel");

exports.getBooks = (req, res) => {
  Book.getAll((err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
};

exports.getBook = (req, res) => {
  Book.getById(req.params.id, (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!row) return res.status(404).json({ error: "Book not found" });
    res.json(row);
  });
};

exports.createBook = (req, res) => {
  const { title, author } = req.body;
  Book.create({ title, author }, (err, book) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json(book);
  });
};

exports.updateBook = (req, res) => {
  const { title, author } = req.body;
  Book.update(req.params.id, { title, author }, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(result);
  });
};

exports.deleteBook = (req, res) => {
  Book.remove(req.params.id, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(result);
  });
};
