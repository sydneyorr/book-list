import axios from "axios";
import {useEffect, useState} from "react";
import './App.css';
import BookForm from "./components/BookForm";
import Books from "./components/Books";

const App = () => {
  
  const [books, setBooks] = useState([])

  useEffect(() => {
    getBooks()
  }, [])

  const getBooks = async () => {
    try {
      let res = await axios.get("https://fakerapi.it/api/v1/books?_quantity=5")
      console.log(res.data.data)
      setBooks(res.data.data)
    } catch (err) {
      console.log("error occured in getbooks, debug");
    }
  };

  return (
    <div>
      <h1>Book list app</h1>
      <Books  books={books} />
      <BookForm books={books}/>
    </div>
  );
};

export default App;
