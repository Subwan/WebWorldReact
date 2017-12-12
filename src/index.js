import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';

import Header from './header/header.js'

class App extends React.Component {
    render() {
        return(
           <Header />
        );
    }
}

ReactDOM.render((
  <BrowserRouter>  
    <App/>
  </BrowserRouter>
),
  document.getElementById('root')
);