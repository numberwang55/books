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
    const editBookById = (id, title) => {
        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return {...book, title};
            }
        });
        setBooks(updatedBooks);
    }
    const deleteBookById = (id) => {
        const updatedBooks = books.filter(book => {
            return book.id !== id;
        })
        setBooks(updatedBooks);
    }

    return (
        <div className="app">
            <Booklist books={books} onDelete={deleteBookById} onEdit={editBookById} />
            <BookCreate onCreate={createBook}/>
        </div>
    );
}

export default App;
