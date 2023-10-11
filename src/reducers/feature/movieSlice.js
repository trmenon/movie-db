import {createSlice} from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        movieList: [],
        movie: {}
    },
    reducers: {
        getMovies(name) {            
            return name
        },
        setMovies: (state, action)=> {
            console.log(action.payload);
            if(
                action.payload.Response === 'True' &&
                action.payload.Search &&
                Array.isArray(action.payload.Search)
            ) {
                return {...state, movieList: action.payload.Search}
            }
            
        }
    }
});

export const {getMovies, setMovies} = movieSlice.actions;

export default movieSlice.reducer;