import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Search from './pages/Search'
import Saved from './pages/Saved'
import Hero from './components/Hero';

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <Switch>
          <Route exact path="/">
          <Search />
          </Route>
          <Route path="/saved">
          <Saved  />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
