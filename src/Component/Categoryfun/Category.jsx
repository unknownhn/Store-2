import React from 'react'
import { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleChange, openEdit} from '../../reducers/cotegory/cotegory';
import { getCotegory } from '../../api/home/home';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Button } from '@mui/material';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import { addCategory, delCategory, editCategory } from '../../api/cotegory/cotegory';
import Box from '@mui/material/Box';
import AddSubCat from '../../Component/AddSubCat';
import TextField from '@mui/material/TextField';

const Category = () => {

    const dispatch = useDispatch()
  
    const cotegory=useSelector(({home})=>home.cotegory)
    const openCategoryadd=useSelector(({cotegory})=>cotegory.openCategoryadd)
    const openCategoryedit=useSelector(({cotegory})=>cotegory.openCategoryedit)
    const text=useSelector(({cotegory})=>cotegory.text)
    const idx=useSelector(({cotegory})=>cotegory.idx)
    const catName=useSelector(({cotegory})=>cotegory.catName)

    const [img,setImg]=useState(null)
    const [img2,setImg2]=useState(null)

   const handelChangeImg=async(e)=>{
        setImg(e.target.files[0])
    }
    const handelChangeImg2=async(e)=>{
      setImg2(e.target.files[0])
  }

    const handleSubmit = () => {
      if (img && text) {
        const form = new FormData();
        form.append("CategoryImage", img);
        form.append("CategoryName", text);
  
        dispatch(addCategory(form));
      } else {
        console.error("Image and text are required for adding a category");
      }
    }

    const handleSubmitedit = () => {
      if (img2 && catName && idx) {
        const form = new FormData();
        form.append("Id", idx);
        form.append("CategoryImage", img2);
        form.append("CategoryName", catName);

        dispatch(editCategory(form));
      } else {
        console.error("Image and text are required for adding a category");
      }
    }
  
  
    useEffect(() => {
      dispatch(getCotegory());
    }, [dispatch])

  return (
    <div>
        <div className='flex gap-[20px] mx-[20px]'>
       <Button variant="contained" onClick={()=>dispatch(handleChange({type:"openCategoryadd",value:true}))}>add +</Button>
        <button onClick={()=>dispatch(handleChange({type:"openCategoryedit",value:true}))}><AutoFixHighOutlinedIcon/></button>
        </div>
        <div className='flex flex-wrap justify-between'>
      {
       cotegory.map((e)=>{
       return(
        <div className='w-[13%] m-[20px]'>
            <p>Id:{e.id}</p>
            <img src={`${import.meta.env.VITE_APP_FILES_URL}${e.categoryImage}`} alt="" 
            className='w-[200px]' />
           <div className='flex gap-[20px]'>
           <h1>{e.categoryName}</h1>
           <button onClick={()=>dispatch(delCategory(e.id))}><DeleteOutlineOutlinedIcon/></button>
           </div>
        </div>
       )
       })
      }

      <AddSubCat open={openCategoryadd}>
       <Box>
        <h1 className='text-[30px]'>Add new Category</h1><br />
        <TextField type='file'
         onChange={handelChangeImg} />
        <TextField placeholder='SubCategoryName' value={text}
         onChange={(e)=>dispatch(handleChange({type:"text",value:e.target.value}))} />
        <div className='mt-[20px]'>
          <Button onClick={handleSubmit}>add</Button>
          <Button onClick={()=>dispatch(handleChange({type:"openCategoryadd",value:false}))}>close</Button>
        </div>
       </Box>
      </AddSubCat>

        {/* edit dialog */}
      <AddSubCat open={openCategoryedit}>
       <Box>
        <h1 className='text-[30px]'>Edit Category</h1><br />
         <legend>Id</legend>
        <TextField value={idx} className='w-[100%]'
        onChange={(e)=>dispatch(handleChange({type:"idx",value:e.target.value}))}/> <br />
         <legend>CotegoryName</legend>
        <TextField value={catName} className='w-[100%]'
        onChange={(e)=>dispatch(handleChange({type:"catName",value:e.target.value}))}/> <br />
         <legend>Img</legend>
        <TextField type='file'
         onChange={handelChangeImg2} />
        <div className='mt-[20px]'>
          <Button onClick={handleSubmitedit}>edit</Button>
          <Button onClick={()=>dispatch(handleChange({type:"openCategoryedit",value:false}))}>close</Button>
        </div>
       </Box>
      </AddSubCat>

    </div>
    </div>
  )
}

export default Category
