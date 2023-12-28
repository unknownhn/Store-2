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
import { getSubCategory,delSubCategory,addSubCategory } from '../../api/cotegory/cotegory';
import AddSubCat from '../../Component/AddSubCat';
import TextField from '@mui/material/TextField';
import { handleChange} from '../../reducers/cotegory/cotegory';
import { getCotegory } from '../../api/home/home';


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

export default function BasicTabs() {
  const dispatch = useDispatch()
  const [value, setValue] = useState(0);

  const cotegory=useSelector(({cotegory})=>cotegory.category)
  const open=useSelector(({cotegory})=>cotegory.open)
  const text=useSelector(({cotegory})=>cotegory.text)
  const catAdd=useSelector(({home})=>home.cotegory)
// console.log(catAdd);
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
        <Tabs sx={{display:'flex'}} value={value} onChange={handleChangeMui} aria-label="basic tabs example">
        <Tab label="Admin" {...a11yProps(0)} />
          <Tab label="Item One" {...a11yProps(1)} />
          <Tab label="Subcotegories" {...a11yProps(2)} />
          <Tab label="Item Three" {...a11yProps(3)} />
        
        </Tabs>
      </div>
      <Box>
        
      <CustomTabPanel value={value} index={0}>
        admin
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
        Item One
      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>
        <Button variant="contained" sx={{marginX:"28px",}}
        onClick={()=>dispatch(handleChange({type:"open",value:true}))}>add +</Button>
       <div className='flex flex-wrap justify-between'>
       {
        cotegory.map((e)=>{
          return (
            <div key={e.id} className='w-[10%] m-[20px] text-center border-cyan-100 border-2 p-4'>
             <h1>{e.subCategoryName}</h1>
             <div className='flex mt-[4px] gap-[20px] mx-[20px]'>
              <button onClick={()=>dispatch(delSubCategory(e.id))}>
                <DeleteOutlineOutlinedIcon/>
              </button>
              <button>
                <AutoFixHighOutlinedIcon/>
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
        <TextField placeholder='SubCategoryName ' value={text}
         onChange={(e)=>dispatch(handleChange({type:"text",value:e.target.value}))} />
        <div className='mt-[20px]'>
          <Button onClick={()=>dispatch(addSubCategory({
            CategoryId:catAdd.id,
            SubCategoryName:text
          }))}>add</Button>
          <Button onClick={()=>dispatch(handleChange({type:"open",value:false}))}>close</Button>
        </div>
       </Box>
       </AddSubCat>
      
      </CustomTabPanel>

      <CustomTabPanel value={value} index={3}>
        Item Three
      </CustomTabPanel>
      </Box>
    </Box>
  );
}