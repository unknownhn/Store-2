import React from 'react'
import { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleChange, openEdit} from '../../reducers/cotegory/cotegory';
import { getCotegory } from '../../api/home/home';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Button } from '@mui/material';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import { delCategory } from '../../api/cotegory/cotegory';
import Box from '@mui/material/Box';
import AddSubCat from '../../Component/AddSubCat';
import TextField from '@mui/material/TextField';

const Category = () => {

    const dispatch = useDispatch()
  
    const cotegory=useSelector(({home})=>home.cotegory)
    const openCategoryadd=useSelector(({cotegory})=>cotegory.openCategoryadd)
  
    useEffect(() => {
      dispatch(getCotegory());
    }, [dispatch])

  return (
    <div>
        <div className='flex gap-[20px] mx-[20px]'>
        <Button variant="contained" onClick={()=>dispatch(handleChange({type:"openCategoryadd",value:true}))}>add +</Button>
        <button><AutoFixHighOutlinedIcon/></button>
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
        {/* <TextField placeholder='CategoryId' value={id}
         onChange={(e)=>setId(e.target.value)} />
        <TextField placeholder='SubCategoryName' value={text}
         onChange={(e)=>dispatch(handleChange({type:"text",value:e.target.value}))} /> */}
        <div className='mt-[20px]'>
          {/* <Button onClick={()=>dispatch(addSubCategory(id))}>add</Button> */}
          <Button onClick={()=>dispatch(handleChange({type:"openCategoryadd",value:false}))}>close</Button>
        </div>
       </Box>
      </AddSubCat>
    </div>
    </div>
  )
}

export default Category
