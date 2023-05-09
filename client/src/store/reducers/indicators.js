import { createSlice } from "@reduxjs/toolkit";
import { getIndicators } from "../actions/indicators";

export const indicatorsSlice = createSlice({
  name: "indicators",
  initialState: {
    loading: false,
    data: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      ///get country info
      .addCase(getIndicators.pending, (state) => {
        state.loading = true;
      })
      .addCase(getIndicators.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getIndicators.rejected, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      });
  },
});

export default indicatorsSlice.reducer;
