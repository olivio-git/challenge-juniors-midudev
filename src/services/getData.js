
export const getBooksLibrary=()=>{
        const dataAllBooks=JSON.parse(localStorage.getItem("allBooks"));
        return dataAllBooks;
}
export const getBooksReading=()=>{
        const dataReading=JSON.parse(localStorage.getItem("readingBooks"));
        return dataReading;
}
export const getGenres=()=>{
        const dataGenres= localStorage.getItem("genres");
        return dataGenres;
}