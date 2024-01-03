import React from 'react'
import { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleChange, openEdit} from '../../reducers/cotegory/cotegory';
import { getCotegory } from '../../api/home/home';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Button } from '@mui/material';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';

const Category = () => {

    const dispatch = useDispatch()
  
    const cotegory=useSelector(({home})=>home.cotegory)
  
  
    useEffect(() => {
      dispatch(getCotegory());
    }, [dispatch])

  return (
    <div>
        <div className='flex gap-[10px] mx-[20px]'>
        <Button>add +</Button>
        <Button><AutoFixHighOutlinedIcon/></Button>
        </div>
        <div className='flex flex-wrap justify-between'>
      {
       cotegory.map((e)=>{
       return(
        <div className='w-[13%] m-[20px]'>
            <img src={`${import.meta.env.VITE_APP_FILES_URL}${e.categoryImage}`} alt="" 
            className='w-[200px]' />
           <div className='flex gap-[20px]'>
           <h1>{e.categoryName}</h1>
           <button><DeleteOutlineOutlinedIcon/></button>
           </div>
        </div>
       )
       })
      }
    </div>
    </div>
  )
}

export default Category
