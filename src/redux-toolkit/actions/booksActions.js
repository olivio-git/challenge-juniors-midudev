import { createAsyncThunk } from '@reduxjs/toolkit';
import books from '../../../books.json';

export const booksCharge = createAsyncThunk('/booksCharge', async ()=> {
    try {
        const dataAllBooks=JSON.parse(localStorage.getItem("allBooks"));
        
        if(!dataAllBooks){ //si está vacio cargaremos los datos a localstorage
            localStorage.setItem("allBooks",JSON.stringify(books.library));
            return books;
        }//en caso de ya haya datos hacemos la insersion en nuestro estado global
    } catch (error) {
        return error.message;
    }
});
export const getBooks = createAsyncThunk('/getBooks', async ()=> {
    try {
        const dataLocalstorage=JSON.parse(localStorage.getItem("allBooks"));
        const dataReadingBooks=JSON.parse(localStorage.getItem("readingBooks"));
        if(dataLocalstorage){
            return {
                all:dataLocalstorage,
                reading:dataReadingBooks
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
