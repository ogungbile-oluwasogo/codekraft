
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Layouts from './Layouts/Layouts'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layouts />,
    children: [
      {index: true, element: <Home />}
    ]
  }
])


function App() {
 
  return <RouterProvider router={router} />
}

export default App
