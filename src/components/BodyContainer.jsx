import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CardBook from "./CardBook";

const BodyContainer = () => {
  const librarys = useSelector((state) => state.books.library);
  useEffect(() => {}, [librarys]);
  return (
    <div className="allBooks">
      <div className="bodyContainer">

      {librarys.map((l) => {
        return (
          <CardBook
            key={l.book.ISBN}
            title={l.book.title}
            isbn={l.book.ISBN}
            pages={l.book.pages}
            genre={l.book.genre}
            cover={l.book.cover}
            synopsis={l.book.synopsis}
            year={l.book.year}
            author={l.book.author}
            reading={false}
          ></CardBook>
        );
      })}
    </div>
    </div>

  );
};

export default BodyContainer;
