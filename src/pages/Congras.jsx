import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Congras = () => {
  const love = useSelector((state)=> state.counter.value )
  const navigate = useNavigate()
  const goback = ()=>{
    navigate('/')

  }
  return (
    <>
    <div className=" w-full h-[700px] flex flex-col items-center bg-green-400 ">
        <h2 className=' text-[150px] text-white font-black ' > Congratulations </h2>
        <div className=" text-[20px]  ">
          <h2> You will soon get your : {love.brand} - {love.name} </h2>
        </div>
        <div className="">
          <button onClick={goback} className='bg-black rounded-[5px] text-white active:scale-125 p-3 hover:border-[2px] hover:border-[#000] hover:bg-transparent transition-all hover:text-[#000]' > Continue shopping </button>
        </div>

    </div>
      
    </>
  )
}

export default Congras
