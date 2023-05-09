import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getIndicators = createAsyncThunk(
  "indicatorsSlice/getIndicators",
  async (name) => {
    try {
      const res = await axios.get(`api/indicators/country/${name}/gdp`);

      return res.data.data[0];
    } catch (error) {
      return null;
    }
  }
);
