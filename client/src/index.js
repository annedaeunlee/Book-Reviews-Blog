import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import BookPage from "./components/pages/BookPage/BookPage";
import HomePage from "./components/pages/HomePage/HomePage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        loader={async ({ request }) => {
          const res = await fetch("http://localhost:5000/books/", {
            signal: request.signal,
          });
          const books = await res.json();
          console.log(books);
          return books;
        }}
        element={<HomePage />}
      />
      <Route
        path="/:bookId"
        loader={async ({ params }) => {
          const res = await fetch(
            `http://localhost:5000/books/${params.bookId}`
          );
          const book = await res.json();
          console.log(book);
          return book;
        }}
        element={<BookPage />}
      />
    </>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
