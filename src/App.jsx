import Home from "./pages/Home"
import ItemDetail from "./components/ItemDetail"
import { Routes, Route } from 'react-router-dom'
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {

  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/:topic/:id' element={<ItemDetail />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
