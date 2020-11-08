import React,  { useState, useEffect } from 'react';
import GetMovies from '../../services/movies-service';

const MoviesList = () => {
    const [list, setList] = useState([]);
    useEffect(() => {
        new GetMovies().getSearchList('Harry').then((res) => setList(oldList => {
            return res;
        }))
        console.log(list)
    }, [])



    return (
        <ul>
            {list.map((mov) => {
                return <li>{mov.original_title}</li> }
            )}
        </ul>
    );
};

export default MoviesList;