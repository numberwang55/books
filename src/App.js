import './App.css';
import {useState} from "react";
import BookCreate from "./components/BookCreate.js";
import Booklist from "./components/Booklist.js";

function App() {
    const [books, setBooks] = useState([]);

    const createBook = (title) => {
        const updatedBooks = [...books, {
            id: Math.round(Math.random() * 9999), title
        }
        ];
        setBooks(updatedBooks);
    }
    const editBook = (book) => {
    }
    const deleteBookById = (id) => {
        const updatedBooks = books.filter(book => {
            return book.id !== id;
        })
        setBooks(updatedBooks);
    }

    return (
        <div className="app">
            <Booklist books={books} onDelete={deleteBookById} />
            <BookCreate onCreate={createBook}/>
        </div>
    );
}

export default App;
