import { useDispatch } from "react-redux";
import { booksNotReading, booksReading } from "../redux-toolkit/actions/booksActions";

const CardBook = ({isbn,title,pages,genre,cover,synopsis,year,author,reading}) => {
    const dispatch=useDispatch();
    const handleReading=(title)=>{
        dispatch(
            booksReading(title)
        )
    }
    const handleNotReading=(title)=>{
        dispatch(
            booksNotReading(title)
        )
    }
    return ( 
        <div 
        onClick={()=>{
            !reading?handleReading(title):null
        }}
        className={"card"}
        style={{backgroundImage:`url("${cover}")`}}
        >
        {
            reading?(
            <button
            className="delete"
            onClick={()=>handleNotReading(title)}
            >Delete</button>):null
        }
        </div>
     );
}
 
export default CardBook;