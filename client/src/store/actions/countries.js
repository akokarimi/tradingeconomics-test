import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCountry = createAsyncThunk(
  "countriesSlice/getCountrys",
  async (name) => {
    try {
      const res = await axios.get(`/api/countries/${name}`);
      return res.data.data[0];
    } catch (error) {
      return error;
    }
  }
);
