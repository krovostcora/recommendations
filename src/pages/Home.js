import { useEffect, useRef } from 'react'
import { books } from './Books'
import { movies } from './Movies'
import { series } from './Series'
import { cartoons } from './Cartoons'

import BookCard from '../components/cards/BookCard'
import MovieCard from '../components/cards/MovieCard'
import SeriesCard from '../components/cards/SeriesCard'
import CartoonCard from '../components/cards/CartoonCard'

function getRandomItems(arr, count) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random())
    return shuffled.slice(0, count)
}

export default function Home() {
    const scrollRef = useRef(null)

    const allItems = [
        ...getRandomItems(books, 3).map(item => ({ ...item, type: 'book' })),
        ...getRandomItems(movies, 4).map(item => ({ ...item, type: 'movie' })),
        ...getRandomItems(series, 4).map(item => ({ ...item, type: 'series' })),
        ...getRandomItems(cartoons, 5).map(item => ({ ...item, type: 'cartoon' })),
    ].sort(() => 0.5 - Math.random())

    const scrollBy = (offset) => {
        if (scrollRef.current) {
            const container = scrollRef.current
            const scrollWidth = container.scrollWidth
            const visibleWidth = container.clientWidth
            const maxScrollLeft = scrollWidth - visibleWidth

            let nextScroll = container.scrollLeft + offset


            if (nextScroll > maxScrollLeft) {
                nextScroll = 0
            }


            if (nextScroll < 0) {
                nextScroll = maxScrollLeft
            }

            container.scrollTo({
                left: nextScroll,
                behavior: 'smooth',
            })
        }
    }

    useEffect(() => {
        const handleKeydown = (e) => {
            if (e.key === 'ArrowRight') {
                scrollBy(200)
            }
            if (e.key === 'ArrowLeft') {
                scrollBy(-200)
            }
        }

        window.addEventListener('keydown', handleKeydown)
        return () => {
            window.removeEventListener('keydown', handleKeydown)
        }
    }, [])

    return (
        <div className="home-page">
            <section className="intro">
                <h2>Welcome to myRecommendations</h2>
                <p>
                    This page was created to share books, movies, series and cartoons that I’ve enjoyed.
                    If you don’t know what to watch or read next — maybe my recommendations will inspire you!
                </p>
            </section>

            <section className="scroll-section">
                <h3>Random Picks</h3>
                <div className="scroll-controls">
                    <button onClick={() => scrollBy(-100)}>←</button>
                    <div className="scroll-container" ref={scrollRef}>
                        {allItems.map((item, idx) => {
                            switch (item.type) {
                                case 'book':
                                    return <BookCard key={idx} {...item} />
                                case 'movie':
                                    return <MovieCard key={idx} {...item} />
                                case 'series':
                                    return <SeriesCard key={idx} {...item} />
                                case 'cartoon':
                                    return <CartoonCard key={idx} {...item} />
                                default:
                                    return null
                            }
                        })}
                    </div>
                    <button onClick={() => scrollBy(300)}>→</button>
                </div>
            </section>
        </div>
    )
}
