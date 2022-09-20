import React from 'react';
import {Route, Switch} from 'react-router-dom';
import DetailPage from './pages/DetailPage';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Navigation from './components/Navigation';
import "antd/dist/antd.css";
import Category from './components/Categories';
import CategoryPage from './pages/CategoryPage';

function App() {
  return <>
  <Navigation />
  <Route exact path="/" component={Category} />
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/category/:id" component={CategoryPage} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/detail" component={DetailPage} />
    </Switch>
  </>;
}

export default App;
