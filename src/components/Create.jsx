import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { recipecontext } from '../context/RecipeContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';

const Create = () => {
const navigate = useNavigate()
const {data, setdata } = useContext(recipecontext)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

const submitHandler = (recipe)=>{
  recipe.id = nanoid()
// console.log(newRecipe)
const copydata = [...data]
copydata.push(recipe)
setdata(copydata)

localStorage.setItem("recipes", JSON.stringify(copydata))
toast.success("Recipe Created")
reset();
navigate('/recipes')
}

  return (
    <div>
       <form onSubmit={handleSubmit(submitHandler)}
      
      className="max-w-2xl mx-auto bg-white mt-10 p-8 rounded-xl shadow-md space-y-6 font-sans"
    >
      <h2 className="text-3xl font-bold text-center text-gray-800">🍳 Submit Your Recipe</h2>

    
        <span className="text-gray-700 font-medium">Title</span>
        <input
          type="text"
          className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-orange-400"
          placeholder="e.g., Spaghetti Carbonara"
          {...register("title", { required: true })}
        />
        {errors.title && <p className="text-red-500 text-sm mt-1">Title is required</p>}
      
        <span className="text-gray-700 font-medium">Chef Name</span>
        <input
          type="text"
          className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-orange-400"
          placeholder="e.g., Jamie Oliver"
          {...register("chef", { required: true })}
        />
        {errors.chef && <p className="text-red-500 text-sm mt-1">Chef name is required</p>}
      

      
        <span className="text-gray-700 font-medium">Image URL</span>
        <input
          type="url"
          className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-orange-400"
          placeholder="https://example.com/recipe.jpg"
          {...register("image", {
            required: "Image URL is required",
           
          })}
        />
        {errors.image && <p className="text-red-500 text-sm mt-1">{errors.imageUrl.message}</p>}
      

        <span className="text-gray-700 font-medium">Description</span>
        <textarea
          className="mt-1 w-full px-4 py-2 border rounded-md resize-none focus:ring-2 focus:ring-orange-400"
          rows={3}
          placeholder="A quick description of your dish..."
          {...register("desc", { required: true })}
        />
        {errors.desc && <p className="text-red-500 text-sm mt-1">Description is required</p>}
      

      
        <span className="text-gray-700 font-medium">Instructions</span>
        <textarea
          className="mt-1 w-full px-4 py-2 border rounded-md resize-none focus:ring-2 focus:ring-orange-400"
          rows={5}
          placeholder="Step-by-step instructions to prepare the dish"
          {...register("inst", { required: true })}
        />
        {errors.inst && <p className="text-red-500 text-sm mt-1">Instructions are required</p>}
      

      
        <span className="text-gray-700 font-medium">Ingredients (comma-separated)</span>
        <textarea
          className="mt-1 w-full px-4 py-2 border rounded-md resize-none focus:ring-2 focus:ring-orange-400"
          rows={3}
          placeholder="e.g., eggs, milk, flour"
          {...register("ingr", { required: true })}
        />
        {errors.ingr && <p className="text-red-500 text-sm mt-1">Ingredients are required</p>}
      

      <button
        type="submit"
        className="w-full bg-orange-500 text-white py-2 rounded-md font-semibold text-lg hover:bg-orange-600 transition"
      >
        🍽️ Create Recipe
      </button>
    </form>
    </div>
  )
}

export default Create