import "./App.css";
import ItemsContainer from "./components/ItemsContainer/ItemsContainer";
import FilterContainer from "./components/FilterContainer/FilterContainer";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <FilterContainer />
      <ItemsContainer />
    </div>
  );
}

export default App;
