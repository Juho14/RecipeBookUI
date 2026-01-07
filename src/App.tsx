import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FrontPage from './layout/frontpage/FrontPage';


export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        {/* <Route path="/recipes" element={<Recipes />} />
        {/* <Route path="/hoisin-chicken" element={<HoisinChicken />} />
        <Route path="/add-recipe" element={<AddRecipe />} />
        <Route path="/settings" element={<Settings />} /> */}
      </Routes>
    </Router>
  );
};
