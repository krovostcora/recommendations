import MovieCard from "../components/cards/MovieCard"

export const movies = [
    { id: 1, title: "Fight Club", year: 1999, country: "USA", rating: 5, poster: "https://upload.wikimedia.org/wikipedia/en/f/fc/Fight_Club_poster.jpg", genres: ["Drama", "Thriller"] },
    { id: 2,title: "Bridget Jones's Diary", year: 2001, country: "UK", rating: 4.5, poster: "https://m.media-amazon.com/images/I/71Igyed8JDL._AC_UF1000,1000_QL80_.jpg", genres: ["Comedy", "Romance"] },
    { id: 3,title: "Anger Management", year: 2003, country: "USA", rating: 4.5, poster: "https://m.media-amazon.com/images/M/MV5BYjFmNjIyNmQtMDhmNS00NDNmLTk3YTQtM2YzMmJiMTI3MDMzXkEyXkFqcGc@._V1_.jpg", genres: ["Comedy"] },
    { id: 4,title: "El Camino", year: 2019, country: "USA", rating: 4, poster: "https://m.media-amazon.com/images/M/MV5BYTYxMjI2YzUtODQ5Mi00M2JmLTlmNzItOTlkM2MyM2ExM2RlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", genres: ["Crime", "Drama", "Thriller"] },
    { id: 5,title: "Beats", year: 2019, country: "UK", rating: 3, poster: "https://images.justwatch.com/poster/130677905/s718/beats.jpg", genres: ["Drama", "Music"] },
    { id: 6,title: "Breakfast at Tiffany's", year: 1961, country: "USA", rating: 5, poster: "https://s3.amazonaws.com/nightjarprod/content/uploads/sites/130/2021/06/06232658/aQFwKTNzp02rk0GFRAjTdmbZBNh.jpg", genres: ["Comedy", "Romance"] },
    { id: 7,title: "The Double", year: 2013, country: "UK", rating: 3.5, poster: "https://m.media-amazon.com/images/S/pv-target-images/59389e2db48d929e758d992e496485a619c7ef33d2b84d644c06f7e770e309e1.jpg", genres: ["Comedy", "Drama", "Mystery"] },
    { id: 8,title: "Strays", year: 2023, country: "USA", rating: 2.7, poster: "https://m.media-amazon.com/images/M/MV5BYTE4ZDBjMjctZTc0MS00ZGQ1LWIzZDEtZjFmYmE5MDdkNmMxXkEyXkFqcGc@._V1_.jpg", genres: ["Comedy", "Drama"] },
    { id: 9,title: "The Terminal", year: 2004, country: "USA", rating: 5, poster: "https://m.media-amazon.com/images/I/91avFh9KUhL._AC_UF894,1000_QL80_.jpg", genres: ["Comedy", "Drama"] },
    { id: 10,title: "500 Days of Summer", year: 2009, country: "USA", rating: 2.2, poster: "https://upload.wikimedia.org/wikipedia/en/d/d1/Five_hundred_days_of_summer.jpg", genres: ["Drama", "Romance"] },
    { id: 11,title: "Trainspotting", year: 1996, country: "UK", rating: 4.8, poster: "https://upload.wikimedia.org/wikipedia/en/7/71/Trainspotting_ver2.jpg", genres: ["Drama", "Crime"] },
    { id: 12,title: "Dark Shadows", year: 2012, country: "USA", rating: 3.7, poster: "https://m.media-amazon.com/images/M/MV5BMjNiYWMxZjctMzEyZS00NDZmLTgxYmYtM2NmOGI0MmY3ZTJiXkEyXkFqcGc@._V1_.jpg", genres: ["Comedy", "Fantasy", "Horror"] },
    { id: 13,title: "Baby Driver", year: 2017, country: "UK", rating: 3.7, poster: "https://upload.wikimedia.org/wikipedia/en/8/8e/Baby_Driver_poster.jpg", genres: ["Action", "Crime", "Music"] },
    { id: 14,title: "The Book Thief", year: 2013, country: "USA", rating: 3.9, poster: "https://chrisreedfilm.com/wp-content/uploads/2013/11/book_thief.jpg", genres: ["Drama", "War"] },
]


export default function Movies() {
    return (
        <>
            <h2>Movie Recommendations</h2>
            <div className="movie-grid">
                {movies.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        id={movie.id}
                        title={movie.title}
                        year={movie.year}
                        country={movie.country}
                        rating={movie.rating}
                        genres={movie.genres}
                        poster={movie.poster}
                    />
                ))}
            </div>
        </>
    )
}
