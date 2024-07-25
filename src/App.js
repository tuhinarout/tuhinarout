import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Layout from './components/Layout';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
      <Layout/>
      ),
    },
    {
      path: "about",
      element: <div>About</div>,
    },
  ]);
  return (
    <div className='bg-black'>

<RouterProvider router={router} />

    </div>
  );
}

export default App;
