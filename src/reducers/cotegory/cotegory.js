import { createSlice } from "@reduxjs/toolkit"
import { getSubCategory,delSubCategory,editSubCategory,addSubCategory } from "../../api/cotegory/cotegory";


const cotegory = createSlice({
    name: 'cotegory',
    initialState: {
        category: [],
        open: false,
        openCategoryadd: false,
        openEditSub:false,
        text:"",
        text2:"",
    
        idx:null,
    },
    reducers: {
        handleChange: (state, action) => {
            state[action.payload.type] = action.payload.value;
        },
        openEdit: (state, action) => {
            state.openEditSub=true
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getSubCategory.fulfilled, (state, action) => {
            state.category = action.payload;
        });
        builder.addCase(editSubCategory.fulfilled, (state, action) => {
            state.openEditSub = false;
        });
        builder.addCase(addSubCategory.fulfilled, (state, action) => {
            state.open = false;
        });
    }
})
export default cotegory.reducer
export const { handleChange,openEdit } = cotegory.actions;