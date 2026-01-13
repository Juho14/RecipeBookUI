import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import IngredientsForm from './components/ingredients/form/IngredientsForm'
import RecipeForm from './components/recipies/form/RecipeForm'
import Recipes from './components/recipies'
import FrontPage from './components/frontPage'
import ShoppingList from './components/shoppingList'

export const App = () => {
  return (
    <Router>
      <Routes>
        {/* Wrap all pages inside Layout */}
        <Route element={<Layout />}>
          <Route path='/' element={<FrontPage />} />
          <Route path='/recipes/:category?/:recipe?' element={<Recipes />} />
          <Route path='/add-ingredient' element={<IngredientsForm />} />
          <Route path='/add-recipe' element={<RecipeForm />} />
          <Route path='/shopping-list' element={<ShoppingList />} />
          {/* Other pages */}
          {/* <Route path="/hoisin-chicken" element={<HoisinChicken />} /> */}
        </Route>
      </Routes>
    </Router>
  )
}
