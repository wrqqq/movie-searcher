import React,  { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import GetMovies from '../../services/movies-service';

const MoviesList = () => {
    const [list, setList] = useState([]);
    useEffect(() => {
        new GetMovies().getSearchList('Harry').then((res) => setList(oldList => {
            return res;
        }))
    }, [])



    return (
        <ul>
            {list.map((mov) => {
                return <li key={mov.id} ><Link to={`/movies/${mov.id}`}>{mov.original_title}</Link></li> }
            )}
        </ul>
    );
};

export default MoviesList;