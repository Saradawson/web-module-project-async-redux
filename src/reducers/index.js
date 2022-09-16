import { JOKE_IS_FETCHING, GET_JOKE_SUCCESS, GET_JOKE_ERROR } from "../actions";

const initialState = {
  joke: {
   type: '',
   setup: '',
   punchline: ''
},
    isFetching: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case JOKE_IS_FETCHING:
            console.log(action);
            return {...state, isFetching: action.payload}
        case GET_JOKE_SUCCESS:
            console.log(action);
            return {...state, isFetching: false, joke: action.payload}
        case GET_JOKE_ERROR:
            return {...state, isFetching: false, error: action.payload}
        default:
            return state
    }
}

export default reducer;