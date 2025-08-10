import './App.css';
import {useEffect} from "react";
import BookCreate from "./components/BookCreate.js";
import Booklist from "./components/Booklist.js";
import useBooksContext from "./hooks/use-hooks-context.js";

function App() {
    const {fetchBooks} = useBooksContext();

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
