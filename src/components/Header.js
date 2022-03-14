import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <header>

<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-to">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
       


        <li class="nav-item">
          <Link class="nav-link" to="/login"><i class='ion ion-log-in'></i> Login</Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link" to="/signup"><i class='ion ion-plus-round'></i> Register</Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link" to="/forgotpassword"><i class='ion ion-unlocked'></i> forgot password</Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link" to="/dashboard"><i class='ion ion-android-navigate'></i> Dashboard</Link>
        </li>
        
        <li class="nav-item">
          <Link class="nav-link" to="/logout"><i class='ion ion-log-out'></i> Log out</Link>
        </li>

        
      </ul>
    
    </div>
  </div>
</nav>


           
        </header>
    );
};

export default Header;