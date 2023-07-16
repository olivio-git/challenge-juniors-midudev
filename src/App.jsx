import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/books.png";
import "./App.css";
import BodyContainer from "./components/BodyContainer";
import ListContainer from "./components/ListContainer";
import NavBar from "./components/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { booksCharge, getBooks } from "./redux-toolkit/actions/booksActions";
function App() {
  const [library, setLibrary] = useState([]);
  const dispatch = useDispatch();
  const data=JSON.parse(localStorage.getItem("allBooks"));
  const ejectFunction=async()=>{
    await dispatch(booksCharge());
    await dispatch(getBooks());
  }
  useEffect(() => {
    ejectFunction();
  }, []);
  return (
    <>
      <NavBar></NavBar>
      <div className="container">
        <BodyContainer></BodyContainer>
        <ListContainer></ListContainer>
      </div>
    </>
  );
}

export default App;
