import React, { useState, useEffect } from "react";
import "./App.css";
import ItemsContainer from "./components/ItemsContainer/ItemsContainer";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message);
        console.log(data.message);
      });
  }, []);

  return (
    <div className="App">
      {/* <h1>{message}</h1> */}
      <ItemsContainer />
    </div>
  );
}

export default App;
