import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchAll,filterGenre } from "../redux-toolkit/actions/booksActions";

const NavBar = () => {
  const [filter, setFilter] = useState({
    filterName: "allBooks",
    filterGenre:"all",
    range:1
  });

  const dataGenres = useSelector((state) => state.books.genres);

  const dispatch = useDispatch();
  const handleFilter = async (e) => {
    const property = e.target.name;
    const value = e.target.value;
    setFilter({
      ...filter,
      [property]: value,
    });
  };
  const handleSearch = (e) => {
    const property = e.target.name;
    const value = e.target.value;
    dispatch(
      searchAll({
        filter: filter.filterName,
        [property]: value,
      })
    );
  };
  const handleFilterGenre=()=>{
    dispatch(
      filterGenre(filter.filterGenre)
    )
  }
  // filterName: "allBooks",
  //   filterGenre:"all"
  const handleReset=()=>{
    setFilter({
      ...filter,
      filterName:"allBooks",
      filterGenre:"all"
    })
  }
  return (
    <div className="navbar">
      <div>
        <label>Pages number: {filter.range}</label>
        <input value={filter.range} type="range" name="range"onChange={handleFilter} />
      </div>
      <div>
        <button onClick={handleReset} className="btn btn-primary">Reset</button>
      </div>
      <div>
        Filter by:
        <select className="selectFocus selectStyles" name="filterGenre" onChange={handleFilter}>
          <option value="all">All</option>
          {dataGenres &&
            dataGenres.map((g) => {
              return (
                <option key={g} value={g}>
                  {g}
                </option>
              );
            })}
        </select>
        <button className="btn btn-primary" onClick={handleFilterGenre}>Filter</button>
      </div>
      <div className="searchBar">
        Search in:
        <select className="selectFocus selectStyles" name="filterName" onChange={handleFilter}>
          <option value="allBooks">Library</option>
          <option value="readingBooks">Reading</option>
        </select>
        <form onSubmit={handleSearch}>
          <input
            onChange={handleSearch}
            type="search"
            name="search"
            className="search"
            placeholder="Search"
          />
        </form>
      </div>
    </div>
  );
};

export default NavBar;
