
import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Account from './Pages/Account/Account.jsx'
import App from './Routes/App.jsx'
import './Style/index.css'
import Course from './Pages/Course/Course.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      { path: "/", element: <Account/>},
      {path: "/course", element : <Course/> },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
