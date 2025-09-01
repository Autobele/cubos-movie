import React from 'react'
import './MovieGrid.css'
import { CardMovie } from './CardMovie'
import { MovieCard } from '@/config/types/movie-card'
import { useGenres } from '@/hooks/useGenres'
import Link from 'next/link'


export const MoviesGrid = ({ movies }: { movies: MovieCard[] }) => {
    const { mapGenres } = useGenres()
    return (
        <div className="movie-grid-wrapper">
            {movies?.length > 0 && movies.map((movie, index) => (
                <div className='flex items-center justify-center' key={index}>
                    <Link href={`/movies/${movie.id}`}>
                        <CardMovie
                            imageSrc={movie.poster_path === null ? "/assets/not-available.png" : `${process.env.NEXT_PUBLIC_TMDB_IMAGE}/original/${movie.poster_path}`}
                            key={index}
                            name={movie.title}
                            categories={mapGenres(movie.genre_ids.slice(0, 2)).join(', ')}
                            vote_average={movie.vote_average}
                        />
                    </Link>
                </div>
            ))}
        </div >
    )
}

