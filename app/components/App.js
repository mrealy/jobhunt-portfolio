import React from 'react';
import { Link } from 'react-router-dom';
import Projects from './children/Projects';
import Routes from '../routes/routes';

const App = () => (
    <div>
        <nav className="navbar navbar-default">
            <div className="container-fluid">

                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="/">Michael Realy</a>
                </div>
        
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                        <li><Link to="/projects"> Projects </Link></li>
                        <li><Link to="/about"> About </Link></li>
                        <li><Link to="/resume"> Resume </Link></li>
                    </ul>
                </div>
            </div>
        </nav>
        <Routes />
    </div>
)

export default App