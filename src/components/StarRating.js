export default function StarRating({ rating }) {
    const fullStars = Math.floor(rating)
    const halfStar = rating % 1 >= 0.5
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0)

    return (
        <div style={{ color: "#FFC107" }}>
            {"★".repeat(fullStars)}
            {halfStar && "½"}
            {"☆".repeat(emptyStars)}
        </div>
    )
}
