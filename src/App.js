import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

// Data
import data from "./data";

export default function App() {
    // <Hero />

    // Cards
    const cards = data.map((item) => {
        return (
            <Card
                key={
                    item.id
                } /* This is done to remove the warning of unique key prop */
                // Option 1
                // image={item.coverImg}
                // rating={item.stats.rating}
                // ratingCount={item.stats.reviewCount}
                // country={item.location}
                // text={item.title}
                // cost={item.price}
                // openSpots={item.openSpots}

                // Option 2
                // {...item}

                // Option 3
                item={item}
            />
        );
    });

    return (
        <div className="container">
            <Navbar />
            <Hero />
            <section className="card-container">{cards}</section>
        </div>
    );
}
