// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Menu from './components/Menu';
import ContactUs from './components/ContactUs';
import Delivery from './components/Delivery';

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/menu" component={Menu} />
                <Route path="/contact" component={ContactUs} />
                <Route path="/delivery" component={Delivery} />
            </Switch>
        </Router>
    );
}

export default App;
