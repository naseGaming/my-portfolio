import { Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

const Router = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
    	<Route exact path='/my-portfolio/' component={Home}></Route>
    	<Route exact path='/my-portfolio/About' component={About}></Route>
    	<Route exact path='/my-portfolio/Portfolio' component={Portfolio}></Route>
    	<Route exact path='/my-portfolio/Contact' component={Contact}></Route>
    </Switch>
  );
}

export default Router;