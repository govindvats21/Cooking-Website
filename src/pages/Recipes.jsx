
import { useContext } from 'react';
import RecipeCard from '../components/RecipeCard';
import { recipecontext } from '../context/RecipeContext';

const Recipes = () => {
  const {data, setdata } = useContext(recipecontext)

const renderRecipes = data.map((recipe)=>{
  return <RecipeCard key={recipe.id} recipe={recipe}/>
})
  return (
    <div className=' p-10 flex flex-wrap justify-center  gap-20'>{renderRecipes}</div>
  )
}

export default Recipes