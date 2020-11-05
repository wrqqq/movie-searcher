import React, {Fragment} from 'react';
import Header from '../header';
import MoviesList from '../moviesList';
import MovieDetails from '../movieDetails';

const App = () => {
    return (
        <Fragment>
            <Header />
            <MoviesList />
            <MovieDetails />
        </Fragment>
    )
}

export default App;