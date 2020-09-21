import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Navbar from './navbar/Navbar';
import AboutPageView from './pages/About/About';
import RecipeHomePageView from './pages/Recipes/Recipes';


function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Switch>
        <Route path="/about" component={AboutPageView} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
