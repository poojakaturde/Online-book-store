//import logo from './logo.svg';
import './App.css';
import { useContext } from 'react';
import React from 'react';
import Login from './Components/Login/LoginComponent';
import Dashboard from './Components/DashboardComponent/Dashboard';
import AuthContext from './AuthContext';


function App() {
  
  const ctx = useContext(AuthContext);  

  return (
    <React.Fragment>
      <h1 className="appHeading"> Online Book Store </h1>
      {!ctx.isLoggedIn && <Login ></Login>}
      {ctx.isLoggedIn && <Dashboard></Dashboard>}
    </React.Fragment>
  );
}


export default App;

