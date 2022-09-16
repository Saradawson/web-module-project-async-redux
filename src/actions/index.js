import axios from 'axios';
export const GET_JOKE_SUCCESS = "GET_JOKE_SUCCESS";
export const GET_JOKE_ERROR ="GET_JOKE_ERROR";
export const JOKE_IS_FETCHING = "JOKE_IS_FETCHING";

export const getJoke = () => dispatch => {
    dispatch(jokeIsFetching(true));
    axios.get('https://official-joke-api.appspot.com/random_joke')
    .then(res => {
       const joke = res.data;
       dispatch(getJokeSuccess(joke)); 
    })
    .catch(err => {
        console.log(err);
    })
}

const jokeIsFetching = (isFetching) => {
    return {type: JOKE_IS_FETCHING, payload: isFetching}
}

const getJokeSuccess = (joke) => {
    return {type: GET_JOKE_SUCCESS, payload: joke}
}

const getJokeError = (message) => {
    return {type: GET_JOKE_ERROR, payload: message}
}