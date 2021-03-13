import { Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

const Router = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
    	<Route exact path='/' component={Home}></Route>
    	<Route exact path='/About' component={About}></Route>
    	<Route exact path='/Portfolio' component={Portfolio}></Route>
    	<Route exact path='/Contact' component={Contact}></Route>
    </Switch>
  );
}

export default Router;