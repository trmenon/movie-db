import React from "react";
import { useSelector } from "react-redux";
import { MovieList } from "../../containers/movie-list";

export const HomePage = ()=> {
    // Globals
    // const {movieList: {Error: error}} = useSelector((state)=> ({...state.movie}));

    return(
        <React.Fragment>
            <h1>Movies</h1>
            <MovieList/>
        </React.Fragment>
    )
}