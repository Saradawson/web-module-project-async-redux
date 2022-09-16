import React from 'react';
import { connect } from 'react-redux';
import { getJoke } from '../actions';

const Joke = (props) => {
    return (
        <div>
            <h2>Your joke type is {props.joke.type}</h2>
            <span>{props.joke.setup}</span>
            <span>{props.joke.punchline}</span>
            <div className='button'>
                <button onClick={() => props.getJoke()}>Get new joke</button>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        joke: state.joke
    }
}


export default connect(mapStateToProps, {getJoke})(Joke);

