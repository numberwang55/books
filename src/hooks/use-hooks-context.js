import {useContext} from "react";
import BooksContext from "../context/books.js";

export default function useBooksContext() {
    return useContext(BooksContext)
}