import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Recipes from '../pages/Recipes'
import Create from '../components/Create'
import RecipeCard from '../components/RecipeCard'
import SingleRecipe from '../components/SingleRecipe'
import UpdatingForm from '../components/UpdatingForm'
import Read from '../components/Read'
const Mainroutes = () => {
  return (
    <div>

<Routes>
    <Route path='/' element = {<Home />} />
    <Route path='/recipes' element = {<Recipes />} />
     <Route path='/create-recipe' element = {<Create />} />
    <Route path='/recipeCard' element = {<RecipeCard />} />
    <Route path='/recipe'>
  <Route path='details/:id' element={<SingleRecipe />}>
    <Route path='update' element={<UpdatingForm />} />
  </Route>

</Route>
    <Route path='/read' element={<Read />} />

  
    <Route path='/about' element = {<About />} />



</Routes>

    </div>
  )
}

export default Mainroutes