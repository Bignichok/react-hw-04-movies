import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import routes, { pagesRoutes } from "./routes";
import Spinner from "./components/Spinner/Spinner";

function App() {
  const switchItems = pagesRoutes.map((route) => {
    return <Route key={route.path} {...route} />;
  });

  return (
    <div className="App">
      <Header />
      <main className="main">
        <Suspense fallback={<Spinner />}>
          <Switch>
            {switchItems}
            <Redirect to={routes.home} />
          </Switch>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
