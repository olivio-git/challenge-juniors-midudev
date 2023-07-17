import { createAsyncThunk } from "@reduxjs/toolkit";
import books from "../../../books.json";
import { getBooksLibrary, getBooksReading, getGenres } from "../../services/getData";

export const booksCharge = createAsyncThunk("/booksCharge", async () => {
  try {
    const dataAllBooks = getBooksLibrary();
    //verificamos si el localstorage empieza vacío, de ser asi cargamos todos los datos
    if (!dataAllBooks) {
      localStorage.setItem("allBooks", JSON.stringify(books.library));
      const genres = books.library.map((item) => item.book.genre);
      const filterUniquesGenres = Array.from(new Set(genres));
      localStorage.setItem("genres", filterUniquesGenres);
      return books;
    }
  } catch (error) {
    return error.message;
  }
});
export const getBooks = createAsyncThunk("/getBooks", async () => {
  try {
    const dataLocalstorage = getBooksLibrary();
    const dataReadingBooks = getBooksReading();
    const dataGenres =getGenres();
    if (dataLocalstorage) {
      return {
        all: dataLocalstorage,
        reading: dataReadingBooks,
        genres: dataGenres.split(","),
      };
    }
  } catch (error) {
    return error.message;
  }
});
export const booksReading = createAsyncThunk("/booksReading", async (tit) => {
  try {
    if (tit) {
      return tit;
    }
  } catch (error) {
    return error.message;
  }
});
export const booksNotReading = createAsyncThunk(
  "/booksNotReading",
  async (tit) => {
    try {
      if (tit) {
        return tit;
      }
    } catch (error) {
      return error.message;
    }
  }
);
export const searchAll = createAsyncThunk("/searchAll", async (search) => {
  try {
    if (search) {
      if (search.filter === "allBooks") {
        const dataLocalstorage = getBooksLibrary();
        const filteredBooks = dataLocalstorage.filter((item) =>
          item.book.title.toLowerCase().includes(search.search)
        );
        if (!filteredBooks.length < 1)
          return { data: filteredBooks, filter: search.filter };
        return { data: dataLocalstorage, filter: search.filter };
      } else {
        const dataReadingBooks = getBooksReading();
        const filteredBooks = dataReadingBooks.filter((item) =>
          item.book.title.toLowerCase().includes(search.search)
        );
        if (!filteredBooks.length < 1)
          return { data: filteredBooks, filter: search.filter };
        return { data: dataReadingBooks, filter: search.filter };
      }
    }
  } catch (error) {
    return error.message;
  }
});
