import React from 'react';

import { Route, Redirect} from 'react-router-dom';




const PublicRoute = ({ component: Component, redirectTo, isAuth, path, ...props }) => {
    if(isAuth) {
        return <Redirect to={redirectTo} />;
    }
    return <Route path={path} element={<Component />} />
};

export default PublicRoute;