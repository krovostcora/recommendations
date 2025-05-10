import BookCard from "../components/cards/BookCard";

export const books = [
    { id: "book1", title: "The Castle", type: "book", author: "Franz Kafka", year: "1926", rating: 2, poster: "https://m.media-amazon.com/images/I/71dzb+J6k4L.jpg" },
    { id: "book2", title: "Post Office", type: "book", author: "Charles Bukowski", year: "1971", rating: 3, poster: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1555887577i/40409718.jpg" },
    { id: "book3", title: "One Hundred Years of Solitude", type: "book", author: "Gabriel García Márquez", year: "1967", rating: 5, poster: "https://m.media-amazon.com/images/I/81dy4cfPGuL.jpg" },
    { id: "book4", title: "The Minds of Billy Milligan", type: "book", author: "Daniel Keyes", year: "1981", rating: 5, poster: "https://m.media-amazon.com/images/I/71dlJfhrbBL.jpg" },
    { id: "book5", title: "Factotum", type: "book", author: "Charles Bukowski", year: "1975", rating: 3.8, poster: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1672739447i/497199.jpg" },
    { id: "book6", title: "Ham on Rye", type: "book", author: "Charles Bukowski", year: "1982", rating: 4.8, poster: "https://m.media-amazon.com/images/I/91v9ir3fRzL._AC_UF894,1000_QL80_.jpg" },
    { id: "book7", title: "Sapiens", type: "book", author: "Yuval Noah Harari", year: "2011", rating: 4.5, poster: "https://m.media-amazon.com/images/I/713jIoMO3UL.jpg" },
    { id: "book8", title: "Captain Blood", type: "book", author: "Rafael Sabatini", year: "1922", rating: 5, poster: "https://upload.wikimedia.org/wikipedia/commons/e/e3/1922-captainblood-cover.jpg" },
    { id: "book9", title: "Search Inside Yourself", type: "book", author: "Chade-Meng Tan", year: "2012", rating: 5, poster: "https://m.media-amazon.com/images/I/81RNhLSCaOL._AC_UF1000,1000_QL80_.jpg" },
    { id: "book10", title: "Gangster Redemption", type: "book", author: "Louis Ferrante", year: "2011", rating: 4.2, poster: "https://m.media-amazon.com/images/I/81oJZ15ZQnL.jpg" },
    { id: "book11", title: "The Picture of Dorian Gray", type: "book", author: "Oscar Wilde", year: "1890", rating: 4.5, poster: "https://m.media-amazon.com/images/I/614xtdCbfNL.jpg" },
    { id: "book12", title: "A Hero of Our Time", type: "book", author: "Mikhail Lermontov", year: "1840", rating: 4, poster: "https://m.media-amazon.com/images/I/81c-2D2MeZL._AC_UF1000,1000_QL80_.jpg" }
];

export default function Books() {
    return (
        <>
            <h2>Book Recommendations</h2>
            <div className="movie-grid">
                {books.map((book) => (
                    <BookCard
                        key={book.id}
                        id={book.id}
                        type={book.type}
                        title={book.title}
                        author={book.author}
                        year={book.year}
                        rating={book.rating}
                        poster={book.poster}
                    />
                ))}
            </div>
        </>
    );
}