import Header from "./components/Header";
import Footer from "./components/Footer";
import NewsFeeder from "./components/NewsFeeder";
import { NewsContext } from "./context";
import { useNewsQuery } from "./hooks";
import { useState } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const { newsData, filterdData, searchedData, loading, error } = useNewsQuery();

  const handleFilter = (categorie) => {

    filterdData(`${import.meta.env.VITE_NEWS_API_FILTER}=${categorie}`)

  }



  const debounce = (func, delay) => {
    let timeoutId;

    return function (...args) {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  };



  const handleDebouncedSearch = debounce((query) => {
    searchedData(`${import.meta.env.VITE_NEWS_API_SEARCH}=${query}`)
  }, 300);


  const handleInputChange = (value) => {
    setSearchQuery(value);
    handleDebouncedSearch(value);
  };


  return (
    <NewsContext.Provider value={{ newsData, loading, error, handleFilter, handleInputChange, searchedData, searchQuery, setSearchQuery }}>
      <Header />
      <NewsFeeder />
      <Footer />
    </NewsContext.Provider>
  );
}

export default App;
