import React, { Component } from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
import Login from '../components/login/login';
import Home from '../components/home/home';
import Transfer from '../components/transfer/transfer';
import NotFound from '../components/notFound';
import auth from '../services/auth';
import { Protected } from './protected';

class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: auth.isAuthenticated(),
        }
    }

    componentDidMount() {
        this.props.history.push("/home");
    }

    login = (user) => {
        auth.login();
        auth.setUserData({username: user});
        this.setState({
            auth: auth.isAuthenticated()
        });
        this.props.history.push("/home");
    }

    logout = () => {
        auth.logout();
        this.setState({
            auth: auth.isAuthenticated()
        });
        this.props.history.push("/");
    }

    render() {
        return (<>
            <nav className="nav">
                <ul className="navigation">
                    <li>
                        <a href="/home"> Company </a>
                    </li>
                    <li className={this.state.auth ? 'visible' : 'no-visible'}>
                        <a href="/home"> Home </a>
                    </li>
                    <li className={this.state.auth ? 'visible' : 'no-visible'}>
                        <a href="/transfer"> Transfer </a>
                    </li>
                    <li className={this.state.auth ? 'visible li-right' : 'no-visible'}>
                        <a href="" onClick={() => {
                            this.logout();
                        }}>Log Out</a>
                    </li>
                </ul>
            </nav>

            <Switch>
                <Route exact path="/" component={() => <Login login={this.login} />} />
                <Protected exact path="/home" component={() => <Home user={auth.getUserData()} /> }/>
                <Protected exact path="/transfer" component={Transfer}/>
                <Route component={NotFound} />
            </Switch>
        </>);
    }
}

export default withRouter(Routes);