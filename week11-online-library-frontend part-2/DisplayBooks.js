import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function DisplayBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/allbooks")
      .then(res => setBooks(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="mt-4">
      <h3>Book List</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Book Title</th>
            <th>Pub Year</th>
            <th>Author</th>
            <th>Topic</th>
            <th>Format</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {books.map(book => (
            <tr key={book._id}>
              <td>{book.booktitle}</td>
              <td>{book.PubYear}</td>
              <td>{book.author}</td>
              <td>{book.Topic}</td>
              <td>{book.formate}</td>
              <td>
                <Link to={`/edit/${book._id}`} className="btn btn-warning btn-sm me-2">Edit</Link>
                <Link to={`/delete/${book._id}`} className="btn btn-danger btn-sm">Delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
    