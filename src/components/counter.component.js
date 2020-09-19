import React, {useState, useReducer} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const PLUS ="PLUS";
const MINUS = "MINUS";

function reducer(state, action){    
    switch(action.operator){
        case PLUS:
            return state + 1;
        case MINUS:
            return state<=0?0:state-1;
        default:
            return state;
    }
}

export default function Counter (){
    const [count, dispatch] = useReducer(reducer, 0);

    function increment(){
        return dispatch({operator:PLUS});
    }
    function decrement(){
        return dispatch({operator:MINUS})
    }
    return(
    <div className="container">
        <div>
            <h1>{count}</h1>
            <button onClick={increment} className="btn btn-success">Inc</button>
            <button onClick={decrement} className="btn btn-danger">Inc</button>
        </div>
    </div>
    );
}