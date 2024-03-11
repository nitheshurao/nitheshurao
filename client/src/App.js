import './App.css';
import NavBar from './componets/navBar';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Project from './componets/project/project';
import Home from './componets/Home/home';
import ErrorPage from './componets/errorPage';
import Blog from './componets/blog/blog';
const router = createBrowserRouter([
  {
    path: "",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/project',
    element: <Project />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/blog',
    element: <Blog />,
    errorElement: <ErrorPage />,
  }
]);
function App() {
  return (
    <div className="App">
      <NavBar />

      <RouterProvider router={router} />

    </div>
  );
}

export default App;
