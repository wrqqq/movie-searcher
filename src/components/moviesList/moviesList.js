import React from 'react';
import GetMovies from '../../services/movies-service';

const MoviesList = () => {
    const movies = new GetMovies().getSearchingList('Harry');
    console.log(movies);
    return (
        <ul>
            <li>11111</li>
            <li>Movie</li>
            <li>Movie</li>
            <li>Movie</li>
            <li>Movie</li>
        </ul>
    );
};

export default MoviesList;