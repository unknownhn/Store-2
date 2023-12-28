import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosRequest } from "../../utils/axiosRequest";


export const getSubCategory = createAsyncThunk(
    "cotegory/getSubCategory",
    async function () {
      try {
        const { data } = await axiosRequest.get("SubCategory/get-sub-category");
        return data.data;
      } catch (error) {}
    }
  );

  export const delSubCategory = createAsyncThunk(
    "cotegory/delSubCategory",
    async function (id,{dispatch}) {
      try {
        const { data } = await axiosRequest.delete(`SubCategory/delete-sub-category?id=${id}`);
        dispatch(getSubCategory());
      } catch (error) {}
    }
  );
  export const addSubCategory = createAsyncThunk(
    "cotegory/addSubCategory",
    async function (obj,{dispatch}) {
      try {
        const { data } = await axiosRequest.post(`SubCategory/add-sub-category?`,{CategoryId:obj.CategoryId,
          SubCategoryName:obj.SubCategoryName});
        dispatch(getSubCategory());
      } catch (error) {}
    }
  );