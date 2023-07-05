import React from 'react';
import Image from 'next/image';
type Movie={
    id: number,
    original_title: string,
    overview: string,
    poster_path: string,
    release_date: string,
    title: string,
}
function MovieComponent({movie}: {movie: Movie}) {
    return (
        <div className="ml-4 relative cursor-pointer top-0 flex flex-col justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-md lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            <Image
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                className='rounded-md'
                // sizes="(min-width: 808px) 50vw, 100vw"
                width={200}
                height={50}
                // // fill
                // sizes='100%'
                style={{
                    objectFit: 'cover', // cover, contain, none
                    width: '100%',
                    height: 'auto',
                    // position: 'relative',
                }}
            />
            <h1 className='font-bold text-2xl'>{movie.title}</h1>
            <p>{movie.overview.slice(0,70)}...</p>
        </div>
    );
}

export default MovieComponent;