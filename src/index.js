import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import { ContactsPage } from './components/Pages/ContactsPage/ContactsPage'
import { Main } from './components/Main/Main'
import { ProductsPage } from './components/Pages/ProductsPage/ProductsPage'
import { SignupPage } from './components/Pages/SignupPage/SignupPage'
import { SigninPage } from './components/Pages/SigninPage/SigninPage'

const myRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: 'contacts',
        element: <ContactsPage />,
      },
      {
        path: 'products',
        element: <ProductsPage />,
      },
      {
        path: 'signup',
        element: <SignupPage />,
      },
      {
        path: 'signin',
        element: <SigninPage />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={myRouter} />
  </React.StrictMode>,
)
