import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import { ROUTES } from '../constants/menu';


function App() {

  return (
    <div className="App">
      <Router>
        <MainLayout>
          <Routes>
            {ROUTES.map(({ component: Component, exact, id, path }) => (
              <Route
                key={`${id}-route`}
                exact={exact}
                path={path}
                element={<Component/>}
              />
            ))}
          </Routes>
        </MainLayout>
      </Router>
    </div>
  );
}

export default App;
