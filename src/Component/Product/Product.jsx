import React from 'react'
import { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleChange } from '../../reducers/cotegory/cotegory';
import { getCotegory, getProduct } from '../../api/home/home';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Button } from '@mui/material';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import Box from '@mui/material/Box';
import ModalComp from '../ModalComp';
import TextField from '@mui/material/TextField';


const Product = () => {

    const dispatch = useDispatch()
    const product=useSelector(({cotegory})=>cotegory.product)

    useEffect(() => {
        dispatch(getProduct());
      }, [dispatch])

  return (
    <div>
          <div>
            {
             product.map((e)=>{
                return (
                    <div>
                      <img src={`${import.meta.env.VITE_APP_FILES_URL}${e.image}`} alt="" 
                       className='w-[200px]'/>
                     <h1>{e.productName}</h1>
                    </div>
                )
             })   
            }
          </div>
    </div>
  )
}

export default Product
