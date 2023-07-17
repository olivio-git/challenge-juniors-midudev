import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchAll } from "../redux-toolkit/actions/booksActions";

const NavBar = () => {
    const [filter,setFilter]=useState({
        filter:"allBooks",
        search:""
    });
    const dataGenres=useSelector((state)=>state.books.genres);
    const dispatch=useDispatch();
    const handleFilter=(e)=>{
        const property=e.target.name;
        const value=e.target.value;
        setFilter({
            ...filter,
            [property]:value
        });
    }
    const handleSearch=(e)=>{
        e.preventDefault();
        dispatch(
            searchAll({
                filter:filter.filter,
                search:filter.search
            })
        )
    }
    return ( 
        <div className="navbar">
            filtrar por
            <select name="" id="">
                <option value="">All</option>
                {
                    dataGenres&&dataGenres.map((g)=>{
                        return(
                            <option key={g} value={g}>{g}</option>
                        )
                    })
                }
            </select>
            buscar por
            <select name="filter" onChange={handleFilter} >
                <option value="allBooks">Library</option>
                <option value="readingBooks">Reading</option>
            </select>
            <form onSubmit={handleSearch}>
                <input onChange={handleFilter} value={filter.search} type="search" name="search" className="search" placeholder="Search" />
                <button className="btn-secondary">Search</button>
            </form>
        </div>
     );
}
 
export default NavBar;