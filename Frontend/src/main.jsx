import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Login from './components/Login/Login.jsx'
import Signup from './components/Signup/Signup.jsx'
import Home from './components/Home/Home.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import LayoutProvider from './Context/LayoutContext.jsx'
import GetEntry from './components/Dashboard/GetEntry.jsx'
import CreateEntry from './components/Dashboard/CreateEntry.jsx'
import UpdateEntry from './components/Dashboard/UpdateEntry.jsx'
import DeleteEntry from './components/Dashboard/DeleteEntry.jsx'
import DashboardLayout from './components/Dashboard/DashboardLayout.jsx'
import LandingLayout from './components/LandingLayout.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Error from './components/Error/Error.jsx'


const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path='/' element={<LandingLayout />} errorElement={<Error />}>
      <Route index={true} element={<Home />} />
      <Route path='login' element={<Login />} />
      <Route path='about' element={<About />} />
      <Route path='signup' element={<Signup />} />
      <Route path='contact' element={<Contact />} />
    </Route>

    <Route path='/dashboard' element={<DashboardLayout />}>
      <Route index={true} element={<Dashboard />} />
      <Route path='get-entry' element={<GetEntry />} />
      <Route path='create-entry' element={<CreateEntry />} />
      <Route path='update-entry' element={<UpdateEntry />} />
      <Route path='delete-entry' element={<DeleteEntry />} />
    </Route>
  </>

))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LayoutProvider>
      <RouterProvider router={router} />
    </LayoutProvider>
  </StrictMode>,
)
