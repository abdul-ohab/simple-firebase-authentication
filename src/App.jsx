import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Main from "./Layout/Main"
import Home from "./components/Home/Home"
import Login from "./components/Login/Login"
import Register from "./components/Register/Register"
import './App.css'


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      }
    ]
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router}> </RouterProvider>
    </div>
  )
}

export default App
