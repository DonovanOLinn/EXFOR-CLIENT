import Home from "./pages/Home"
import ItemDetail from "./components/ItemDetail"
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/:topic/:id' element={<ItemDetail />} />
    </Routes>
  )
}

export default App
