import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initialState = {
    posts: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_POST_DATA':
            return {...state, posts: action.payload };

        default:
            return state;
    }
};

export const getPosts = () =>  {
    return async (dispatch) => {
        const res = await
        fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();
        dispatch({
            type: "GET_POST_DATA",
            payload: data
        });
    };
};

const store = createStore(reducer, applyMiddleware(thunk));

export default store;