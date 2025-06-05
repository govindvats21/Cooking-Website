import { nanoid } from "nanoid/non-secure"
import { useEffect } from "react"
import { createContext, useState } from "react"

 export const recipecontext = createContext(null)

const RecipeContext = (props) => {
const [data,setdata] = useState([])
useEffect(()=>{
//  setdata(localStorage.getItem(JSON.parse("recipes")) ||[])
setdata(JSON.parse(localStorage.getItem("recipes")))
},[])

  return (
    <div>
        <recipecontext.Provider value={{ data, setdata}}>
        {props.children}

        </recipecontext.Provider>
    </div>
  )
}

export default RecipeContext

// {
//   id: nanoid(),
//   title: "Classic Margherita Pizza",
//   ingr:
//     "Pizza dough"
//   ,
//   inst: 
//     "Preheat the oven to 475°F (245°C)."
//   ,
//   "image": "https://cdn.dummyjson.com/recipe-images/1.webp",
//   chef: "Mr. Golu",
//   desc: "Roll out the pizza dough and spread tomato sauce evenly",
  
// }