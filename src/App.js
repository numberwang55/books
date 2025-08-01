import './App.css';
import {useEffect, useContext} from "react";
import BookCreate from "./components/BookCreate.js";
import Booklist from "./components/Booklist.js";
import BookContext from "./context/books.js";

function App() {
    const {fetchBooks} = useContext(BookContext);

    useEffect(() => {
        fetchBooks();
    }, [])


    return (
        <div className="app">
            <h1>Reading List</h1>
            <Booklist/>
            <BookCreate/>
        </div>
    );
}

export default App;
