export default function RecommendationCard({ title, category, comment }) {
    return (
        <div className="recommendation-card">
            <h3>{title} <small>({category})</small></h3>
            <p>{comment}</p>
        </div>
    )
}
