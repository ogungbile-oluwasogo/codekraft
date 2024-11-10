
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Layouts from './Layouts/Layouts'
import AboutUs from './pages/AboutUs'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layouts />,
    children: [
      {index: true, element: <Home />},
      {path: '/aboutus', element: <AboutUs />}
    ]
  }
])


function App() {
 
  return <RouterProvider router={router} />
}

export default App
