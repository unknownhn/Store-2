import React, { useEffect } from 'react'
import axios from 'axios'
import { addToCart } from '../api/home/home'
import { useDispatch } from 'react-redux'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Sales = ({e, id, img, btn, title, cost, prev, btn2,color }) => {


const dispatch = useDispatch()



  return (
    <div  className='w-[200px] h-[361px]'>
      <div className="h-[139px]">
        <img className='h-[100%] object-cover' src={img} />
      </div>
      <div className="py-[10px]">
        <button className='bg-[#ff4444] px-[9px] py-[2px] text-[white] text-[12px] rounded-[8px]'>{btn}</button>
        <button className='bg-[#0073fd]  text-[14px] px-[10px] text-[white] rounded-[8px]'>{btn2}</button>
      </div>
      <div className="flex pb-[5px] font-[700] gap-[10px]">
        <h1>{cost} c.</h1>
        <h1 className='line-through text-[#9BA1A7]'>{prev} c.</h1>
      </div>
      <div className="text-[14px] pb-[5px]  text-[#9BA1A7] font-[600]">
        <h1>70 c. x 24 мес</h1>
      </div>
      <div className=" font-[500] text-[14px]">
        <h1>{title}</h1>
      </div>
      <div className="text-[14px] pb-[10px]  font-[600]">
        <h1>{color}</h1>
      </div>
      <div className="">
        <button onClick={()=>dispatch(addToCart(e,id))}  className='hover:bg-[#38bdf8] bg-[#0284c7] text-white flex items-center px-[20px] py-[7px] rounded-md gap-[8px]'>
         <ShoppingCartOutlinedIcon/>
          <span className='text-[15px] font-[500]'>В корзину</span>
        </button>
      </div>
    </div>
  )
}

export default Sales