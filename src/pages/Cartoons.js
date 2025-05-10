import CartoonCard from "../components/cards/CartoonCard";

export const cartoons = [
    { id: "cartoon1", title: "Cars", type: "cartoon", year: 2006, country: "USA", genres: ["Comedy", "Adventure"], poster: "https://m.media-amazon.com/images/M/MV5BNDJiMDE1YTMtNjdjYS00M2RlLWJhOWUtYWU5ODQ0OWQwNTQ0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
    { id: "cartoon2", title: "Cars 2", type: "cartoon", year: 2011, country: "USA", genres: ["Comedy", "Adventure"], poster: "https://m.media-amazon.com/images/M/MV5BMTUzNTc3MTU3M15BMl5BanBnXkFtZTcwMzIxNTc3NA@@._V1_.jpg" },
    { id: "cartoon3", title: "Cars 3", type: "cartoon", year: 2017, country: "USA", genres: ["Comedy", "Adventure"], poster: "https://m.media-amazon.com/images/M/MV5BMTc0NzU2OTYyN15BMl5BanBnXkFtZTgwMTkwOTg2MTI@._V1_.jpg" },
    { id: "cartoon4", title: "Brave", type: "cartoon", year: 2012, country: "USA", genres: ["Adventure", "Fantasy"], poster: "https://m.media-amazon.com/images/M/MV5BMzgwODk3ODA1NF5BMl5BanBnXkFtZTcwNjU3NjQ0Nw@@._V1_FMjpg_UX1000_.jpg" },
    { id: "cartoon5", title: "Luca", type: "cartoon", year: 2021, country: "Italy", genres: ["Comedy", "Fantasy"], poster: "https://m.media-amazon.com/images/I/81scpLBtInS._AC_UF1000,1000_QL80_.jpg" },
    { id: "cartoon6", title: "Soul", type: "cartoon", year: 2020, country: "USA", genres: ["Drama", "Fantasy"], poster: "https://lumiere-a.akamaihd.net/v1/images/p_soul_disneyplus_v2_20907_764da65d.jpeg?region=0%2C0%2C540%2C810" },
    { id: "cartoon7", title: "Madagascar", type: "cartoon", year: 2005, country: "USA", genres: ["Comedy", "Adventure"], poster: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p87313_p_v10_ax.jpg" },
    { id: "cartoon8", title: "Shrek", type: "cartoon", year: 2001, country: "USA", genres: ["Comedy", "Fantasy"], poster: "https://m.media-amazon.com/images/S/pv-target-images/030f9ae65cadc9afc0e3c51ed35d2ddeb814f213d7a87fc5aa4445738ebb32b9.jpg" },
    { id: "cartoon9", title: "Rick and Morty", type: "cartoon", year: 2013, country: "USA", genres: ["Sci-Fi", "Comedy"], poster: "https://m.media-amazon.com/images/I/81CwjScs2aL.jpg" },
    { id: "cartoon10", title: "The Simpsons", type: "cartoon", year: 1989, country: "USA", genres: ["Comedy", "Family"], poster: "https://m.media-amazon.com/images/M/MV5BNTU2OWE0YWYtMjRlMS00NTUwLWJmZWUtODFhNzJiMGJlMzI3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
    { id: "cartoon11", title: "Futurama", type: "cartoon", year: 1999, country: "USA", genres: ["Sci-Fi", "Comedy"], poster: "https://pics.filmaffinity.com/futurama-269665233-large.jpg" },
    { id: "cartoon12", title: "Winx Club", type: "cartoon", year: 2004, country: "Italy", genres: ["Fantasy", "Adventure"], poster: "https://m.media-amazon.com/images/I/81VRHjuiz0L._AC_UF1000,1000_QL80_.jpg" },
    { id: "cartoon13", title: "W.I.T.C.H.", type: "cartoon", year: 2004, country: "France", genres: ["Fantasy", "Adventure"], poster: "https://m.media-amazon.com/images/I/71Mu7TubTAL._AC_UF1000,1000_QL80_.jpg" },
    { id: "cartoon14", title: "Bratz", type: "cartoon", year: 2005, country: "USA", genres: ["Comedy", "Fashion"], poster: "https://m.media-amazon.com/images/M/MV5BNmQ1ODMxYjYtODkxYi00NTQyLTlkZTItYTE4ZDNkZWZkZWYxXkEyXkFqcGc@._V1_.jpg" },
    { id: "cartoon15", title: "The Penguins of Madagascar", type: "cartoon", year: 2008, country: "USA", genres: ["Comedy", "Action"], poster: "https://m.media-amazon.com/images/M/MV5BMTEyMDg4MDU4MjdeQTJeQWpwZ15BbWU4MDQyOTc3MjIx._V1_.jpg" },
    { id: "cartoon16", title: "Jimmy Neutron: Boy Genius", type: "cartoon", year: 2001, country: "USA", genres: ["Comedy", "Sci-Fi"], poster: "https://m.media-amazon.com/images/M/MV5BOTVlOWQ0ZDctNzRjOC00NmIxLWFhODktM2YyM2JlODVmMWUwXkEyXkFqcGc@._V1_.jpg" },
    { id: "cartoon17", title: "The Emperor's New School", type: "cartoon", year: 2006, country: "USA", genres: ["Comedy"], poster: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p186023_b_v8_al.jpg" },
    { id: "cartoon18", title: "Ben 10", type: "cartoon", year: 2005, country: "USA", genres: ["Action", "Sci-Fi"], poster: "https://m.media-amazon.com/images/M/MV5BYWVjODZjNDgtYjk4ZS00OTg5LTg5NDQtZDMxZDQ4ZmM5MGJmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
    { id: "cartoon19", title: "Code Lyoko", type: "cartoon", year: 2003, country: "France", genres: ["Sci-Fi", "Adventure"], poster: "https://m.media-amazon.com/images/M/MV5BOTYyZjFhNmYtMDcwMS00MjcwLTk5MGUtZGYzNTY3ZTAyZDAxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
    { id: "cartoon20", title: "Phineas and Ferb", type: "cartoon", year: 2007, country: "USA", genres: ["Comedy", "Adventure"], poster: "https://m.media-amazon.com/images/M/MV5BMTc1NjcxNzg4MF5BMl5BanBnXkFtZTgwOTMzNzgyMDE@._V1_.jpg" },
    { id: "cartoon21", title: "My Goldfish Is Evil", type: "cartoon", year: 2010, country: "Germany", genres: ["Comedy", "Fantasy"], poster: "https://www.dvdplanetstore.pk/wp-content/uploads/2017/12/wwakZvggCQSVZZnjmAZ0Pq0zfQp.jpg" },
    { id: "cartoon22", title: "School of Vampires", type: "cartoon", year: 2006, country: "Germany", genres: ["Comedy", "Fantasy"], poster: "https://m.media-amazon.com/images/M/MV5BZTZlNmM4MDAtODRjNC00ZDMxLTliNjMtNWNhN2QwZjQ2YTljXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
    { id: "cartoon23", title: "Avatar: The Last Airbender", type: "cartoon", year: 2005, country: "USA", genres: ["Adventure", "Fantasy"], poster: "https://m.media-amazon.com/images/I/71ICRka7FhL.jpg" }
];

export default function Cartoons() {
    return (
        <>
            <h2>Cartoon Recommendations</h2>
            <div className="movie-grid">
                {cartoons.map((cartoon) => (
                    <CartoonCard
                        key={cartoon.id}
                        id={cartoon.id}
                        title={cartoon.title}
                        year={cartoon.year}
                        country={cartoon.country}
                        type={cartoon.type}
                        genres={cartoon.genres}
                        poster={cartoon.poster}
                    />
                ))}
            </div>
        </>
    );
}