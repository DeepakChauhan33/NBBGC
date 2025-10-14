
import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Account from './Pages/Account/Account.jsx'
import App from './Routes/App.jsx'
import './Style/index.css'
import Courses from './Pages/Courses/Courses.jsx'
import Grades from './Pages/Grades/Grades.jsx'
import Assignments from './Pages/Assignment/Assignments.jsx'
import Schedules from './Pages/Schedule/schedules.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      { path: "/", element: <Account/>},
      {path: "/grades", element : <Grades/> },
      {path: "/courses", element : <Courses/> },
      {path: "/schedules", element : <Schedules/>},
      {path: "/assignments", element : <Assignments/> },
      // {path: "/grades", element : <Grades/> },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
