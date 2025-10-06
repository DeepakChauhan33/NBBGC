
import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Account from './Pages/Account/Account.jsx'
import Examination from './Pages/Examination.jsx'
import App from './Routes/App.jsx'
import './index.css'




const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    Children: [
      { path: "/", element: <Account/>},
      {path: "/examination", element : <Examination/>},
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
