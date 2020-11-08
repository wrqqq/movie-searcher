export default class GetMovies {

    _setIdUrl = (id) => {
        return `https://api.themoviedb.org/3/movie/${id}?api_key=26affb981809235e3ed1a8a12c391f6d`
    } 

    getMovie = async(id) => {
        const url = this._setIdUrl(id);
        const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`Could not fetch ${url}` +
            `, received ${res.status}`)
        }
        return await res.json();
    }

    getSearchingList = async (str) => {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=26affb981809235e3ed1a8a12c391f6d&language=en-US&query=${str}&page=1&include_adult=true`;
        const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`Could not fetch ${url}` +
            `, received ${res.status}`)
        }
        return await res.json();
    }
}
