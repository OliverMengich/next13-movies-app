import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
export const metadata: Metadata = {
    title: 'TV Shows',
    description: 'TV Shows - MoviesApp',
    
}
const gettvshows = async () => {
    const url = 'https://api.themoviedb.org/3/trending/person/day?language=en-US';
    const options = {
            method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTY5NDA5NGM5YzczYzU2NjkwZTYwNWU0YjhlNzAyOSIsInN1YiI6IjY0YTNhZmM3ZTlkYTY5MDEwMTQ3NjBmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XRKEAqhhaRaWpHaF3RXIj9_gh915W0Bfx1kboadrSaU'
        }
    };
    const res = await fetch(url, options)
    const data = await res.json()
    return data;
}
type Person = {
    id: number;
    name: string;
    profile_path: string;
    known_for_department: string;
    known_for: Array<{
        id: number;
        title: string;
        poster_path: string;
        overview: string;
    }>;
};
async function Page() {
    const data = await gettvshows();
    return (
        <div className='mt-10 grid text-center gap-2 lg:grid-cols-3 lg:text-left'>
            {data.results.map((person:Person)=>(
                <div key={person.id} className="ml-4 relative cursor-pointer top-0 flex flex-col justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-md lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                <Image
                    src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`}
                    alt={person.profile_path}
                    className='rounded-md'
                    width={200}
                    height={50}
                    style={{
                        objectFit: 'cover', // cover, contain, none
                        width: '100%',
                        height: 'auto',
                    }}
                />
                <h1 className='font-bold text-2xl'>{person.name}</h1>
            </div>
            ))}
        </div>
    );
}

export default Page;