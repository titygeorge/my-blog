import React from 'react';
import './App.css';
// import '../public/css/style.css';
import Home from './components/Home/Home';
import Category from './components/Category/Category';
import CategoryDetails from './components/CategoryDetails/CategoryDetails';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
  	<Router>
      <div>
      	<Route path="/" exact component={Home} />
         <Route path="/category-details" exact component={CategoryDetails} />
      </div>
    </Router>
  );
}

export default App;
