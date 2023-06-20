import React, { useState, useEffect } from "react";
import "./App.css";
import ItemsContainer from "./components/ItemsContainer/ItemsContainer";
import FilterContainer from "./components/FilterContainer/FilterContainer";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";

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
      <Navigation />
      <Header />
      <FilterContainer />
      <ItemsContainer />
    </div>
  );
}

export default App;
