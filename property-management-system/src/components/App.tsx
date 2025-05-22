import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
import Booking from './Booking';
import Cancellation from './Cancellation';
import Refund from './Refund';
import Login from './Login';
import PrivateRoute from './PrivateRoute';

const App: React.FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleLogin = () => setIsAuthenticated(true);

    return (
        <Router>
            <div className="container">
                <h1>Property Management System</h1>
                <Switch>
                    <Route path="/login">
                        {isAuthenticated ? <Redirect to="/" /> : <Login onLogin={handleLogin} />}
                    </Route>
                    <PrivateRoute path="/" exact isAuthenticated={isAuthenticated} component={Home} />
                    <PrivateRoute path="/booking" isAuthenticated={isAuthenticated} component={Booking} />
                    <PrivateRoute path="/cancellation" isAuthenticated={isAuthenticated} component={Cancellation} />
                    <PrivateRoute path="/refund" isAuthenticated={isAuthenticated} component={Refund} />
                    <Route path="*">
                        <Redirect to={isAuthenticated ? "/" : "/login"} />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;