// This file serves as the main JavaScript entry point for the application.
// It initializes the application, sets up event listeners, and integrates the components.

import React from 'react';
import ReactDOM from 'react-dom';
import CampusMap from './components/CampusMap';
import RouteForm from './components/RouteForm';
import './styles/main.css';

const App = () => {
    return (
        <div>
            <h1>Campus Route Optimizer</h1>
            <RouteForm />
            <CampusMap />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));