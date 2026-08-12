import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import SignupPage from './pages/Signup'
import LoginPage from './pages/Login'
import HomePage from './pages/Homepage'
import MovieDetailsPage from './pages/MovieDetails'
function App() {
  

  return (
   <>
     <Navbar />
   <Routes>
    <Route path="/signup" element={<SignupPage/>}/>
      <Route path="/login" element={<LoginPage />} />
    <Route path="/" element={<HomePage/>}/>
    <Route path="/movies/:id" element={<MovieDetailsPage />} />
   </Routes>
   </>
  )
}

export default App
