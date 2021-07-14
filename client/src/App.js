import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Search from './pages/Search'
import Saved from './pages/Saved'

function App() {
  const [searched, setSearched] = useState([]);
  const [saved, setSaved] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


  return (
    <Router>
      <Header />
      <div className="App">
        <Switch>
          <Route exact path="/">
          <Search searched={searched} />
            
          </Route>
          <Route path="/saved">
          <Saved saved={saved} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
