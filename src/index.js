import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import App from './App'
import { Signup } from './components/Signup/Signup'
import { SigninMemo as Signin } from './components/Signin/Signin'
import { Products } from './components/Products/Products'
import { Cart } from './components/Cart/Cart'
import { Contacts } from './components/Contacts/Contacts'
import { Main } from './components/Main/Main'
import { store } from './redux/store'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'signup',
        element: <Signup />,
      },
      {
        path: 'signin',
        element: <Signin />,
      },
      { index: true, element: <Main /> },
      {
        path: 'products',
        element: <Products />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'contacts',
        element: <Contacts />,
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
  <QueryClientProvider
    client={queryClient}
    clearClient={clearClient}
  >
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </QueryClientProvider>,
)
