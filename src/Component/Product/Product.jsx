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
import { addProduct } from '../../api/cotegory/cotegory';


const Product = () => {

    const dispatch = useDispatch()
    const product=useSelector(({cotegory})=>cotegory.product)
    const open=useSelector(({cotegory})=>cotegory.open)
    const text1=useSelector(({cotegory})=>cotegory.text1)
    const text2=useSelector(({cotegory})=>cotegory.text2)
    const text3=useSelector(({cotegory})=>cotegory.text3)
    const text4=useSelector(({cotegory})=>cotegory.text4)
    const text5=useSelector(({cotegory})=>cotegory.text5)
    const text6=useSelector(({cotegory})=>cotegory.text6)
    const text7=useSelector(({cotegory})=>cotegory.text7)
    const text8=useSelector(({cotegory})=>cotegory.text8)
    const text9=useSelector(({cotegory})=>cotegory.text9)
    const text10=useSelector(({cotegory})=>cotegory.text10)
    const text11=useSelector(({cotegory})=>cotegory.text11)
    const text12=useSelector(({cotegory})=>cotegory.text12)

    const [img,setImg]=useState(null)

   const handelChangeImg=async(e)=>{
        setImg(e.target.files[0])
    }

    const handleSubmit = () => {
        const form = new FormData();
        form.append("Images", img);
        form.append("BrandId", text1);
        form.append("ColorId", text2);
        form.append("ProductName", text3);
        form.append("Description", text4);
        form.append("Quantity", text5);
        form.append("Weight", text6);
        form.append("Size", text7);
        form.append("Code", text8);
        form.append("Price", text9);
        form.append("HasDiscount", text10);
        form.append("DiscountPrice", text11);
        form.append("SubCategoryId", text12);
  
        dispatch(addProduct(form)); 
    }

    useEffect(() => {
        dispatch(getProduct());
      }, [dispatch])

  return (
    <div>
       <div>
        <Button variant='contained' onClick={()=>dispatch(handleChange({type:"open",value:true}))}>
        add +</Button>
       <button></button>
       </div>
          <div className='flex flex-wrap justify-between mt-[20px]'>
            {
             product.map((e)=>{
                return (
                    <div className='w-[20%]'>
                      <img src={`${import.meta.env.VITE_APP_FILES_URL}${e.image}`} alt="" 
                       className='w-[80%]'/>
                     <h1>{e.productName}</h1>
                     <span>color:{e.color}</span>
                    </div>
                )
             })   
            }
          </div>
      <ModalComp open={open}>
      <div className='flex flex-wrap gap-[4px] '>
      <TextField type='file' className='w-[87%]' onChange={handelChangeImg} /> <br />
      <TextField placeholder='BrandId' value={text1} onChange={(e)=>dispatch(handleChange({type:"text1",value:e.target.value}))}/> <br />
      <TextField placeholder='ColorId' value={text2} onChange={(e)=>dispatch(handleChange({type:"text2",value:e.target.value}))}/> <br />
      <TextField placeholder='ProductName' value={text3} onChange={(e)=>dispatch(handleChange({type:"text3",value:e.target.value}))}/> <br />
      <TextField placeholder='Description' value={text4} onChange={(e)=>dispatch(handleChange({type:"text4",value:e.target.value}))}/> <br />
      <TextField placeholder='Quantity' value={text5} onChange={(e)=>dispatch(handleChange({type:"text5",value:e.target.value}))}/> <br />
      <TextField placeholder='Weight' value={text6} onChange={(e)=>dispatch(handleChange({type:"text6",value:e.target.value}))}/> <br />
      <TextField placeholder='Size' value={text7} onChange={(e)=>dispatch(handleChange({type:"text7",value:e.target.value}))}/> <br />
      <TextField placeholder='Code' value={text8} onChange={(e)=>dispatch(handleChange({type:"text8",value:e.target.value}))}/> <br />
      <TextField placeholder='Price' value={text9} onChange={(e)=>dispatch(handleChange({type:"text9",value:e.target.value}))}/> <br />
      {/* <TextField placeholder='HasDiscount'  value={text10} onChange={(e)=>dispatch(handleChange({type:"text10",value:e.target.value}))}/> <br /> */}
      <select className='w-[42%]'>
        <option value="all">all</option>
        <option value="true">true</option>
        <option value="false">false</option>
      </select>
      <TextField placeholder='DiscountPrice' value={text11} onChange={(e)=>dispatch(handleChange({type:"text11",value:e.target.value}))}/> <br />
      <TextField placeholder='SubCategoryId' value={text12} onChange={(e)=>dispatch(handleChange({type:"text12",value:e.target.value}))}/> <br />
      <div className='flex gap-[10px] mt-[10px]'>
      <Button variant='contained' sx={{bgcolor:"green",":hover":{bgcolor:"green"}}}
      onClick={handleSubmit}>add</Button>
      <Button variant='contained' sx={{bgcolor:"red",":hover":{bgcolor:"red"}}} onClick={()=>dispatch(handleChange({type:"open",value:false}))}>close</Button>
      </div>
      </div>
      </ModalComp>
    </div>
  )
}

export default Product
