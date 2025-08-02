import Navbar from "../components/Navbar"
import Footer from "./Footer"
import styles from "./MainLayouts.module.css"

function MainLayout({children}) {
  return (
    <>
     <header>

       <Navbar />

      </header>
    {children}
    <footer>
      <Footer />
    </footer>
    </>
  )
}

export default MainLayout