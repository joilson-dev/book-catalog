import "./App.css";
import BookCard from "./components/bookCard/BookCards";
import Header from "./components/header/Header";
import Search from "./components/search/Search";

function App() {
  return (
    <>
      <Header />
      <Search />
      <BookCard />
    </>
  );
}

export default App;
