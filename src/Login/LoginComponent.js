import './LoginComponent.css';
import { useState, useReducer, useContext } from 'react';
import AuthContext from '../../AuthContext';

function Login() {
  const ctx = useContext(AuthContext);
  const [formIsValid, setFormIsValid] = useState(false);
  let [emailValid, setEmailIsValid] = useState(false);
  let [emailTouched, setEmailIsTouched] = useState(false);
  let [passwordValid, setPasswordIsValid] = useState(false);
  let [passwordTouched, setPasswordIsTouched] = useState(false);

  const emailReducer = (state ={value:"",isValid:false}, action) => {
    if (action.type === "USER_INPUT") {
      return { value: action.val, isValid: action.val.includes("@") };

    }

    if (action.type === "INPUT_BLUR") {
      return { value: state.value, isValid: state.value.includes("@") };
    }

    return { value: "", isValid: false };
  };

  const passwordReducer = (state1, action1) => {

    if (action1.type === "USER_INPUT1") {
      return { value: action1.val, isValid: action1.val.trim().length > 6 };
    }

    if (action1.type === "INPUT_BLUR1") {
      return { value: state1.value, isValid: state1.value.trim().length > 6 };
    }
  }

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    val: "",
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    val: "",
    isValid: null,
  });

  const usernameHandler = (event) => {

    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
    setFormIsValid(
      event.target.value.includes("@"));
  }

  const passwordHandler = (event) => {

    dispatchPassword({ type: "USER_INPUT1", val: event.target.value });
    setFormIsValid(emailState.isValid && event.target.value.trim().length > 6);
  }
  const submitHandler = (event) => {

    event.preventDefault();
    ctx.onLogin(emailState.value, passwordState.value);

  }

  const validateEmailHandler = () => {
    setEmailIsTouched(true);

    if (emailState && emailState.value && emailState.value.trim() === "") {
      setEmailIsValid(false);
    } else {
      setEmailIsValid(true);
    }

    dispatchEmail({ type: "INPUT_BLUR" });

  };

  const validatePasswordHandler = () => {
    setPasswordIsTouched(true);

    if (passwordState.value.trim() === "") {
      setPasswordIsValid(false);
    } else {
      setPasswordIsValid(true);
    }

    dispatchPassword({ type: "INPUT_BLUR1" });

  };

  const inputIsInvalid = !emailValid && emailTouched;
  const inputIsInvalid1 = !passwordValid && passwordTouched;

  return (
    <body>
      <div class="wrapper">
        <form class="login" onSubmit={submitHandler}>
          <h1 className="loginh">Login </h1>
          <label>Username :</label><br></br>
          <input type="email" placeholder="username" value={emailState.value} onChange={usernameHandler} onBlur={validateEmailHandler}></input><br></br>
          {inputIsInvalid && (
            <p className="error-text"> Username must not be empty.</p>
          )}
          <label>Password :</label><br></br>
          <input type="text" placeholder="password" value={passwordState.value} onChange={passwordHandler} onBlur={validatePasswordHandler}></input><br></br>
          {inputIsInvalid1 && (
            <p className="error-text"> Password must not be empty.</p>
          )}
          <a href=" ">Forgot your password?</a>
          <button className="loginbutton" type="submit" disabled={!formIsValid}>Login</button>

        </form>
      </div>
    </body>
  )
}

export default Login;