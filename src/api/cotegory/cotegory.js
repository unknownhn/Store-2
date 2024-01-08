import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosRequest } from "../../utils/axiosRequest";
import { getCotegory } from "../home/home";


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

  //=>////////////////////////////Categories
  export const addCategory = createAsyncThunk(
    "cotegory/addCategory",
    async function (form,{dispatch}) {
      try {
        const { data } = await axiosRequest.post(`/Category/add-category`,form,{
          headers: {
              'Content-Type': 'multipart/form-data'
          },
      });
        dispatch(getCotegory());
      } catch (error) {}
    }
  );

  export const editCategory = createAsyncThunk(
    "cotegory/editCategory",
    async function (form,{dispatch}) {
      try {
        const { data } = await axiosRequest.put(`/Category/update-category`,form,{
          headers: {
              'Content-Type': 'multipart/form-data'
          },
      });
        dispatch(getCotegory());
      } catch (error) {}
    }
  );

  export const delCategory = createAsyncThunk(
    "cotegory/delCategory",
    async function (id,{dispatch}) {
      try {
        const { data } = await axiosRequest.delete(`Category/delete-category?id=${id}`);
        dispatch(getCotegory());
      } catch (error) {}
    }
  );
  
 //=>//////////////////////Brands
  export const getBrand = createAsyncThunk(
    "cotegory/getBrand",
    async function () {
      try {
        const { data } = await axiosRequest.get("Brand/get-brands");
        return data.data;
      } catch (error) {}
    }
  );

//=>//////////////////////Product
 