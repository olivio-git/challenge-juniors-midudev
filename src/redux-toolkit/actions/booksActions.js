import { createAsyncThunk } from '@reduxjs/toolkit';
import books from '../../../books.json';

export const booksCharge = createAsyncThunk('/booksCharge', async ()=> {
    try {
        const dataAllBooks=JSON.parse(localStorage.getItem("allBooks"));
        //verificamos si el localstorage empieza vacío, de ser asi cargamos todos los datos
        if(!dataAllBooks){ 
            localStorage.setItem("allBooks",JSON.stringify(books.library));
            const genres=books.library.map(item=>item.book.genre);
            const filterUniquesGenres=Array.from(new Set(genres));
            localStorage.setItem("genres",(filterUniquesGenres));
            return books;
        }
    } catch (error) {
        return error.message;
    }
});
export const getBooks = createAsyncThunk('/getBooks', async ()=> {
    try {
        const dataLocalstorage=JSON.parse(localStorage.getItem("allBooks"));
        const dataReadingBooks=JSON.parse(localStorage.getItem("readingBooks"));
        const dataGenres=localStorage.getItem("genres");
        if(dataLocalstorage){
            return {
                all:dataLocalstorage,
                reading:dataReadingBooks,
                genres:dataGenres.split(",")
            };
        } 
    } catch (error) {
        return error.message;
    }
});
export const booksReading = createAsyncThunk('/booksReading', async (tit)=> {
    try {
        if(tit){
            return tit;
        }
        
    } catch (error) {
        return error.message;
    }
});
export const booksNotReading = createAsyncThunk('/booksNotReading', async (tit)=> {
    try {
        if(tit){
            return tit;
        }
        
    } catch (error) {
        return error.message;
    }
});
export const searchAll=createAsyncThunk('/searchAll',async(search)=>{
    try {
        if(search){
            return search;
        }
    } catch (error) {
        return error.message;
    }
})