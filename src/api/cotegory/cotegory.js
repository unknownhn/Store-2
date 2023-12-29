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
    async function (id,{dispatch,getState}) {
      const {text}=getState().cotegory
      let newuser={
        CategoryId:id,
        SubCategoryName:text
      }
      try {
        const { data } = await axiosRequest.post(`SubCategory/add-sub-category?CategoryId=${id}&SubCategoryName=${newuser.SubCategoryName}`);
        dispatch(getSubCategory());
      } catch (error) {}
    }
  );

  export const editSubCategory = createAsyncThunk(
    "cotegory/editSubCategory",
    async function (id,{dispatch,getState}) {
      const {text2}=getState().cotegory
      const {idx}=getState().cotegory
      let newuser={
        Id:idx,
        SubCategoryName:text2
      }
      try {
        const { data } = await axiosRequest.put(`SubCategory/update-sub-category?Id=${newuser.Id}&CategoryId=${id}&SubCategoryName=${newuser.SubCategoryName}`);
        dispatch(getSubCategory())
      } catch (error) {}
    }
  );