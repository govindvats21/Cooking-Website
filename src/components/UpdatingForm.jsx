import React, { useContext, useEffect } from 'react';
import { recipecontext } from '../context/RecipeContext';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdatingForm = () => {
  const { data, setdata } = useContext(recipecontext);
  const params = useParams();
  const navigate = useNavigate();

  const recipes = data.find((recipe) => params.id === recipe.id);

  const {
    register,
    handleSubmit,
    reset,
  } = useForm();

  useEffect(() => {
    if (recipes) {
      reset({
        title: recipes.title,
        image: recipes.image,
        chef: recipes.chef,
        desc: recipes.desc,
        ingr: recipes.ingr,
        inst: recipes.inst,
      });
    }
  }, [recipes, reset]);

  const updateHandler = (updatedRecipe) => {
    const index = data.findIndex((recipe) => params.id === recipe.id);

    const copydata = [...data];
    copydata[index] = { ...copydata[index], ...updatedRecipe };

    setdata(copydata);
localStorage.setItem("recipes", JSON.stringify(copydata))
    toast.success('Recipe Updated');
    // navigate('/'); // redirect after update (optional)
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(updateHandler)}
        className="mx-auto bg-white p-4 rounded-xl space-y-3 font-sans"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          🍳 Update Your Recipe
        </h2>

        <input
          type="text"
          className="mt-1 w-full px-2 py-1 border rounded-md focus:ring-2 focus:ring-orange-400"
          placeholder="e.g., Spaghetti Carbonara"
          {...register('title', { required: true })}
        />

        <input
          type="text"
          className="mt-1 w-full px-2 py-1 border rounded-md focus:ring-2 focus:ring-orange-400"
          placeholder="e.g., Jamie Oliver"
          {...register('chef', { required: true })}
        />

        <input
          type="url"
          className="mt-1 w-full px-2 py-1 border rounded-md focus:ring-2 focus:ring-orange-400"
          placeholder="https://example.com/recipe.jpg"
          {...register('image', {
            required: 'Image URL is required',
          })}
        />

        <textarea
          className="mt-1 w-full px-2 py-1 border rounded-md resize-none focus:ring-2 focus:ring-orange-400"
          rows={2}
          placeholder="A quick description of your dish..."
          {...register('desc', { required: true })}
        />

        <textarea
          className="mt-1 w-full px-2 py-1 border rounded-md resize-none focus:ring-2 focus:ring-orange-400"
          rows={3}
          placeholder="Step-by-step instructions to prepare the dish"
          {...register('inst', { required: true })}
        />

        <textarea
          className="mt-1 w-full px-2 py-1 border rounded-md resize-none focus:ring-2 focus:ring-orange-400"
          rows={2}
          placeholder="e.g., eggs, milk, flour"
          {...register('ingr', { required: true })}
        />

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-md font-semibold text-lg hover:bg-green-600 transition"
        >
          Update Recipe
        </button>
      </form>
    </div>
  );
};

export default UpdatingForm;
