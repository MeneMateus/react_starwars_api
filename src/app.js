import React from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Home from './Screen/home';
import Detail from './Screen/detail';

const App = () => {
    return (
        <BrowserRouter>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/detail'>Detail</Link>
            </li>
        </ul>
        <Switch>
            <Route path='/detail/:id'>< Detail /></Route>
            <Route path='/'>< Home /></Route>
        </Switch>
        </BrowserRouter>
    );
};

export default App;