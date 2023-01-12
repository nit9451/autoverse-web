import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({ component: Component, isAuth, path, ...props }) => {
    if(!isAuth) {
        return <Redirect {...props} to="/login" />
    }else{
        return <Route exect path={path} element={<Component />} />
    }

};

export default PrivateRoute;