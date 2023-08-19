import logo from './logo.svg';
import './App.css';
import { createBrowserRouter,RouterProvider} from'react-router-dom'
import Register from './Pages/Register';

function App() {
  const router=createBrowserRouter ([
    {
      path:'/',
      element:<div> Home page </div>
    },
    {
      path:'/Login',
      element:<div><h1>hello login</h1></div>
    },
    {
      path:'/Register',
      element:<Register/>
    }
  ])

  return (
   <>
   <RouterProvider router ={router}/>
   </>
  );
}

export default App;
