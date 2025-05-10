import SeriesCard from "../components/cards/SeriesCard";

export const series = [
    { id: 1, title: "Fleabag", year: 2016, country: "UK", rating: 5, poster: "https://m.media-amazon.com/images/M/MV5BMjA4MzU5NzQxNV5BMl5BanBnXkFtZTgwOTg3MDA5NzM@._V1_FMjpg_UX1000_.jpg" },
    { id: 2, title: "The Office", year: 2005, country: "USA", rating: 5, poster: "https://m.media-amazon.com/images/M/MV5BZjQwYzBlYzUtZjhhOS00ZDQ0LWE0NzAtYTk4MjgzZTNkZWEzXkEyXkFqcGc@._V1_.jpg" },
    { id: 3, title: "Shameless", year: 2011, country: "USA", rating: 5, poster: "https://m.media-amazon.com/images/M/MV5BMWUwZjJmYjctYTY3MC00ZTVlLWI1ZGEtNWQzMTFlMTcwMTY2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
    { id: 4, title: "How I Met Your Mother", year: 2005, country: "USA", rating: 5, poster: "https://m.media-amazon.com/images/M/MV5BNjg1MDQ5MjQ2N15BMl5BanBnXkFtZTYwNjI5NjA3._V1_FMjpg_UX1000_.jpg" },
    { id: 5, title: "Desperate Housewives", year: 2004, country: "USA", rating: 5, poster: "https://m.media-amazon.com/images/M/MV5BMDljYmI5OTktNDFmNC00NmIxLWFhODktM2YyM2JlODVmMWUwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
    { id: 6, title: "After Life", year: 2019, country: "UK", rating: 5, poster: "https://m.media-amazon.com/images/M/MV5BNDVkNzU5ZjAtNjE5MC00YjBmLTk0NjAtYmFiOTk3MGIwZDlmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
    { id: 7, title: "House M.D.", year: 2004, country: "USA", rating: 5, poster: "https://images.justwatch.com/poster/305563849/s718/house.jpg" },
    { id: 8, title: "Death Note", year: 2006, country: "Japan", rating: 5, poster: "https://upload.wikimedia.org/wikipedia/en/6/6f/Death_Note_Vol_1.jpg" },
    { id: 9, title: "American Housewife", year: 2016, country: "USA", rating: 3, poster: "https://m.media-amazon.com/images/M/MV5BODg2MzRhOTktYmQ0ZS00Yzc2LTllMGEtNzgzODNkYjY0ZDU5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
    { id: 10, title: "Breaking Bad", year: 2008, country: "USA", rating: 5, poster: "https://m.media-amazon.com/images/M/MV5BMzU5ZGYzNmQtMTdhYy00OGRiLTg0NmQtYjVjNzliZTg1ZGE4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
    { id: 11, title: "Wednesday", year: 2022, country: "USA", rating: 2.5, poster: "https://resizing.flixster.com/LumPRA7tw5a4VtKzSnGnTWpW2Q8=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvNTlmOGIyM2ItMzRhMy00MjdkLThkNDYtZWJkZDI1ODMzNmI3LmpwZw==" },
    { id: 12, title: "Sex Education", year: 2019, country: "UK", rating: 4, poster: "https://m.media-amazon.com/images/M/MV5BOTE0MjQ1NDU3OV5BMl5BanBnXkFtZTgwNTI4MTgwNzM@._V1_FMjpg_UX1000_.jpg" },
    { id: 13, title: "Black Mirror", year: 2011, country: "UK", rating: 5, poster: "https://resizing.flixster.com/yL-MXHM_ttXdnKBofDnTdOQf_WE=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvZmQ5YTcxMDgtZWI5My00MmQzLWI1OGMtNTI0Zjk1NGYyYTBhLmpwZw==" },
    { id: 14, title: "Euphoria", year: 2019, country: "USA", rating: 5, poster: "https://m.media-amazon.com/images/M/MV5BZjVlN2M2N2MtOWViZC00MzIxLTlhZWEtMTIwNDIwMzE3ZWJiXkEyXkFqcGc@._V1_.jpg" },
    { id: 15, title: "The Show of 8", year: 2023, country: "South Korea", rating: 4, poster: "https://pics.filmaffinity.com/the_8_show-257378497-large.jpg" },
    { id: 16, title: "Squid Game", year: 2021, country: "South Korea", rating: 5, poster: "https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQZ3PIVnpTzaEIOigOaJkPY4MvRhRs1Bk-0iSK6r_Y8Xl50wfat39Li1VT1kh9JfJ1od0plXEKcJQ7zDl4gQL_nhwrb_C7tuLIJg87PSeKPWOxCC1D0d6hHrnSqqorbl_tY0tM1ST3o9imJ-59OfLxyAx1Yw.png?r=317" },
    { id: 17, title: "The Marvelous Mrs. Maisel", year: 2017, country: "USA", rating: 5, poster: "https://resizing.flixster.com/P70v-BGook4LtyLmlwdbiH1vGGE=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vUlRUVjI2NjgxMi53ZWJw" },
    { id: 18, title: "Sweetpea", year: 2020, country: "UK", rating: 5, poster: "https://pics.filmaffinity.com/sweetpea-787588817-large.jpg" }
];

export default function Series() {
    return (
        <>
            <h2>Series Recommendations</h2>
            <div className="movie-grid">
                {series.map((s) => (
                    <SeriesCard
                        key={s.id}
                        id={s.id}
                        title={s.title}
                        year={s.year}
                        country={s.country}
                        rating={s.rating}
                        poster={s.poster}
                    />
                ))}
            </div>
        </>
    );
}