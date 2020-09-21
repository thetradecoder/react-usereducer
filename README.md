# React Hooks - useReducer

## counter app code
```
import React, {useReducer} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

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
    </div>
    );
}
```

## Login code
```
import React, { useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import  userAccess from './users.component';

function loginReducer(state, action) {
  switch (action.type) {
    case 'field': {return {
        ...state, [action.fieldName]: action.value,
      };
    }
    case 'login': {return {
        ...state, isLoading: true, isLoggedIn:false, error:""
      };
    }
    case 'success': {return {
        ...state, isLoading: false, isLoggedIn:true, error:""
      }; 
    }
    case 'error': { return {
        ...state, isLoggedIn: false, isLoading: false, error: 'Invalid username or password!',
        username: "", password: ""
      };
    }
    case 'logout': { return {
        ...state, username:"", password:"", isLoading:false, isLoggedIn: false, error:""
      };
    }
    default: 
      return state;
  }
}

const initialState = {username: "", password: "", error:"", isLoading: false, isLoggedIn: false }; 

export default function LoginUseReducer() {
  const [state, dispatch] = useReducer(loginReducer, initialState);
  const { username, password, error, isLoading, isLoggedIn } = state;

  function onChangeUsername(e){
      dispatch({type: 'field', fieldName: 'username', value: e.target.value})
  };

  function onChangePassword(e){
      dispatch({type: 'field', fieldName: 'password', value: e.target.value})
  };
  function onClickLogout(e){
      dispatch({type:'logout'})      
  };

  const onSubmitLoginInfo = async (e) => {
    e.preventDefault();

    dispatch({ type: 'login' });

    try {
      await userAccess({ username, password });
      dispatch({ type: 'success' });      
    } catch (error) {
      dispatch({ type: 'error' });
    }
  };

  return (
    <div>
      <div className="container">
        {isLoggedIn ? (
            <div>
                <h4 className="text-center">Welcome {username}!</h4>
                <button onClick={onClickLogout} className="btn btn-warning float-right">Logout</button>
            </div> ) : ( 
            <div className="login-container shadow">
                <form onSubmit={onSubmitLoginInfo}>                    
                    <p className="text-center">Login</p>
                    {error && <p className="text-center text-danger">{error}</p>}
                    <div className="login-form-content">
                        <input type="text" placeholder="username / admin" value={username} onChange={onChangeUsername} className="form-control" required/>
                        <input type="password" placeholder="password / 12345678" value={password} onChange={onChangePassword} className="form-control" required/>
                    
                        <button type="submit" className="btn btn-primary form-control" disabled={isLoading}>
                        {isLoading ? "Logging in..." : "Login"}
                    </button>
                    </div>
                </form>
            </div>
        )}
      </div>
    </div>
  );
}
```
