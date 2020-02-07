import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Login from '../components/login/login';

export default function Routes() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">
                            Company
                        </Link>
                    </li>
                    <li><Link to="/home">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/transfer">
                            Transfer
                        </Link>
                    </li>
                    <li>
                        <Link to="/logout">
                            Log Out
                        </Link>
                    </li>
                </ul>

                <Switch>
                    <Route exact path="/">
                        <Login />
                    </Route>
                    
                </Switch>
            </div>
        </Router>
    );
}