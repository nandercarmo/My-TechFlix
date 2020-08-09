import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './index.css';
import Home from './pages/Home';
import RegisterVideo from './pages/Register/Video';
import RegisterCategory from './pages/Register/Category';

const Page404 = () => ( <div>Error 404 Not Found</div> );

ReactDOM.render(

  <BrowserRouter>
    <Switch>
      <Route path='/' component={Home} exact /> 
      <Route path='/cadastro/video' component={RegisterVideo} exact /> 
      <Route path='/cadastro/categoria' component={RegisterCategory} exact /> 
      <Route component={Page404} /> 
    </Switch>
  </BrowserRouter>,

  document.getElementById('root')
);
