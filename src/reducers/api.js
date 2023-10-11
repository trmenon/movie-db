import axios from "axios";

const API_END_POINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

export const fetchMovies = async (movie_name)=> {
    return axios.get(
        `${API_END_POINT}&s=${movie_name}`
    )
}