import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import { publicRoutes } from "./routes";
import { RouteType } from "./interface";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {publicRoutes.map((route: RouteType, index: number) => {
          const Page: React.FC = route.component;
          return <Route key={index} path={route.path} element={<Page />} />;
        })}
      </Routes>
    </Router>
  );
};

export default App;
