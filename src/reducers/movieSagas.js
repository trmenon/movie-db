import {takeLatest, put, fork, call} from "redux-saga/effects";
import { getMovies, setMovies } from "./feature/movieSlice";
import { fetchMovies } from "./api";

function* onLoadMoviesAsync({payload}) {
    try{
        const movieName = payload;
        const response = yield call(fetchMovies, movieName);
        if(response.status === 200) {
            yield put(setMovies({...response.data}));
        }
    }catch(err) {
        console.log(err);
    }
}

function* onLoadMovies() {
    yield takeLatest(getMovies.type, onLoadMoviesAsync)
}

export const movieSagas = [fork(onLoadMovies)];