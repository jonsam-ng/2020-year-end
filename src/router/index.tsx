import React, {lazy} from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
const LockPage = lazy(() => import('../components/lock'));

const Router = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={LockPage}/>
        </Switch>
    </HashRouter>
);


export default Router;