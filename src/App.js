import { Switch, Route, Link, Redirect } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/auth/Login';
import Admin from './pages/admin/Admin';

const PrivateRoute = ({ component: Component, loggedIn, loggedInRole, ...rest }) => {
    loggedIn = localStorage.getItem('Token');
    loggedInRole = localStorage.getItem('role');
    return <Route {...rest} render={(props) => (loggedIn ? <Component {...props} /> : <Redirect to="/login" />)} />;
};

const PublicRoute = ({ component: Component, loggedIn, ...rest }) => {
    loggedIn = localStorage.getItem('Token');
    return <Route {...rest} render={(props) => (!loggedIn ? <Component {...props} /> : <Redirect to="/" />)} />;
};

export const App = (props) => {
    return (
        <div className="App">
            {localStorage.getItem('Token') ? <Layout /> : <Layout />}

            <Switch>
                <PublicRoute exact path="/login" {...props} component={Login} />
                <PublicRoute exact path="/dashboard" {...props} component={Admin} />
                <PrivateRoute exact path="/admin" {...props} component={Admin} />
            </Switch>
        </div>
    );
};

export default App;
