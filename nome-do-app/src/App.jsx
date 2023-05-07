
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './Components/Home'
import { RotasParaPaginasDeNoticia } from './Components/RotasParaPaginasDeNoticia'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />}>  
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
