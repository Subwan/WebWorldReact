import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';

import Header from './header/header.js'
import Menu from './menu/menu.js'

class App extends React.Component {
    render() {
        return(
            <div>
              <Header />
              <Menu />
           </div>
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