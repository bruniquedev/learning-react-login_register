import React,{useEffect,useState} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
//import Axios from 'axios';//this package needs to be installed

export default function LogoutController (){

//this is our controller and will be making api Requests to work as a model
    //so connecting to the database Is a Data model in this controller

    //Remember here we only call one View component to recieve data in state as props 
    //and this is at the end of this function when you scroll down  




//and we can  pass data to the  view it the state as a prop.
return <Redirect  to="/login" />;



}