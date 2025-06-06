import { Route, Routes } from 'react-router-dom'
import Navbar from './components/NavBar'
import './css/App.css'
import Favourite from './pages/Favourite'
import Home from './pages/home'
import { MovieProvider } from './contexts/moviecontext'

function App() {
  
  return (
    <MovieProvider>
      <Navbar />
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Favourite' element={<Favourite />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
