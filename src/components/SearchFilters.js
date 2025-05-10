export default function SearchFilters() {
    return (
        <div className="filter-bar">
            <input type="text" placeholder="Search by title..." />
            <select>
                <option>Genre</option>
                <option>Romance</option>
                <option>Thriller</option>
                <option>Fantasy</option>
            </select>
            <select>
                <option>Mood</option>
                <option>Funny</option>
                <option>Sad</option>
                <option>Inspiring</option>
            </select>
            <select>
                <option>Language</option>
                <option>English</option>
                <option>Ukrainian</option>
                <option>Spanish</option>
            </select>
        </div>
    )
}
