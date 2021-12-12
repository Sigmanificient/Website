import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import App from './App';
import Header from './components/Header';
import Footer from './components/Footer';
import Register from './components/register'
import Login from './components/login'
import Logout from './components/logout'
import TandC from "./components/TandC";
import FAQ from "./components/FAQ";
import Privacy from "./components/Privacy";
import Subscription from "./components/Subscription";


const routing = (
    <Router>
        <React.StrictMode>
            <Header/>
            <Switch>
                <Route exact path='/' component={App}/>
                <Route exact path='/register' component={Register}/>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/logout' component={Logout}/>

                <Route exact path='/t&c' component={TandC}/>
                <Route exact path='/faq' component={FAQ}/>
                <Route exact path='/privacy' component={Privacy}/>
                <Route exact path='/subscription' component={Subscription}/>
            </Switch>
            <Footer/>
        </React.StrictMode>
    </Router>
);


ReactDOM.render(routing,
    document.getElementById('root')
);
