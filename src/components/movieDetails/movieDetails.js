import React from 'react'
import {useParams} from 'react-router-dom';

export default function MovieDetails(props) {
    const {id} = useParams();
    const {titleName} = props;
    return (
        <div>
           {id}
        </div>
    )
}
