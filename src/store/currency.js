import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "currency",
  initialState: {
    isLoading: true,
    data: [],
  },
  reducers: {
    fetchCurrency: (state) => ({
      isLoading: true,
      ...state,
    }),
    fetchCurrencyResolve: (state, action) => ({
      ...state,
      isLoading: false,
      data: action.payload,
    }),
  },
});

export const { fetchCurrency, fetchCurrencyResolve } = slice.actions;

export const selectCurrencyData = (state) => state.currency.data;

export const getCurrencyAsync = () => async (dispatch) => {
  dispatch(fetchCurrency());
  const data = await fetch(
    "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5"
  )
    .then((res) => res.json())
    .catch((e) => console.log(e));
  dispatch(fetchCurrencyResolve(data));
};

export default slice.reducer;
