const redux = require('redux');
const reduxLogger = require('redux-logger');

const {createStore, combineReducers, applyMiddleware} = redux;
const logger = reduxLogger.createLogger();


const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

//action
function buyCake(){ //action creator
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
 }

function buyIceCreams(){
    return {
        type : BUY_ICECREAM
    }
}

 //reducer
 const initialState = {
    numOfCake : 10,
    numOfIceCreams : 20
 }
 function reducer(state = initialState, action){
    switch(action.type){
        case BUY_CAKE: return {
            ...state,  
            numOfCake : state.numOfCake -1 
        }
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams : state.numOfIceCreams -1
        }
        default: return state
    }
 }


 //spliiting up the reducer
 const initCakeState = {
    numOfCake : 10
 }
 const initIceCreamState = {
    numOfIceCreams : 20
 }

 function cakeReducer(state=initCakeState, action){
    switch(action.type){
        case BUY_CAKE: return {
            ...state,  
            numOfCake : state.numOfCake -1 
        } 
        default: return state
    }
 }

 function iceCreamReducer(state=initIceCreamState, action){
    switch(action.type){
        case BUY_ICECREAM: return {
            ...state,  
            numOfIceCreams : state.numOfIceCreams -1 
        } 
        default: return state
    }
 }

 let rootReducer = combineReducers({
    cake : cakeReducer,
    iceCream : iceCreamReducer
 })

 const store = createStore(rootReducer, applyMiddleware(logger));

 console.log('initial state', store.getState());
 const unsubscribe = store.subscribe(() => {});
 store.dispatch(buyCake())
 store.dispatch(buyCake())
 store.dispatch(buyCake())
 store.dispatch(buyIceCreams())
 store.dispatch(buyIceCreams())

 unsubscribe();