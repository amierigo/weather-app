import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import history from "../utils/history";
import { ROUTES } from "../constants/menu";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <MainLayout>
          <Routes>
            {ROUTES.map(({ component: Component, exact, id, path }) => (
              <Route
                key={`${id}-route`}
                exact={exact}
                path={path}
                element={<Component />}
              />
            ))}
          </Routes>
        </MainLayout>
      </Router>
    </div>
  );
}

export default App;
