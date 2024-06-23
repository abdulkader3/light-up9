import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loveFORever } from '../Slices/Shanto'
import { GrSearch } from "react-icons/gr";
import { FaLocationDot } from "react-icons/fa6";
import { SlBasket } from "react-icons/sl";
import Aos from 'aos'
import "aos/dist/aos.css"


const Home = () => {
  
 
 useEffect(()=>{
  Aos.init();
 }, [])

  useEffect(()=>{axios.get('https://api.jsonbin.io/v3/b/6675b543acd3cb34a85b12dd')
    .then((api)=>{prity(api.data.record)})
  })
  const dispatch = useDispatch()
  const [shanto , prity]=useState([])
  const navigate = useNavigate()
  const next = (ohYeah) => {
    navigate('/Nextpage')
    
    dispatch(loveFORever(ohYeah))
}
const gogo = (ohYes) => {
  navigate('/Buy')
  
  dispatch(buywithlove(ohYes))
}

  return (
    <>
    <div className=" main w-full h-full gap-[50px]  flex  flex-wrap justify-center items-center justify-evenly  ">
      <div className=" w-full h-[729px] bg-black  ">
        <div className=" w-full h-[60px] text-white text-[15px] flex justify-end gap-[300px] items-center pr-20 ">
          <div className=' flex justify-center gap-20 ' >
            <p className=' hover:scale-125 transition-all hover:text-[#FFDB00] font-bold ' >HOME</p>
            <p className=' hover:scale-125 transition-all hover:text-[#FFDB00] font-bold ' >ABOUT US</p>
            <p className=' hover:scale-125 transition-all hover:text-[#FFDB00] font-bold ' >BLOG</p>
            <p className=' hover:scale-125 transition-all hover:text-[#FFDB00] font-bold ' >GALLERY</p>
            <p className=' hover:scale-125 transition-all hover:text-[#FFDB00] font-bold ' >PRODACTS</p>
          </div>
          <div className=" flex gap-10 ">
            <div className=""><GrSearch /></div>
            <div className=""><FaLocationDot /></div>
            <div className=""><SlBasket /></div>
          </div>
        </div>
        <div className="w-full flex justify-between items-center">
        <div className=" w-[650px] h-[650px] ">
            <img src="../public/photos/bennar.jpg" alt="photos" />
          </div>
          <h2 className=' text-yellow-400 pr-10 font-bold text-[60px] w-[500px] ' > Best online shopping in the country </h2>
        </div>
      </div>
      {
        shanto.map((apibox , chabi)=>(
        <div key={chabi} data-aos="fade-down" className=" w-[400px] h-[720px] bg-white bg-opacity-30 hover:scale-110 transition-all shadow-lg flex flex-col items-center rounded-[15px] ">
          <div className="img w-[150px] h-[220px]  ">
             <img src={apibox.image} alt="photo" />
              </div>
              <div className=" font-black text-[25px] ">
              <h2>{apibox.name}</h2>
              </div>
              <div className="">
                <p> Brand :  {apibox.brand} </p>
                <p> Operating system :  {apibox.operating_system} </p>
                <p> Ram :  {apibox.ram} </p>
                <p> Storage :  {apibox.storage} </p>
                <p> Processor :  {apibox.processor} </p>
                <p> Display size :  {apibox.display_size} </p>
                <p> Display Refresh Rate :  {apibox.refresh_rate} </p>
                <p> Charging speed :  {apibox.charging_speed} </p>
                <p> Connectivity :  {apibox.support} </p>
                <p> Technology :  {apibox.technology} </p>
                <p> Sensor :  {apibox.sensor} </p>
                <p> Color :  {apibox.color} </p>
                <div className=" text-[25px] font-semibold text-yellow-500 "><p> Price :  {apibox.price} </p></div>
              </div>
              <div className=" flex flex-col gap-[10px] m-5  ">
              <button onClick={()=>next(apibox)} className='bg-black rounded-[5px] text-white active:scale-125 p-3 hover:border-[2px] hover:border-[#000] hover:bg-transparent transition-all hover:text-[#000]' >View More</button>
              <button onClick={()=>gogo(apibox)} className='bg-black rounded-[5px] text-white active:scale-125 p-3 hover:border-[2px] hover:border-[#000] hover:bg-transparent transition-all hover:text-[#000]' > BUY NOW </button>
              </div>
        </div>
      ))
      }
    </div>      
    </>
  )
}

export default Home
