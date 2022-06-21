import axios from 'axios';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';




type Product = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  types: number[];
  sizes: number[];
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error'
}

interface PizzaSliceState {
  items: Product[],
  status: Status,
}

export const fetchPizzas = createAsyncThunk<Product[], Record<string, string> >('pizzas/fetchPizzasStatus', async (params) => {
  const { order, sortBy, category } = params;
  const { data } = await axios.get<Product[]>(
    `https://6284d68aa48bd3c40b767a58.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`,
  );

  return data; 
});

const initialState: PizzaSliceState = {
  items: [],
  status: Status.LOADING,
};

const pizzasSLice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Product[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {

    builder.addCase(fetchPizzas.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    });

    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;;
    });

    builder.addCase(fetchPizzas.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  }

});

export const { setItems } = pizzasSLice.actions;
export default pizzasSLice.reducer;
