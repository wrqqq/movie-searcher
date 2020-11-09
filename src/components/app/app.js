import React, {Fragment} from 'react';
import Header from '../header';
import MoviesList from '../moviesList';
import MovieDetails from '../movieDetails';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const App = () => {
    return (
        <Router>
            <Fragment>
                <Header />
                <MoviesList />
                <MovieDetails />
                <Switch>
          <Route path="/movies/:id" children={<MovieDetails />} />
                </Switch>
            </Fragment>
        </Router>
    )
}

export default App;