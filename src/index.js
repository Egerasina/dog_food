import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Signup } from './components/Pages/Signup/Signup'
import { SigninMemo as Signin } from './components/Pages/Signin/Signin'
import './index.css'
import App from './App'
import { ContactsPage } from './components/Pages/ContactsPage/ContactsPage'
import { Main } from './components/Main/Main'
import { Products } from './components/Pages/Products/Products'
import { AppContextProvider } from './Contexts/AppSetContextProvider'

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
        element: <Products />,
      },
      {
        path: 'signup',
        element: <Signup />,
      },
      {
        path: 'signin',
        element: <Signin />,
      },
    ],
  },
])
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})
function clearClient() {
  queryClient.invalidateQueries({
    queryKey: ['allProducts'],
  })
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <QueryClientProvider client={queryClient} clearClient={clearClient}>
    <AppContextProvider>
      <RouterProvider router={myRouter} />
    </AppContextProvider>
  </QueryClientProvider>,
)
