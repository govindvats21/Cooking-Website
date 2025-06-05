import { Link, useNavigate } from "react-router-dom";

const RecipeCard = (props) => {
  const navigate = useNavigate()
  const {id,image, title, desc, chef } = props.recipe;
  return (
    <div>
    
    <div className=" mt-10 ml-10 block w-[20vw] p-5 rounded overflow-hidden rounded-2xl shadow-2xl">
      <img className="object-cover w-full h-[23vh]" src={image} alt="" />
      <h1 className="mt-2 px-2 font-bold">{title}</h1>
      <small className="px-2 text-red-400">{chef}</small>
      <p className="px-2 pb-3 break-words overflow-auto max-h-[100px]">{desc}
        {desc.slice(0, 1)}... <small className="text-blue-400">more</small>
      </p>
      <button onClick={()=>navigate(`/recipe/details/${id}`)} className="text-white bg-orange-500 px-4 py-2 cursor-pointer hover:bg-orange-600">View Recipe</button>
    
    </div>
    </div>
  );
};

export default RecipeCard;
