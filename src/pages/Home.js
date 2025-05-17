import { useEffect, useRef } from 'react';
import books from '../components/json/books.json';
import movies from '../components/json/movies.json';
import series from '../components/json/series.json';
import cartoons from '../components/json/cartoons.json';
import MediaCard from '../components/cards/MediaCard';

function getRandomItems(arr, count) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

export default function Home() {
    const scrollRef = useRef(null);

    const allItems = [
        ...getRandomItems(books, 3).map(item => ({ ...item, type: 'book' })),
        ...getRandomItems(movies, 4).map(item => ({ ...item, type: 'movie' })),
        ...getRandomItems(series, 4).map(item => ({ ...item, type: 'series' })),
        ...getRandomItems(cartoons, 5).map(item => ({ ...item, type: 'cartoon' })),
    ].sort(() => 0.5 - Math.random());

    const scrollBy = (offset) => {
        if (scrollRef.current) {
            const container = scrollRef.current;
            const scrollWidth = container.scrollWidth;
            const visibleWidth = container.clientWidth;
            const maxScrollLeft = scrollWidth - visibleWidth;

            let nextScroll = container.scrollLeft + offset;

            if (nextScroll > maxScrollLeft) {
                nextScroll = 0;
            }

            if (nextScroll < 0) {
                nextScroll = maxScrollLeft;
            }

            container.scrollTo({
                left: nextScroll,
                behavior: 'smooth',
            });
        }
    };

    useEffect(() => {
        const handleKeydown = (e) => {
            if (e.key === 'ArrowRight') {
                scrollBy(200);
            }
            if (e.key === 'ArrowLeft') {
                scrollBy(-200);
            }
        };

        window.addEventListener('keydown', handleKeydown);
        return () => {
            window.removeEventListener('keydown', handleKeydown);
        };
    }, []);

    return (
        <div className="home-page">
            <section className="intro">
                <h2>Welcome to myRecommendations</h2>
                <p>
                    This page was created to share books, movies, series and cartoons that I've enjoyed.
                    If you don't know what to watch or read next — maybe my recommendations will inspire you!
                </p>
            </section>

            <section className="scroll-section">
                <h3>Random Picks</h3>
                <div className="scroll-controls">
                    <button
                        onClick={() => scrollBy(-100)}
                        aria-label="Scroll left"
                    >
                        ←
                    </button>
                    <div className="scroll-container" ref={scrollRef}>
                        {allItems.map((item, idx) => (
                            <MediaCard
                                key={`${item.type}-${idx}`}
                                {...item}
                                type={item.type}
                            />
                        ))}
                    </div>
                    <button
                        onClick={() => scrollBy(300)}
                        aria-label="Scroll right"
                    >
                        →
                    </button>
                </div>
            </section>
        </div>
    );
}