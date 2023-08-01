import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './pages/Login';
import Signup from './pages/Signup';
import MainDisplay from './pages/MainDisplay';
import Root from './pages/Root';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Login />},
      { path: "/main", element: <MainDisplay />},
      { path: "/signup", element: <Signup />}
    ],
  },
]);

export default function App() {
  return (
  <RouterProvider router={router}/>
  );
}