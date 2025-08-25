import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Landing from './components/Landing/Landing.jsx'
import Login from './components/Login/Login.jsx'
import Practice from './components/Pracice/Practice.jsx'
import Layout from './Layout.jsx'
import Signup from './components/Signup/Signup.jsx'
import Home from './components/Home/Home.jsx'


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index={true} element={<Landing/>}/>
    <Route path='login' element={<Login />} />
    <Route path='home' element={<Home/>}/>
    <Route path='signup' element={<Signup />} />
  </Route>
))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} /> 
  </StrictMode>,
)
