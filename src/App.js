import { BrowserRouter, Switch, Route } from 'react-router-dom';
import RatingCard from './components/RatingCard';
import ThanksCard from './components/ThanksCard';
import './App.css';

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={RatingCard}/>
          <Route path='/thanks' component={ThanksCard}/>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
