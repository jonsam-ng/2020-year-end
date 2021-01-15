import React, {lazy} from '../components/lock/node_modules/react';
import {HashRouter, Route, Switch} from 'react-router-dom';
const LockPage = lazy(() => import('../components/lock'));
const Result404 = lazy(() => import('../components/common/404/result404'));

const Router = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={LockPage}/>
            <Route component={Result404} />
        </Switch>
    </HashRouter>
);


export default Router;