import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Landing from './components/Landing/Landing.jsx'


// const router = createBrowserRouter(createRoutesFromElements(
//   <Route path='/' element={<Landing />}>

//   </Route>
// ))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <RouterProvider router = {router} /> */}
    <App />
  </StrictMode>,
)
