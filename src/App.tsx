import React, { FC, Suspense } from 'react';
import Router from './router';
import { observer } from 'mobx-react';
import loading from "./components/common/loading/circleLoading"
import './App.scss';

const App: FC = () => {

  return (
    <Suspense fallback={loading}>
      <div className="App">
        <Router />
      </div>
    </Suspense> 
  );
}

export default observer(App);