import { useSelector } from "react-redux";
import CardBook from "./CardBook";

const ListContainer = () => {
  const readingBooks = useSelector((state) => state.books.readingList);
  return (
    <div className="listContainer">
      <h1 style={{fontFamily:"sans-serif",fontSize:"20px"}} >Reading</h1>
      <div className="bodyListContainer">
        {readingBooks.map((l) => {
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
              reading={true}
            ></CardBook>
          );
        })}
      </div>
    </div>

  );
};

export default ListContainer;
