import { useState } from 'react'
import Navbarpizzeria from './components/navbar.jsx'
import Home from './components/home.jsx'
import Footer from './components/footer.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (

    <>

      <Navbarpizzeria></Navbarpizzeria>

      

      <Home></Home>

      <Footer></Footer>




    </>
  )
}

export default App
