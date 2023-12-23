import React from 'react';
import { Link ,Outlet, useLocation} from 'react-router-dom';

const NavBar = () => {

    const location = useLocation();
    return (
      <div className="">
        <div>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">
                    <Link className={`navbar-brand ${location.pathname==='/Calculator'? 'active':''} `} to="./Calculator.jsx">Math Magician</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname==='/Joke"'? 'active':''} `} aria-current="page" to="./Joke.js">Jokes</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname==='/Calculator'? 'active':''} `} to="./Calculator.jsx">Calculator</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        <Outlet />
        </div>
    );
}

export default NavBar;
