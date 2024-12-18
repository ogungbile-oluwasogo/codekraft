
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Layouts from './Layouts/Layouts'
import AboutUs from './pages/AboutUs'
import OurPackages from './pages/OurPackages'
import ContactUs from './pages/ContactUs'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layouts />,
    children: [
      {index: true, element: <Home />},
      {path: '/aboutus', element: <AboutUs />},
      {path: '/packages', element: <OurPackages />},
      {path: '/contact', element: <ContactUs />}
    ]
  }
])


function App() {
 
  return <RouterProvider router={router} />
}

export default App
