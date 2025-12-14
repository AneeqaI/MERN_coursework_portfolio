import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AddBook from "./AddBook";
import BookUpdate from "./BookUpdate";
import Delete_Book from "./Delete_Book";
import DisplayData from "./DisplayData";
import DsplyBk_fncCompt from "./DsplyBk_fncCompt";

export default function App() {
  return (
    <BrowserRouter>
      <div className="container mt-3">
        <h2 className="mb-3">Online Library - Part 2</h2>

        <nav>
          <Link className="btn btn-success me-2" to="/">Add Book</Link>
          <Link className="btn btn-primary" to="/DisplayBooksF1">Display Books</Link>
        </nav>

        <Routes>
          <Route path="/" element={<AddBook />} />
          <Route path="/DisplayBooksF1" element={<DsplyBk_fncCompt />} />
          <Route path="/edit/:id" element={<BookUpdate />} />
          <Route path="/Delete/:id" element={<Delete_Book />} />
          <Route path="/displaydata" element={<DisplayData />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
