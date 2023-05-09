import { configureStore } from "@reduxjs/toolkit";

import indicatorsReducer from "./reducers/indicators";
import countriesReducer from "./reducers/countries";

export const store = configureStore({
  reducer: { indicators: indicatorsReducer, countries: countriesReducer },
});
