import React from 'react';
import MoviesListComponent from '../components/MoviesList.component';
const getMovies = async () => {
    const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
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
async function page() {
    const data =await getMovies();
    return (
        <div>
            <h1>Movies Page</h1>
            <MoviesListComponent movies={data.results}/>
        </div>
    );
}

export default page;