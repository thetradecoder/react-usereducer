import React, {useReducer} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
// import ReactMarkdown from 'react-markdown';
// import counterText from './counter-markdown.component.js'





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
        <div className="counter-div">
            <h1 className="text-center pt-2 pb-3">{count}</h1>
            <div className="d-flex justify-content-center pt-5 btn-group">
                <button onClick={decrement} className="btn btn-danger">Decrease by 1</button>
                <button onClick={increment} className="btn btn-success">Increase by 1</button>                
            </div>
        </div>
        <div>
            {/* <ReactMarkdown source={counterText}/> */}
        </div>
    </div>
    );
}