import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Homepage from './pages/Homepage/Homepage'
import Login from './pages/Login/Login'

const App = () => {

  return (
    <div className='app'>
      <header>
        <Navbar />
      </header>
      <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/login' element={<Login />} />
        </Routes>
    </div>
  )
}

export default App
