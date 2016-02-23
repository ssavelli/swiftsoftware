'use strict';
const ReactDOM = require('react-dom');
const React = require('react');
const Router = require('react-router').Router;
const History = require('react-router').browserHistory;
const Route = require('react-router').Route;
const IndexRoute = require('react-router').IndexRoute;

//import { useRouterHistory } from 'react-router';
//import { createHashHistory } from 'history';
//const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

//require('./css/main.css');
require('./js/bootstrap.min.js');
require('./js/jasny-bootstrap.min.js');
 
const Index = require('./pages/Index.jsx');
const Home = require('./pages/Home.jsx');
const Products = require('./pages/Products.jsx');
const FAQ = require('./pages/FAQ.jsx');
const AboutUs = require('./pages/AboutUs.jsx');
//history={History}
 
ReactDOM.render(
  <Router history={History}>
    <Route path="/" component={Index}> 
      <IndexRoute component={Home}/>
      <Route path="/products" component={Products} /> 
      <Route path="/faq" component={FAQ} /> 
      <Route path="/about-us" component={AboutUs} /> 
    </Route>
  </Router>,
  document.getElementById('root')
); 
