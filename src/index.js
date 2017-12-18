import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';

import Header from './header/header.js';
import Menu from './menu/menu.js';
import Main from './main/main.js';
import Footer from './footer/footer.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Menu />
        <Main />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
),
  document.getElementById('root')
);