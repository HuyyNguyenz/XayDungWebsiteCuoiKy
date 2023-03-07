import { lazy, Suspense } from "react";

import { RouteType } from "../interface";
import CourseDetail from "../pages/CourseDetail";
import Courses from "../pages/Courses";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import RoadMap from "../pages/RoadMap";
import RoadMapBackEnd from "../pages/RoadMapBackEnd";
import RoadMapFrontEnd from "../pages/RoadMapFrontEnd";

// const Home: React.FC = lazy(() => import("../pages/Home"));
// const RoadMap: React.FC = lazy(() => import("../pages/RoadMap"));
// const Courses: React.FC = lazy(() => import("../pages/Courses"));

const publicRoutes: Array<RouteType> = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/roadmap",
    component: RoadMap,
  },
  {
    path: "/courses",
    component: Courses,
  },
  {
    path: "/roadmap/front-end-development",
    component: RoadMapFrontEnd,
  },
  {
    path: "/roadmap/back-end-development",
    component: RoadMapBackEnd,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  { path: "/courses/coursesDetail", component: CourseDetail },
];

const privateRoutes: Array<RouteType> = [];

export { publicRoutes, privateRoutes };
