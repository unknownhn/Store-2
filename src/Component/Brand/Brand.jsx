import React from 'react'
import { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { handleChange } from '../../reducers/cotegory/cotegory';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { getBrand } from '../../api/cotegory/cotegory';
import ModalComp from '../ModalComp';

const Brand = () => {

    const dispatch = useDispatch()
    const brands=useSelector(({cotegory})=>cotegory.brands)

  useEffect(() => {
  dispatch(getBrand());
  }, [dispatch])
    
return (
    <div>
     <div className='flex gap-[10px]'>
     <Button variant='contained'>add +</Button>
      <button><AutoFixHighOutlinedIcon/></button>
     </div>
      <div className='flex justify-between flex-wrap'> {
       brands.map((e)=>{
        return (
          <div className='w-[20%] m-[20px] text-center bg-slate-300'>
            <span>id:{e.id}</span>
            <h1>{e.brandName}</h1><br />
              <button><DeleteOutlineOutlinedIcon/></button>
          </div>
        )
       })
        }</div>

    </div>
  )
}

export default Brand
