import React from 'react'
import { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { handleChange } from '../../reducers/cotegory/cotegory';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import TextField from '@mui/material/TextField';
import { getBrand } from '../../api/cotegory/cotegory';
import ModalComp from '../ModalComp';

const Brand = () => {

  const dispatch = useDispatch()
  const open=useSelector(({cotegory})=>cotegory.open)
  const open2=useSelector(({cotegory})=>cotegory.open2)
  const brands=useSelector(({cotegory})=>cotegory.brands)
  const text=useSelector(({cotegory})=>cotegory.text)
  const text2=useSelector(({cotegory})=>cotegory.text2)
  const text3=useSelector(({cotegory})=>cotegory.text3)

  useEffect(() => {
  dispatch(getBrand())
  }, [dispatch])
    
return (
    <div>
     <div className='flex gap-[10px] mx-[20px]'>
     <Button variant='contained' onClick={()=>dispatch(handleChange({type:"open",value:true}))}>add +</Button>
      <button onClick={()=>dispatch(handleChange({type:"open2",value:true}))}><AutoFixHighOutlinedIcon/></button>
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
       })}</div>

      {/* modal add */}
      <ModalComp open={open}>
      <div>
      <TextField placeholder='Brand Name' 
      value={text} onChange={(e)=>dispatch(handleChange({type:"text",value:e.target.value}))}/> 
      </div>
      <div className='flex gap-[20px] mt-[20px]'>
      <Button>add</Button>
      <Button onClick={()=>dispatch(handleChange({type:"open",value:false}))}>close</Button>
      </div>
      </ModalComp>

      {/* edit */}
      <ModalComp open={open2}>
      <div>
      <TextField value={text3} onChange={(e)=>dispatch(handleChange({type:"text3",value:e.target.value}))}/> <br /><br />
      <TextField value={text2} onChange={(e)=>dispatch(handleChange({type:"text2",value:e.target.value}))}/> 
      </div>
      <div className='flex gap-[20px] mt-[20px]'>
      <Button>edit</Button>
      <Button onClick={()=>dispatch(handleChange({type:"open2",value:false}))}>close</Button>
      </div>
      </ModalComp>
    </div>
  )
}

export default Brand
