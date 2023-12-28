import { createSlice } from "@reduxjs/toolkit"
import { getSubCategory,delSubCategory } from "../../api/cotegory/cotegory";


const cotegory = createSlice({
    name: 'cotegory',
    initialState: {
        category: [],
        open: false,
        text:"",
    },
    reducers: {
        handleChange: (state, action) => {
            state[action.payload.type] = action.payload.value;
        },
        
    },
    extraReducers: (builder) => {
        builder.addCase(getSubCategory.fulfilled, (state, action) => {
            state.category = action.payload;
        });
    }
})
export default cotegory.reducer
export const { handleChange } = cotegory.actions;