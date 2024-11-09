
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const Layouts = () => {

  return (
    <div>
      <header>
        <Header/>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layouts
