import React from 'react'
import { Link } from 'react-router-dom'

// import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='w-screen h-screen '>
      
        <div className="intro flex flex-wrap m-40">

        <div className="left w-1/2">
            <h1 className='mt-5  text-5xl font-semibold'>Cook Like a Pro With Our <span className='text-orange-500'>Easy</span> and <span className='text-orange-500'>Tasty</span> Recipes.</h1>
            <p className='mt-7 text-2xl w-[30vw]'>From quick and easy meals to gourmet delights, we have something for every test and occasion.</p>
            <Link to={`/create-recipe`}>
            <button className='text-white bg-orange-500 px-4 py-2 rounded mt-10 cursor-pointer hover:bg-orange-600 duration-100'>Create Recipe</button>
            </Link>
        </div>

        <div className="right w-1/2 ">
            <img className='rounded-2xl ' src="https://media.istockphoto.com/id/1345445201/photo/kitchen-table-with-vegetables-and-cutting-board-for-preparing-salad.jpg?s=612x612&w=0&k=20&c=v6LjM8PqJTvIOXGvw4R3V6yb5C0YW9ATBkGcoAvHF48=" alt="" />

        </div>
        <div className="center flex flex-row mx-auto ">
<img className='h-[50vh] w-[30vw] mt-10' src="https://imgs.search.brave.com/JbKVoQsY_tsVyuZ49KoeGJauiX9KvOU8WHMMi_himUQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS12ZWN0b3Iv/dmVnZXRhYmxlcy1w/b3QtcmVhbGlzdGlj/LWNvbmNlcHQtd2l0/aC1pbmdyZWRpZW50/cy1jb29raW5nLXN5/bWJvbHMtdmVjdG9y/LWlsbHVzdHJhdGlv/bl8xMjg0LTE2MjQ0/LmpwZz9zZW10PWFp/c19oeWJyaWQmdz03/NDA" alt="" srcset="" />
        </div>
        <img className='h-[13vh] w-[20vw] mt-78 mx-40' src="https://imgs.search.brave.com/sUvEaYsXuhw9hssZUJCtnN7FLZ8pEY3I31H5EoFs4yk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzE4LzI2Lzcy/LzM2MF9GXzYxODI2/NzIyNl9lb1dvZEdy/N0NzT2dlbXFWRnpv/MzF5TUN0QXpsVGpq/by5qcGc" alt="" />
        </div>

    </div>
  )
}

export default Home