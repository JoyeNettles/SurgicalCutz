import React from 'react';
import './App.css';
import LandingPage from "./components/landing-page/landing-page.component";
import PricesPage from "./components/prices/prices.component";
import {Route, Router, Switch} from "react-router-dom";

function App() {
    return (
        <div className="landing-page-container">
            <Switch>
                <Route path='/' component={LandingPage}
                />
            </Switch>
        </div>
    );
}

export default App;
