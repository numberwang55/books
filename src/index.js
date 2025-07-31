import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import App from "./App.js";
import BooksContext from "./context/books.js";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BooksContext.Provider value={5}>
            <App/>
        </BooksContext.Provider>
    </StrictMode>
);
