import React from 'react';

import Header from './header/header.js';
import Menu from './menu/menu.js';
import Main from './main/main.js';
import Footer from './footer/footer.js';

import './App.css';

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

export default App;