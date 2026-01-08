import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Recipes from './components/recipies/Recipies'
import Layout from './layout/Layout'
import FrontPage from './components/frontPage/FrontPage'

export const App = () => {
  return (
    <Router>
      <Routes>
        {/* Wrap all pages inside Layout */}
        <Route element={<Layout />}>
          <Route path='/' element={<FrontPage />} />
          <Route path='/recipes/:category?/:recipe?' element={<Recipes />} />
          {/* Other pages */}
          {/* <Route path="/hoisin-chicken" element={<HoisinChicken />} /> */}
        </Route>
      </Routes>
    </Router>
  )
}
