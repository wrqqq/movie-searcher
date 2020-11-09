import axios from 'axios';

export default class GetMovies {

    _apiBase = 'https://api.themoviedb.org/3/';
    _apiKey = '26affb981809235e3ed1a8a12c391f6d';

    _setIdUrl = (id) => {
        return `${this._apiBase}movie/${id}?api_key=${this._apiKey}&language=en-US`
    }

    _setSearchQuery = (str) => {
        return `${this._apiBase}search/movie?api_key=${this._apiKey}&language=en-US&query=${str}&page=1&include_adult=true`;
    }

    _promiseUrlToDataProvider = async (url) => {
        const response = await axios.get(url)
        return response.data.results
    }

    getSearchList = async (str) => {
        const list = await this._promiseUrlToDataProvider(this._setSearchQuery(str));
        return list;
    }

    getMovieById = (id) => {
        return this._setIdUrl(id);
    }
}
