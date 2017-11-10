var React = require("react");
var router = require("react-router");

var Route = router.Route;
var Router = router.Router;

var IndexRoute = router.IndexRoute;
var browserHistory = router.browserHistory;

//components
var Main = require("../components/Main");
var About = require("../components/children/About");
var Expand = require("../components/children/Expand");
var Projects = require("../components/children/Projects");
var Resume = require("../components/children/Resume");

module.exports = (
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            {/* put children components here */}
            <Route path="About" component={About} />
            <Route path="Projects" component={Projects} />
            <Route path="Resume" component={Resume} />
            {/* <Route path="Expand" component={Expand} /> */}

            {/* Index route here */}
            <IndexRoute component={Projects} />
        </Route>
    </Router>
);