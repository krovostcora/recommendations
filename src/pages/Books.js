import BookCard from "../components/cards/BookCard";


export const books = [
    { title: "The Castle", author: "Franz Kafka", year: "1926", rating: 2, cover: "https://m.media-amazon.com/images/I/71dzb+J6k4L.jpg" },
    { title: "Post Office", author: "Charles Bukowski", year: "1971", rating: 3, cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1555887577i/40409718.jpg" },
    { title: "One Hundred Years of Solitude", author: "Gabriel García Márquez", year: "1967", rating: 5, cover: "https://m.media-amazon.com/images/I/81dy4cfPGuL.jpg" },
    { title: "The Minds of Billy Milligan", author: "Daniel Keyes", year: "1981", rating: 5, cover: "https://m.media-amazon.com/images/I/71dlJfhrbBL.jpg" },
    { title: "Factotum", author: "Charles Bukowski", year: "1975", rating: 3.8, cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1672739447i/497199.jpg" },
    { title: "Ham on Rye", author: "Charles Bukowski", year: "1982", rating: 4.8, cover: "https://m.media-amazon.com/images/I/91v9ir3fRzL._AC_UF894,1000_QL80_.jpg" },
    { title: "Sapiens", author: "Yuval Noah Harari", year: "2011", rating: 4.5, cover: "https://m.media-amazon.com/images/I/713jIoMO3UL.jpg" },
    { title: "Nexus", author: "Yuval Noah Harari", year: "2013", cover: "https://m.media-amazon.com/images/I/715fA0g27aL.jpg" },
    { title: "21 Lessons for the 21st Century", author: "Yuval Noah Harari", year: "2018",  cover: "https://i1.sndcdn.com/artworks-000405271329-cwsofq-t1080x1080.jpg" },
    { title: "Captain Blood", author: "Rafael Sabatini", year: "1922", rating: 5, cover: "https://upload.wikimedia.org/wikipedia/commons/e/e3/1922-captainblood-cover.jpg" },
    { title: "Search Inside Yourself", author: "Chade-Meng Tan", year: "2012", rating: 5, cover: "https://m.media-amazon.com/images/I/81RNhLSCaOL._AC_UF1000,1000_QL80_.jpg" },
    { title: "Gangster Redemption", author: "Louis Ferrante", year: "2011", rating: 4.2, cover: "https://m.media-amazon.com/images/I/81oJZ15ZQnL.jpg" },
    { title: "The Picture of Dorian Gray", author: "Oscar Wilde", year: "1890", rating: 4.5, cover: "https://m.media-amazon.com/images/I/614xtdCbfNL.jpg" },
    { title: "A Hero of Our Time", author: "Mikhail Lermontov", year: "1840", rating: 4, cover: "https://m.media-amazon.com/images/I/81c-2D2MeZL._AC_UF1000,1000_QL80_.jpg" },
];

export default function Books() {
    return (
        <>
            <h2>Book Recommendations</h2>
            <div className="movie-grid">
                {books.map((book, idx) => (
                    <BookCard
                        key={idx}
                        id={book.title} // Using title as id for simplicity
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
