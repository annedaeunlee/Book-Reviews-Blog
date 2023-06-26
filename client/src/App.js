import "./App.css";
import HomePage from "./components/pages/HomePage/HomePage";
import BookPage from "./components/pages/BookPage/BookPage";
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/book/*" element={<BookPage />} /> */}
        <Route
          path="*"
          loader={async ({ request }) => {
            // loaders can be async functions
            const res = await fetch("http://localhost:5000/books/", {
              signal: request.signal,
            });
            const books = await res.json();
            console.log(books);
            return books;
          }}
          element={<HomePage />}
        >
          {/* <Route
            path=":bookId"
            // loaders understand Fetch Responses and will automatically
            // unwrap the res.json(), so you can simply return a fetch
            loader={({ params }) => {
              return fetch(`http://localhost:5000/books/${params.bookId}`);
            }}
            element={<BookPage />}
          /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
