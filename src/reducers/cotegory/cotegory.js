import { createSlice } from "@reduxjs/toolkit"
import { getSubCategory,delSubCategory,editSubCategory,addSubCategory,addCategory, getBrand } from "../../api/cotegory/cotegory";
import { getProduct } from "../../api/home/home";


const cotegory = createSlice({
    name:'cotegory',
    initialState: {
        category: [],
        brands: [],
        product: [],
        open: false,
        openCategoryadd: false,
        openCategoryedit: false,
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
        builder.addCase(getBrand.fulfilled, (state, action) => {
            state.brands = action.payload;
        });
        builder.addCase(getProduct.fulfilled, (state, action) => {
            state.product = action.payload;
        });
        builder.addCase(editSubCategory.fulfilled, (state, action) => {
            state.openEditSub = false;
        });
        builder.addCase(addSubCategory.fulfilled, (state, action) => {
            state.open = false;
        });
        builder.addCase(addCategory.fulfilled, (state, action) => {
            state.openCategoryedit = false;
        });
      
    }
})
export default cotegory.reducer
export const { handleChange,openEdit } = cotegory.actions;