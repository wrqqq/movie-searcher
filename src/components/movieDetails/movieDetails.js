import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom';
import GetMovies from '../../services/movies-service';
import axios from 'axios';
const {getMovieById} = new GetMovies();

export default function MovieDetails(props) {
    const [movie, setMovie] = useState({ movie: {} });
    const {id} = useParams();
    useEffect(() => {
        const fetchData = async () => {
          const result = await axios(
           getMovieById(id),
          );
          setMovie(result.data);

        };
     
       fetchData();
      }, [id]);
    const {titleName} = props;
    return (
        <div>
           {movie.id}
           {movie.budget}
           <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}/>
        </div>
    )
}
