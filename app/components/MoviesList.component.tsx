import React from 'react';
import MovieComponent from './Movie.component';
type MoviesProps={
    movies: Array<Movie>
}
type Movie={
    id: number,
    original_title: string,
    overview: string,
    poster_path: string,
    release_date: string,
    title: string,
}
function MoviesListComponent({movies}:MoviesProps) {
    return (
        <div className='mt-10 grid text-center gap-2 lg:grid-cols-3 lg:text-left'>
            {movies.map((movie:Movie)=>(
                <MovieComponent movie={movie} key={movie.id}/>
            ))}
        </div>
    );
}

export default MoviesListComponent;