import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Landing from './components/Home/Home.jsx'
import Login from './components/Login/Login.jsx'
import Practice from './components/Pracice/Practice.jsx'
import Layout from './Layout.jsx'
import Signup from './components/Signup/Signup.jsx'
import Home from './components/Home/Home.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import LayoutProvider from './Context/LayoutContext.jsx'
import Header from './components/Header/Header.jsx'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index={true} element={<Home />} />
    <Route path='login' element={<Login />} />
    <Route path='home' element={<Home />} />
    <Route path='signup' element={<Signup />} />
    <Route path='dashboard' element={<Dashboard />}/>
    <Route path='contact' element={<Contact />} />
    <Route path='connect' element={<></>} />
  </Route>
))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LayoutProvider>
      <RouterProvider router={router} />
    </LayoutProvider>

  </StrictMode>,
)
