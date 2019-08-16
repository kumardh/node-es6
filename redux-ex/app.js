// npm install require --save

const redux = require('redux');

const reducer = (state = {age: 10}, action) => {
    let newState = {...state};
    if(action.type === "AGE_UP")
    {
        newState.age++;
    }
    if(action.type === "AGE_DOWN")
    {
        newState.age++;
    }
    return newState;
}
const store = redux.createStore(reducer);

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch({type: "AGE_UP"});
store.dispatch({type: "AGE_UP"});
store.dispatch({type: "AGE_DOWN"});
store.dispatch({type: "AGE_DOWN"});

