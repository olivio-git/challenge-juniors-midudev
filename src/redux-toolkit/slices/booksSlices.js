import { createSlice } from "@reduxjs/toolkit";
import { booksCharge,getBooks,booksReading, booksNotReading, searchAll, filterGenre } from "../actions/booksActions";
import { getBooksLibrary, getBooksReading } from "../../services/getData";

const initialState = {
  library: [],
  readingList:[],
  genres:[]
};

const sliceBooks = createSlice({
  name: "books",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(booksCharge.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(booksCharge.fulfilled, (state, action) => {
        state.status = "success";
    });
    builder.addCase(booksCharge.rejected, (state, action) => {
        state.status = "rejected";
    });

    builder.addCase(getBooks.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(getBooks.fulfilled, (state, action) => {
        state.library=action.payload.all;
        action.payload.reading?state.readingList=action.payload.reading:state.readingList=[];
        state.genres=action.payload.genres;
        state.status = "success";
    });
    builder.addCase(getBooks.rejected, (state, action) => {
        state.status = "rejected";
    });

    builder.addCase(booksReading.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(booksReading.fulfilled, (state, action) => {
      if(action.payload){
        const obj=state.library.find(f=>f.book.title===action.payload);
        state.readingList=state.readingList.concat(obj);
        let dataAllBooks=getBooksLibrary();
        let dataReading=getBooksReading();
        if(!dataReading){
          dataReading=[];
        }
        if(!dataAllBooks){
          dataAllBooks=[];
        }
        dataReading.push(obj);
        localStorage.setItem("readingBooks",JSON.stringify(dataReading));
        const updateAll=dataAllBooks.filter(b=>b.book.title!=action.payload);
        localStorage.setItem("allBooks",JSON.stringify(updateAll));
        state.library=updateAll;
      }  
      state.status = "success";
    });
    builder.addCase(booksReading.rejected, (state, action) => {
        state.status = "rejected";
    });

    builder.addCase(booksNotReading.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(booksNotReading.fulfilled, (state, action) => {
      if(action.payload){
        const obj=state.readingList.find(f=>f.book.title===action.payload);
        state.library=state.library.concat(obj);
        let dataAllBooks=getBooksLibrary();
        let dataReading=getBooksReading();        
        if(!dataReading){
          dataReading=[];
        }
        if(!dataAllBooks){
          dataAllBooks=[];
        }
        dataAllBooks.push(obj);
        localStorage.setItem("allBooks",JSON.stringify(dataAllBooks));
        const updateAll=dataReading.filter(b=>b.book.title!=action.payload);
        localStorage.setItem("readingBooks",JSON.stringify(updateAll));
        state.readingList=updateAll;
      }  
      state.status = "success";
    });
    builder.addCase(booksNotReading.rejected, (state, action) => {
        state.status = "rejected";
    });


    builder.addCase(searchAll.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(searchAll.fulfilled, (state, action) => {
      if(action.payload.filter==="allBooks"){
        state.library=action.payload.data
      }else{
        state.readingList=action.payload.data;
      }
      state.status = "success";
    });
    builder.addCase(searchAll.rejected, (state, action) => {
        state.status = "rejected";
    });

    builder.addCase(filterGenre.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(filterGenre.fulfilled, (state, action) => {
      state.library=action.payload.data;
      state.status = "success";
    });
    builder.addCase(filterGenre.rejected, (state, action) => {
        state.status = "rejected";
    });
  },
});

export default sliceBooks.reducer;
