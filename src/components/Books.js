import React from "react"

const Books = (props) => {

  const renderBooks = () => {
    return props.books.map((book) => {
      return (
        <div>
          <h2>{book.title}</h2>
          <p>{book.author}</p>
          <p>{book.genre}</p>
        </div>
      );
    });
  };

  return (
    <div>
      <p>Here are your books</p>
      {renderBooks()}
    </div>
  );
};

export default Books