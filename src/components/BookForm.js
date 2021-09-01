import React from "react";
import { useState } from "react";

const BookForm = (props) => {
  const [bookTitle, setBookTitle] = useState("")
  const [bookAuthor, setBookAuthor] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    props.addBook({bookTitle, bookAuthor})
    props.setShowForm(false)
    setBookTitle("")
    setBookAuthor("")
  };

  return (
    <div>
      <h1>New Book</h1>
      <form onSubmit={handleSubmit}>
        <p>Book title:</p>
          <input 
            value={bookTitle}
            onChange={(e)=> setBookTitle(e.target.value)}
          />
        <p>Author:</p>
          <input 
            value={bookAuthor}
            onChange={(e)=> setBookAuthor(e.target.value)}
          />
        <button>Add</button>
      </form>
    </div>
  );
};

export default BookForm