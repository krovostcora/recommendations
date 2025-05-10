import CartoonCard from "../components/cards/CartoonCard";

export const cartoons = [
    { title: "Cars", year: 2006, country: "USA", type: "Movie", genres: ["Comedy", "Adventure"], poster: "https://m.media-amazon.com/images/M/MV5BNDJiMDE1YTMtNjdjYS00M2RlLWJhOWUtYWU5ODQ0OWQwNTQ0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
    { title: "Cars 2", year: 2011, country: "USA", type: "Movie", genres: ["Comedy", "Adventure"], poster: "https://m.media-amazon.com/images/M/MV5BMTUzNTc3MTU3M15BMl5BanBnXkFtZTcwMzIxNTc3NA@@._V1_.jpg" },
    { title: "Cars 3", year: 2017, country: "USA", type: "Movie", genres: ["Comedy", "Adventure"], poster: "https://m.media-amazon.com/images/M/MV5BMTc0NzU2OTYyN15BMl5BanBnXkFtZTgwMTkwOTg2MTI@._V1_.jpg" },
    { title: "Brave", year: 2012, country: "USA", type: "Movie", genres: ["Adventure", "Fantasy"], poster: "https://m.media-amazon.com/images/M/MV5BMzgwODk3ODA1NF5BMl5BanBnXkFtZTcwNjU3NjQ0Nw@@._V1_FMjpg_UX1000_.jpg" },
    { title: "Luca", year: 2021, country: "Italy", type: "Movie", genres: ["Comedy", "Fantasy"], poster: "https://m.media-amazon.com/images/I/81scpLBtInS._AC_UF1000,1000_QL80_.jpg" },
    { title: "Soul", year: 2020, country: "USA", type: "Movie", genres: ["Drama", "Fantasy"], poster: "https://lumiere-a.akamaihd.net/v1/images/p_soul_disneyplus_v2_20907_764da65d.jpeg?region=0%2C0%2C540%2C810" },
    { title: "Madagascar", year: 2005, country: "USA", type: "Movie", genres: ["Comedy", "Adventure"], poster: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p87313_p_v10_ax.jpg" },
    { title: "Shrek", year: 2001, country: "USA", type: "Movie", genres: ["Comedy", "Fantasy"], poster: "https://m.media-amazon.com/images/S/pv-target-images/030f9ae65cadc9afc0e3c51ed35d2ddeb814f213d7a87fc5aa4445738ebb32b9.jpg" },
    { title: "Rick and Morty", year: 2013, country: "USA", type: "Series", genres: ["Sci-Fi", "Comedy"], poster: "https://m.media-amazon.com/images/I/81CwjScs2aL.jpg" },
    { title: "The Simpsons", year: 1989, country: "USA", type: "Series", genres: ["Comedy", "Family"], poster: "https://m.media-amazon.com/images/M/MV5BNTU2OWE0YWYtMjRlMS00NTUwLWJmZWUtODFhNzJiMGJlMzI3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
    { title: "Futurama", year: 1999, country: "USA", type: "Series", genres: ["Sci-Fi", "Comedy"], poster: "https://pics.filmaffinity.com/futurama-269665233-large.jpg" },
    { title: "Winx Club", year: 2004, country: "Italy", type: "Series", genres: ["Fantasy", "Adventure"], poster: "https://m.media-amazon.com/images/I/81VRHjuiz0L._AC_UF1000,1000_QL80_.jpg" },
    { title: "W.I.T.C.H.", year: 2004, country: "France", type: "Series", genres: ["Fantasy", "Adventure"], poster: "https://m.media-amazon.com/images/I/71Mu7TubTAL._AC_UF1000,1000_QL80_.jpg" },
    { title: "Bratz", year: 2005, country: "USA", type: "Series", genres: ["Comedy", "Fashion"], poster: "https://m.media-amazon.com/images/M/MV5BNmQ1ODMxYjYtODkxYi00NTQyLTlkZTItYTE4ZDNkZWZkZWYxXkEyXkFqcGc@._V1_.jpg" },
    { title: "The Penguins of Madagascar", year: 2008, country: "USA", type: "Series", genres: ["Comedy", "Action"], poster: "https://m.media-amazon.com/images/M/MV5BMTEyMDg4MDU4MjdeQTJeQWpwZ15BbWU4MDQyOTc3MjIx._V1_.jpg" },
    { title: "Jimmy Neutron: Boy Genius", year: 2001, country: "USA", type: "Movie", genres: ["Comedy", "Sci-Fi"], poster: "https://m.media-amazon.com/images/M/MV5BOTVlOWQ0ZDctNzRjOC00ZThkLWE1OTItODg4NTJmZmE3NDUxXkEyXkFqcGc@._V1_.jpg" },
    { title: "The Emperor's New School", year: 2006, country: "USA", type: "Series", genres: ["Comedy"], poster: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p186023_b_v8_al.jpg" },
    { title: "Ben 10", year: 2005, country: "USA", type: "Series", genres: ["Action", "Sci-Fi"], poster: "https://m.media-amazon.com/images/M/MV5BYWVjODZjNDgtYjk4ZS00OTg5LTg5NDQtZDMxZDQ4ZmM5MGJmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
    { title: "Code Lyoko", year: 2003, country: "France", type: "Series", genres: ["Sci-Fi", "Adventure"], poster: "https://m.media-amazon.com/images/M/MV5BOTYyZjFhNmYtMDcwMS00MjcwLTk5MGUtZGYzNTY3ZTAyZDAxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
    { title: "Phineas and Ferb", year: 2007, country: "USA", type: "Series", genres: ["Comedy", "Adventure"], poster: "https://m.media-amazon.com/images/M/MV5BMTc1NjcxNzg4MF5BMl5BanBnXkFtZTgwOTMzNzgyMDE@._V1_.jpg" },
    { title: "My goldfish is evil", year: 2010, country: "Germany", type: "Series", genres: ["Comedy", "Fantasy"], poster: "https://www.dvdplanetstore.pk/wp-content/uploads/2017/12/wwakZvggCQSVZZnjmAZ0Pq0zfQp.jpg" },
    { title: "School of Vampires", year: 2006, country: "Germany", type: "Series", genres: ["Comedy", "Fantasy"], poster: "https://m.media-amazon.com/images/M/MV5BZTZlNmM4MDAtODRjNC00ZDMxLTliNjMtNWNhN2QwZjQ2YTljXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
    { title: "Avatar: The Last Airbender", year: 2005, country: "USA", type: "Series", genres: ["Adventure", "Fantasy"], poster: "https://m.media-amazon.com/images/I/71ICRka7FhL.jpg" }
];

export default function Cartoons() {
    return (
        <>
            <h2>Cartoon Recommendations</h2>
            <div className="movie-grid">
                {cartoons.map((cartoon, idx) => (
                    <CartoonCard key={idx} {...cartoon} />
                ))}
            </div>
        </>
    );
}
