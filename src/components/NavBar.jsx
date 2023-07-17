import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchAll } from "../redux-toolkit/actions/booksActions";

const NavBar = () => {
  const [filter, setFilter] = useState({
    filterName: "allBooks",
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
  return (
    <div className="navbar">
      <div>
        Filter by:
        <select className="selectFocus" name="" id="">
          <option value="">All</option>
          {dataGenres &&
            dataGenres.map((g) => {
              return (
                <option key={g} value={g}>
                  {g}
                </option>
              );
            })}
        </select>
      </div>
      <div>
        Search in:
        <select className="selectFocus" name="filterName" onChange={handleFilter}>
          <option value="allBooks">Library</option>
          <option value="readingBooks">Reading</option>
        </select>
      </div>
      <div>
        <form onSubmit={handleSearch}>
          <input
            onChange={handleSearch}
            type="search"
            name="search"
            className="search"
            placeholder="Search"
          />
          {/* <button className="btn-secondary">Search</button> */}
        </form>
      </div>
    </div>
  );
};

export default NavBar;
