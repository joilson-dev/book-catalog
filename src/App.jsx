import { useState } from "react";
import "./App.css";
import BookCard from "./components/bookCard/BookCards";
import Header from "./components/header/Header";
import Search from "./components/search/Search";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Header />
      <Search setSearchTerm={setSearchTerm} />
      <BookCard searchTerm={searchTerm} />
    </>
  );
}

export default App;
