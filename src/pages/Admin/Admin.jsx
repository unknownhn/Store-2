import * as React from 'react';
import { useEffect,useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { getSubCategory,delSubCategory,addSubCategory, editSubCategory } from '../../api/cotegory/cotegory';
import AddSubCat from '../../Component/AddSubCat';
import TextField from '@mui/material/TextField';
import { handleChange, openEdit} from '../../reducers/cotegory/cotegory';
import { getCotegory } from '../../api/home/home';
import Category from '../../Component/Categoryfun/Category';
import Brand from '../../Component/Brand/Brand';
import Product from '../../Component/Product/Product';


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
 

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

// Main function
export default function BasicTabs() {
  const dispatch = useDispatch()
  const [id,setId]=useState(null)
  const [ide,setIde]=useState(null)
  const [value, setValue] = useState(0);

  const cotegory=useSelector(({cotegory})=>cotegory.category)
  const open=useSelector(({cotegory})=>cotegory.open)
  const text=useSelector(({cotegory})=>cotegory.text)
  const text2=useSelector(({cotegory})=>cotegory.text2)
  const idx=useSelector(({cotegory})=>cotegory.idx)
  const openEditSub=useSelector(({cotegory})=>cotegory.openEditSub)

  const handleChangeMui = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    dispatch(getSubCategory());
    dispatch(getCotegory());
  }, [dispatch])


  return (
    <Box sx={{ width: '100%'}}>
      <div className='border-b-2 border-[divider]'>
        <Tabs sx={{display:'flex',width:"40%",margin:"auto"}} value={value} onChange={handleChangeMui} aria-label="basic tabs example">
        <Tab label="Brend" {...a11yProps(0)} />
          <Tab label="Categories" {...a11yProps(1)} />
          <Tab label="Subcategories" {...a11yProps(2)} />
          <Tab label="Product" {...a11yProps(3)} />
        </Tabs>
      </div>
      <Box>
      <CustomTabPanel value={value} index={0}>
       <Brand/>
      </CustomTabPanel>
      
      <CustomTabPanel value={value} index={1}>
        <Category/>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>
        <Button variant="contained" sx={{marginX:"28px",}}
        onClick={()=>dispatch(handleChange({type:"open",value:true}))}>add +</Button>
        <button onClick={()=>dispatch(openEdit())}>
                <AutoFixHighOutlinedIcon/>
              </button>
       <div className='flex flex-wrap justify-between'>
       {
        cotegory.map((e)=>{
          return (
            <div key={e.id} className='w-[12%] m-[20px] border-cyan-100 border-2 p-4'>
              <p className='text-start'>Id:{e.id}</p>
             <div className='flex mt-[4px] gap-[10px]'>
             <h1>{e.subCategoryName}</h1>
              <button onClick={()=>dispatch(delSubCategory(e.id))}>
                <DeleteOutlineOutlinedIcon/>
              </button>
             </div>
            </div>
          )
        }) 
        }
       </div>
       {/* modal add */}
       <AddSubCat open={open}>
       <Box>
        <h1 className='text-[30px]'>Add new SubCategory</h1><br />
        <TextField placeholder='CategoryId' value={id}
         onChange={(e)=>setId(e.target.value)} />
        <TextField placeholder='SubCategoryName' value={text}
         onChange={(e)=>dispatch(handleChange({type:"text",value:e.target.value}))} />
        <div className='mt-[20px]'>
          <Button onClick={()=>dispatch(addSubCategory(id))}>add</Button>
          <Button onClick={()=>dispatch(handleChange({type:"open",value:false}))}>close</Button>
        </div>
       </Box>
       </AddSubCat>
       {/* Modal edit */}
       <AddSubCat open={openEditSub}>
       <Box>
        <h1 className='text-[30px]'>Edit SubCategory</h1><br />
        <h2>Id</h2>
        <TextField value={idx}
         onChange={(e)=>dispatch(handleChange({type:"idx",value:e.target.value}))} /> <br />
         <h2>CategoryId</h2>
        <TextField value={ide}
         onChange={(e)=>setIde(e.target.value)} /> <br />
         <h2>SubCategoryName</h2>
        <TextField value={text2}
         onChange={(e)=>dispatch(handleChange({type:"text2",value:e.target.value}))}/>
        <div className='mt-[20px]'> <br /><br />
        <Button onClick={()=>dispatch(editSubCategory(ide))}>edit</Button>
        <Button onClick={()=>dispatch(handleChange({type:"openEditSub",value:false}))}>close</Button>
        </div>
       </Box>
       </AddSubCat>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={3}>
     <Product/>
      </CustomTabPanel>
      </Box>
    </Box>
  );
}