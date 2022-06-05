import star from "../images/star.png";

export default function Card(props) {
    // For Badge
    let badgeText;
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE";
    }

    return (
        <article className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img
                src={props.item.coverImg}
                alt="article img"
                className="card-img"
            />

            <div className="card-review">
                <img src={star} alt="star" />
                <p className="card-rating">{props.item.stats.rating}</p>
                <p className="card-rating-count">
                    ({props.item.stats.reviewCount})
                </p>
                <p className="card-country">•{props.item.location}</p>
            </div>
            <p className="card-text">{props.item.title}</p>
            <p className="card-cost">
                <span>From ${props.item.price}</span> / person
            </p>
        </article>
    );
}
