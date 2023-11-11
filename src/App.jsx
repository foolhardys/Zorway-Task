import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Account from './components/Account'
import ProtectedRoute from './components/ProtectedRoute'
// import UserContext from './context/UserContext'
import { AuthContextProvider } from './context/AuthContext'
import Home from './SubRoutes/Home'
import TimeTable from './SubRoutes/TimeTable'
import Marksheet from './SubRoutes/Marksheet'
import Calendar from './SubRoutes/Calendar'
import Profile from './SubRoutes/Profile'
import Settings from './SubRoutes/Settings'

function App() {

  return (
    <div>
      <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route
            path='/account'
            element={
              <ProtectedRoute>
                <Account>
                  <Route path='/account' element={<Home />} />
                  <Route path='/account/timetable' element={<TimeTable />} />
                  <Route path='/account/marksheet' element={<Marksheet />} />
                  <Route path='/account/calendar' element={<Calendar />} />
                  <Route path='/account/profile' element={<Profile />} />
                  <Route path='/account/settings' element={<Settings />} />
                </Account>
              </ProtectedRoute>
            } />

        </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  )
}

export default App
