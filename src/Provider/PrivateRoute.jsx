import React, { use } from 'react';
import { AllContext } from './ContextProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Components/Loading';

const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AllContext);
    const location = useLocation();
    console.log(location)

    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoute;