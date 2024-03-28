import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { SignIn } from './Components/SignIn';
import { SignUp } from './Components/SignUp';
import './App.css';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SignIn/>
    },
    {
      path: "/signUp",
      element: <SignUp/>
    },
  ])
  return (
    <>
       <RouterProvider router = {router} />
    </>
  );
}

export default App;
