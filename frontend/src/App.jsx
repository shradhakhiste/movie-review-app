import {Routes, Route} from 'react-router-dom'
import SignupPage from './pages/Signup'
import LoginPage from './pages/Login'
import HomePage from './pages/Homepage'

function App() {
  

  return (
   <Routes>
    <Route path="/signup" element={<SignupPage/>}/>
      <Route path="/login" element={<LoginPage />} />
    <Route path="/" element={<HomePage/>}/>
   </Routes>
  )
}

export default App
