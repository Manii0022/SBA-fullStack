import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Landing from './components/Home/Home.jsx'
import Login from './components/Login/Login.jsx'
import Layout from './Layout.jsx'
import Signup from './components/Signup/Signup.jsx'
import Home from './components/Home/Home.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import LayoutProvider from './Context/LayoutContext.jsx'
import Header from './components/Header/Header.jsx'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'
import Connect from './components/Connect/Connect.jsx'
import GetAll from './components/Dashboard/GetAll.jsx'
import Default from './components/Dashboard/Default.jsx'
import Create from './components/Dashboard/Create.jsx'
import Update from './components/Dashboard/Update.jsx'
import Delete from './components/Dashboard/Delete.jsx'


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index={true} element={<Home />} />
    <Route path='login' element={<Login />} />
    <Route path='home' element={<Home />} />
    <Route path='signup' element={<Signup />} />
    <Route path='dashboard' element={<Dashboard />}>
      <Route index={true} element={<Default/>} />
      <Route path='getall' element={<GetAll/>} />
      <Route path='create' element={<Create/>} />
      <Route path='update' element={<Update/>} />
      <Route path='delete' element={<Delete/>} />
    </Route>

    <Route path='contact' element={<Contact />} />
    <Route path='connect' element={<Connect />} />
  </Route>
))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LayoutProvider>
      <RouterProvider router={router} />
    </LayoutProvider>
  </StrictMode>,
)
