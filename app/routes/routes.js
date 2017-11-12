import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Projects from '../components/children/Projects';
import About from '../components/children/About';
import Resume from '../components/children/Resume';

const Routes = () => (
    <div>
      <Switch>
        <Route exact path="/" component={Projects}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/about" component={About}/>
        <Route path="/resume" component={Resume}/>
      </Switch>
    </div>
  )
  
  export default Routes