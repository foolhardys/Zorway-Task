import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Account from './components/Account'
import ProtectedRoute from './components/ProtectedRoute'
// import UserContext from './context/UserContext'
import { AuthContextProvider } from './context/AuthContext'

function App() {

  return (
    <div>
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route
            path='/account'
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            } />

        </Routes>
      </AuthContextProvider>
    </div>
  )
}

export default App
