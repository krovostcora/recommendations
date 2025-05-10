import BookCard from "../components/cards/BookCard";

export const books = [
    { id: 1, title: "The Castle", author: "Franz Kafka", year: "1926", rating: 2, cover: "https://m.media-amazon.com/images/I/71dzb+J6k4L.jpg" },
    { id: 2, title: "Post Office", author: "Charles Bukowski", year: "1971", rating: 3, cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1555887577i/40409718.jpg" },
    { id: 3, title: "One Hundred Years of Solitude", author: "Gabriel García Márquez", year: "1967", rating: 5, cover: "https://m.media-amazon.com/images/I/81dy4cfPGuL.jpg" },
    { id: 4, title: "The Minds of Billy Milligan", author: "Daniel Keyes", year: "1981", rating: 5, cover: "https://m.media-amazon.com/images/I/71dlJfhrbBL.jpg" },
    { id: 5, title: "Factotum", author: "Charles Bukowski", year: "1975", rating: 3.8, cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1672739447i/497199.jpg" },
    { id: 6, title: "Ham on Rye", author: "Charles Bukowski", year: "1982", rating: 4.8, cover: "https://m.media-amazon.com/images/I/91v9ir3fRzL._AC_UF894,1000_QL80_.jpg" },
    { id: 7, title: "Sapiens", author: "Yuval Noah Harari", year: "2011", rating: 4.5, cover: "https://m.media-amazon.com/images/I/713jIoMO3UL.jpg" },
    { id: 8, title: "Captain Blood", author: "Rafael Sabatini", year: "1922", rating: 5, cover: "https://upload.wikimedia.org/wikipedia/commons/e/e3/1922-captainblood-cover.jpg" },
    { id: 9, title: "Search Inside Yourself", author: "Chade-Meng Tan", year: "2012", rating: 5, cover: "https://m.media-amazon.com/images/I/81RNhLSCaOL._AC_UF1000,1000_QL80_.jpg" },
    { id: 10, title: "Gangster Redemption", author: "Louis Ferrante", year: "2011", rating: 4.2, cover: "https://m.media-amazon.com/images/I/81oJZ15ZQnL.jpg" },
    { id: 11, title: "The Picture of Dorian Gray", author: "Oscar Wilde", year: "1890", rating: 4.5, cover: "https://m.media-amazon.com/images/I/614xtdCbfNL.jpg" },
    { id: 12, title: "A Hero of Our Time", author: "Mikhail Lermontov", year: "1840", rating: 4, cover: "https://m.media-amazon.com/images/I/81c-2D2MeZL._AC_UF1000,1000_QL80_.jpg" },
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
                        title={book.title}
                        author={book.author}
                        year={book.year}
                        rating={book.rating}
                        cover={book.cover}
                    />
                ))}
            </div>
        </>
    );
}