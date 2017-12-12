import React from 'react';

import { Switch, Route } from 'react-router-dom';
import { debug } from 'util';

import Home from './home/home.js';
import About from './about/about.js';

const Main= () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/home' component={Home} />
            <Route path='/aboutus' component={About} />
        </Switch>
    </main>
);

export default Main;