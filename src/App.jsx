import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import './App.css'
import ROUTES from './ROUTES/routes'
import Layouts from './components/Layouts/Layouts'
import { About, Contacts, Home, News, Products, Service } from './pages'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={ROUTES.HOME} element={<Layouts />}>
        <Route index element={<Home />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.PRODUCTS} element={<Products />} />
        <Route path={ROUTES.SERVICE} element={<Service />} />
        <Route path={ROUTES.NEWS} element={<News />} />
        <Route path={ROUTES.CONTACT_US} element={<Contacts />} />
        {/* <Route path={ROUTES.ERROR_PAGE} element={<ErrorPage />} /> */}
      </Route>
    )
  )
  return <RouterProvider router={router} />
}

export default App
