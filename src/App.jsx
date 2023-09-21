
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation'
import Introduction from './pages/introduction'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'


function App() {

  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/Introduction' element={<Introduction />} />
        <Route path='/About' element={<About />} />
        <Route path='/Portfolio' element={<Portfolio />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='*' element={<Navigate to="/Introduction" />} />
      </Routes>
    </>
  )

}

export default App
