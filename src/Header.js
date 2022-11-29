import React from 'react'


const Header = () => {
  return (
    <div>
          {/* Navbar   */}
          
    <nav class="navbar navbar-expand-lg nav_style p-3 bg-light bg-light border border-light shadow p-3 mb-5 bg-white rounded">
        <a class="navbar-brand pl-5 font-weight-bolder text-primary" href="index.php"> COVID-19</a>
        <button class="navbar-toggler navbar-dark bg-dark" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto pr-5 text-capitalize">
                <li class="nav-item">
                    <a class="nav-link font-weight-bolder" href="index.php">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#aboutid">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#sympid">Symptoms</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#previd">Prevention</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#contactid">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
    </div>
  )
}

export default Header