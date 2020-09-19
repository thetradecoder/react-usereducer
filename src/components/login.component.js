import React, {useState, useReducer} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function loginReducer(state, action){
    switch(action.type){
        case 'field':{
            return {
                ...state, 
                [action.field]:action.value
            }
        };
        case 'login':{
            return {...state,
                isLoading:true,
                error:""
            }
        };
        case 'logout':{
            return {
                ...state, 
                isLoading:false,
                error:false,
                isLoggedIn:false
            }
        }
        case 'success':{
            return {...state,
                isLoading:false,
                error:"",
                isLoggedIn:true            
            }
        };
        case 'error':{
            return {...state,
                error: "username or password is wrong!",
                isLoading:false,
                isLoggedIn:false,
                username:"",
                password:""     
            }
        };
        default:
            break;
    }
    return state;

}

const initialState = {
    username:"",
    password:"",
    isLoading:false,
    isLoggedIn:false,
    error:""
}


export default function Login(){

    const [state, dispatch] = useReducer(loginReducer, initialState);
    const {username, password, isLoading, isLoggedIn, error}=state;

    function onSubmitLoginInfo(e){
        e.preventDefault();
        dispatch({type:'login'});
    }
    function onChangeUsername(e){
        dispatch({type:'field', field:'username', value:e.target.value})
    }
    function onChangePassword(e){
        dispatch({type:'field', field:'password', value:e.target.value})
    }

    return (
        <div>
            <div className="login-container">
                {isLoggedIn?(<div><h2>Welcome {username}!</h2>
                <button onClick={()=>dispatch({type:'logout'})}>Logout</button></div>): (
                <form onSubmit={onSubmitLoginInfo}>
                    <h5>Login</h5>
                    <input type="text" value={username} onChange={onChangeUsername} className="form-control"/>                    
                      <input type="password" value={password} onChange={onChangePassword} className="form-control"/> 
                    <button type="submit" className="form-control btn btn-primary">Login</button>
                </form>
                )}
            </div>
        </div>
    );
}