import React, { useContext } from 'react'
import { Outlet, useNavigate, useParams } from 'react-router-dom'
import { recipecontext } from '../context/RecipeContext'
import { toast } from 'react-toastify'

const SingleRecipe = () => {
  const navigate = useNavigate()
  const {data, setdata } = useContext(recipecontext)
  const params = useParams()
  const recipes = data.find((recipe)=> params.id == recipe.id)

  const deleteHandler = ()=>{
   const filterdata =  data.filter((r)=> params.id !== r.id)
   setdata(filterdata)
localStorage.setItem("recipes", JSON.stringify(filterdata))
toast.success("Recipe deleted")
navigate('/recipes')

  }

  return (
    <div className='flex flex-wrap'>
      <div className="left w-1/2 mt-15 pl-20 ">
      <div className="card w-[25vw] h-[80vh] p-5 rounded-2xl overflow-hidden shadow-2xl">
<h1 className='text-3xl mb-5'>{recipes.title}</h1>
<img className='object-cover rounded-2xl h-[50vh]' src= {recipes.image} alt="" />
<p className='pt-5'>{recipes.chef}</p>
<button onClick={()=>navigate('update')} className='text-white bg-green-500 hover:bg-green-600   mt-3 ml-3 px-7 py-2 cursor-pointer'>Edit</button>
<button onClick={deleteHandler} className='text-white bg-red-500 hover:bg-red-600 mt-3 ml-3 px-7 py-2 cursor-pointer'>Delete</button>
<button onClick={()=>navigate('/read')} className='text-white bg-blue-500 hover:bg-blue-600 mt-3 ml-3 px-7 py-2 cursor-pointer'>View</button>

      </div>


      </div>

      <div className="right w-1/2 px-20 pt-20">
<Outlet />
      
{/* <img className='w-[30vw]' src="https://cookrecipe.netlify.app/assets/hero-CimKGz34.png" alt="" /> */}

      </div>
{/* <Footer /> */}
    </div>
  )
}

export default SingleRecipe