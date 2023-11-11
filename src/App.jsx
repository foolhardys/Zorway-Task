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
            {/* <Route
              path='/account/*'
              element={
                <ProtectedRoute>
                  <Account>
                    <Route index element={<Home />} />
                    <Route path='timetable' element={<TimeTable />} />
                    <Route path='marksheet' element={<Marksheet />} />
                    <Route path='calendar' element={<Calendar />} />
                    <Route path='profile' element={<Profile />} />
                    <Route path='settings' element={<Settings />} />
                  </Account>
                </ProtectedRoute>
              } /> */}
            <Route path='/account' element={<ProtectedRoute><Account /></ProtectedRoute>}>
              <Route index element={<Home />} />
              <Route path='timetable' element={<TimeTable />} />
              <Route path='marksheet' element={<Marksheet />} />
              <Route path='calendar' element={<Calendar />} />
              <Route path='profile' element={<Profile />} />
              <Route path='settings' element={<Settings />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  )
}

export default App
