const db = require("./config/db");

db.run(
  "INSERT INTO books (title, author) VALUES (?, ?)",
  ["The Hobbit", "J.R.R. Tolkien"],
  function (err) {
    if (err) {
      return console.error("❌ Insert failed:", err.message);
    }
    console.log(`✅ Inserted book with ID: ${this.lastID}`);
    db.close(); // close the database after insert
  }
);
