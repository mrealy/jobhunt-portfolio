import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <div>
        <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand nav-links" href="/">Michael's Portfolio</a>
                </div>
                <div className="navbar-collapse collapse" aria-expanded="false">
                    <ul className="nav navbar-nav">
                        <li className="dropdown">
                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false">Menu<span class="caret"></span></a>
                            <ul className="dropdown-menu" id="drop-menu">
                                <li><Link to="/projects"> Projects </Link></li>
                                <li><Link to="/about"> About </Link></li>
                                <li><Link to="/resume"> Resume </Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
)

export default Header