var express = require("express");
var app = express();
const cors = require('cors');
let Books = require('./BooksSchema');
const connectDB = require('./MongoDBConnect');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// ---------------- HOME ----------------
app.get("/", (req, res) => res.send("Library Backend Running"));

// ---------------- ALL BOOKS ----------------
app.get('/allbooks', async (req, res) => {
    const data = await Books.find();
    return res.json(data);
});

// ---------------- GET BOOK BY ID ----------------
app.get('/getbook/:id', async (req, res) => {
    const book = await Books.findById(req.params.id);
    if (!book) return res.status(404).send("Book not found");
    res.json(book);
});

// ---------------- ADD BOOK ----------------
app.post('/addbooks', (req, res) => {
    let newbook = new Books(req.body);
    newbook.save()
        .then(() => res.status(200).json({ message: "Book added successfully" }))
        .catch(err => res.status(400).send("Failed to add book"));
});

// ---------------- UPDATE BOOK ----------------
app.post('/updatebook/:id', async (req, res) => {
    try {
        const update = {
            booktitle: req.body.booktitle,
            PubYear: req.body.PubYear,
            author: req.body.author,
            Topic: req.body.Topic,
            formate: req.body.formate
        };

        const updatedBook = await Books.findByIdAndUpdate(
            req.params.id,
            { $set: update },
            { new: true, runValidators: true }
        );

        if (!updatedBook) return res.status(404).json({ error: "Book not found" });

        res.json({ message: "Book updated successfully", book: updatedBook });

    } catch (err) {
        res.status(500).json({ error: "Update failed", details: err.message });
    }
});

// ---------------- DELETE BOOK ----------------
app.post('/deleteBook/:id', async (req, res) => {
    try {
        const deletedBook = await Books.findByIdAndDelete(req.params.id);
        if (!deletedBook) return res.status(404).json({ error: "Book not found" });
        res.send("Book Deleted");
    } catch (err) {
        res.status(500).json({ error: "Delete failed", details: err.message });
    }
});

// ---------------- START SERVER ----------------
(async () => {
    await connectDB();
    app.listen(5000, () => console.log("Server running on port 5000"));
})();
