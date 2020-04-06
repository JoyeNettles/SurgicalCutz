import React from 'react';
import './App.css';
import LandingPage from "./components/landing-page/landing-page.component";
import {Route, Router, Switch} from "react-router-dom";

function App() {
    return (
        <div className="site-wrapper">
            <Switch>
                <Route path='/' component={LandingPage}
                />
            </Switch>
        </div>
    );
}

export default App;
