import { createSlice } from "@reduxjs/toolkit";
import { getCountry } from "../actions/countries";

export const countriesSlice = createSlice({
  name: "countries",
  initialState: {
    loading: false,
    data: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      ///get country info
      .addCase(getCountry.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCountry.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getCountry.rejected, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      });
  },
});

export default countriesSlice.reducer;
