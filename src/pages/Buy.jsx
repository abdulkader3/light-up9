import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { almostdone } from '../Slices/Shanto'

const Buy = () => {
    const love = useSelector((state)=> state.counter.value )
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const lastspap = (yoyo)=>{
      navigate('/Congras')
      dispatch(almostdone(yoyo))

    }
    const goback = ()=>{
      navigate('/')
    

    }
  return (
    <>
    <div className=" w-full h-full flex justify-between   ">
       <div className=" w-[400px] h-[400px] flex justify-center flex-wrap ">
        <div className=" w-[200px] h-[200]  m-5 ">
            <img src={love.image} alt="photo" />
            <h2> Your product image </h2>
        </div>
       </div>
       <div className="  m-10 ">
        <p>Quantity : 1</p>
        <p>Brand : {love.brand}</p>
        <p>Product version : {love.storage}</p>
        <p>color variant : {love.color} </p>
        <p>Total amount : {love.price} </p>
        <div className=" w-[300[px] h-[300px] flex flex-col items-start gap-5 ">
          <button onClick={()=>lastspap(love)} className='bg-black rounded-[5px] text-white active:scale-125 p-3 hover:border-[2px] hover:border-[#000] hover:bg-transparent transition-all hover:text-[#000]' > Confirm order </button>
          <button onClick={goback} className='bg-black rounded-[5px] text-white active:scale-125 p-3 hover:border-[2px] hover:border-[#000] hover:bg-transparent transition-all hover:text-[#000]' > Continue shopping </button>
        </div>
       </div>
       <div className="w-[400px] h-[500px] "></div>
    </div>
      
    </>
  )
}

export default Buy
