import React from "react";
import { useSelector } from "react-redux";

export const MovieList = ()=> {
    // Globals
    const {movieList} = useSelector((state)=> ({...state.movie}));
    

    return (
        <React.Fragment>
            {
                
                    movieList.map((element)=> {
                        return(
                            <h6 key={element.imdbID}>{element.title}</h6>
                        )
                    })
            }
        </React.Fragment>
    )
}