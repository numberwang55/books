import BookShow from "./BookShow.js";

function BookList({books, onDelete}) {
    const renderedBooks = books.map((book) => {
        return <BookShow key={book.id} book={book} onDelete={onDelete}/>
    })

    return (
        <div className="book-list">
            {renderedBooks}
        </div>
    )
}

export default BookList;