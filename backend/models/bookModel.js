const db = require("../config/db");

// Get all books
exports.getAll = (callback) => {
  db.all("SELECT * FROM books", [], callback);
};

// Get book by ID
exports.getById = (id, callback) => {
  db.get("SELECT * FROM books WHERE id = ?", [id], callback);
};

// Add book
exports.create = (book, callback) => {
  db.run("INSERT INTO books (title, author) VALUES (?, ?)",
    [book.title, book.author],
    function (err) {
      callback(err, { id: this.lastID, ...book });
    });
};

// Update book
exports.update = (id, book, callback) => {
  db.run("UPDATE books SET title = ?, author = ? WHERE id = ?",
    [book.title, book.author, id],
    function (err) {
      callback(err, { updated: this.changes });
    });
};

// Delete book
exports.remove = (id, callback) => {
  db.run("DELETE FROM books WHERE id = ?", [id], function (err) {
    callback(err, { deleted: this.changes });
  });
};
