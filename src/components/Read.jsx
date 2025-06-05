import React, { useContext, useEffect } from 'react';
import { recipecontext } from '../context/RecipeContext';
import { useNavigate, useParams } from 'react-router-dom';
// import Footer from '../components/Footer'

const Read = () => {
    const navigate = useNavigate()
    const params = useParams()
      const { data, setdata } = useContext(recipecontext);
    // console.log(data)
  const recipesRead = data.find((recipe)=> recipe.id)
  return (
    <div className=' flex flex-col w-1/2 rounded-2xl shadow-2xl p-10 mt-20 mx-95 '>
        <button onClick={()=>navigate(-1)} className='bg-orange-500 px-4 py-2 rounded-2xl w-[7vw] justify-end mx-140 cursor-pointer hover:bg-orange-600 '>Go Back</button>
        
        <div className="cardImage ">

<h1 className='text-5xl' >{recipesRead.title}</h1>
        <img className='w-full h-[38vh] mt-7 object-cover rounded-2xl' src={recipesRead.image} alt="" />
        </div>
<div className="cardRead flex flex-col ">

<h1 className=' font-semibold text-2xl mt-7'>Chef:</h1>
<p className='text-gray-800 bg-gray-100  mt-3 px-4 py-2 rounded-md'>{recipesRead.chef}</p>
<h1 className=' font-semibold text-2xl mt-7 '>Description:</h1>
<p className='text-gray-800 bg-gray-100 mt-3 px-4 py-2 rounded-md break-words overflow-auto max-h-[200px]'>{recipesRead.desc}</p>
<h1 className=' font-semibold text-2xl mt-7'>Ingredients:</h1>
<p className='text-gray-800 bg-gray-100 mt-3 px-4 py-2 rounded-md break-words overflow-auto max-h-[200px]'>{recipesRead.inst}</p>
<h1 className=' font-semibold text-2xl mt-7'>Instructions:</h1>
<p className='text-gray-800 bg-gray-100 mt-3 px-4 py-2 rounded-md break-words overflow-auto max-h-[200px]'>{recipesRead.ingr}</p>

</div>

    </div>
  )
}

export default Read