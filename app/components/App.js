import React from 'react';
import { Link } from 'react-router-dom';
import Projects from './children/Projects';
import Routes from '../routes/routes';

const App = () => (
    <div id="wallpaper">
        <nav className="navbar navbar-default">
            <div className="container-fluid">

                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="/"><span className="first-brand">Michael J.</span> <span className="last-brand">Realy</span></a>                    
                </div>
        
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <div className="social-icons">
                        <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/michael-realy-97421149/" target="_blank">
                            <span className="fab fa-linkedin"></span>
                        </a>
                        <a className="btn btn-social-icon btn-github" href="https://github.com/mrealy" target="_blank">
                            <span className="fab fa-github"></span>
                        </a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li><Link to="/projects"><span className="far fa-clipboard"></span> PROJECTS </Link></li>
                        <li className="nav-extend"><Link to="/about"><span className="far fa-user"></span> ABOUT </Link></li>
                        <li className="nav-extend"><Link to="/resume"><span className="far fa-file-alt"></span> RESUME </Link></li>
                    </ul>
                </div>                
            </div>
        </nav>
        <Routes />
    </div>
)

export default App