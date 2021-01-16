import React, { FC, Suspense } from "react";
import Router from "./router";
import loading from "./components/common/loading/circleLoading";
import ContextProvider from "./store";
import "./App.scss";

const App: FC = () => {
  return (
    <Suspense fallback={loading}>
      <ContextProvider>
        <div className="App" onContextMenu={(e: any) => e.preventDefault()}>
          <Router />
        </div>
      </ContextProvider>
    </Suspense>
  );
};

export default App;
