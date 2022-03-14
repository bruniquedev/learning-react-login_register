import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import  './Assets/css/style.css';
import  './Assets/ionicons/css/ionicons.min.css';
import LoginController from './controller/LoginController';
import RegisterController from './controller/RegisterController';
import ForgotpasswordController from './controller/ForgotpasswordController';
import DashboardController from './controller/DashboardController';
import LogoutController from './controller/LogoutController';
import Header from './components/Header';
import Footer from './components/Footer';
function App() {
  return (
   
    <div>
      <Router>
        {/*Add your header and footer component  here at once*/}
      <Header/>
        <Switch>
          <Route path="/login" component={LoginController} />
          <Route path="/signup" component={RegisterController} />
          <Route path="/forgotpassword" component={ForgotpasswordController} />
          <Route path="/dashboard" component={DashboardController} />
          <Route path="/logout" component={LogoutController} />
          <Route path="/forgotpassword" component={ForgotpasswordController} />
          
        </Switch>
        <Footer /> 
                </Router>

</div>
    );

  
}

export default App;
