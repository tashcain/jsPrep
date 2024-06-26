const { createStore, applyMiddleware } = require("redux");
const thunkMiddleware = require('redux-thunk').default;
const axios = require('axios');

 const initialState = {
    loading : false,
    users:[],
    error: ''
 }

 const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
 const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
 const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

 const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
 }

 const fetchUsersSuccess = (users) => {
    return {
        type : FETCH_USERS_SUCCESS,
        payload : users 
    }
 }
 
const fetchUsersFailure = (error) => {
    return {
        type : FETCH_USERS_FAILURE,
        payload : error 
    }
 }


const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading : true,
                error : ''
            }
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                users : action.payload,
                error : ''
            }
        case FETCH_USERS_FAILURE:
            return {
                ...state,
                users : [],
                error : action.payload
            }
    }
}

const fetchUsers = () => {
    return function(dispatch){
        dispatch(fetchUsersRequest());
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                let users = res.data.map(i => i.id);
                dispatch(fetchUsersSuccess(users));
            }).catch(err => {
                dispatch(fetchUsersFailure(err.message))
            })
    }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
 
const unsubscribe = store.subscribe(() => console.log('updated state', store.getState()))
store.dispatch(fetchUsers());
  
unsubscribe();