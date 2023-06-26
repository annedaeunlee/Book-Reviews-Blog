import ItemsContainer from "../../containers/ItemsContainer/ItemsContainer";
import FilterContainer from "../../containers/FilterContainer/FilterContainer";
import Header from "../../containers/Header/Header";
import Navigation from "../../containers/Navigation/Navigation";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";

function HomePage() {
  const books = useLoaderData();

  return (
    <div className="Home">
      <Navigation />
      <Header />
      <FilterContainer />
      <ItemsContainer books={books} />
    </div>
  );
}

export default HomePage;
