import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type CartItem = {
  id: string,
  title: string,
  price: number,
  imageUrl: string,
  type: string,
  size: number,
}

interface CartSliceState {
  totalPrice: number,
  items: CartItem[],
}

const initialState: CartSliceState = {
  totalPrice: 0,
  items: [],
};

const filterSLice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      const findItem = state.items.find((obj) => {
        if (
          obj.id === action.payload.id &&
          obj.type === action.payload.type &&
          obj.size === action.payload.size
        ) {
          return obj;
        }

        return null;
      });

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }

      state.totalPrice = state.items.reduce((sum, obj) => obj.price + sum, 0);
    },

    minusItem(state, action: PayloadAction<{id: string, type: string, size: number}>) {
      const findItem = state.items.find((obj) => {
        if (
          obj.id === action.payload.id &&
          obj.type === action.payload.type &&
          obj.size === action.payload.size
        ) {
          return obj;
        }

        return null;
      });

      findItem.count--;
      state.totalPrice = state.items.reduce((sum, obj) => obj.price + sum, 0);
    },

    removeItem(state, action: PayloadAction<{id: string, type: string, size: number}>) {
      state.items = state.items.filter((obj) => {
        if (
          obj.id !== action.payload.id ||
          obj.type !== action.payload.type ||
          obj.size !== action.payload.size
        ) {
          return obj;
        }

        return null;
      });
    },

    clearItem(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});


export const { addItem, removeItem, clearItem, minusItem } = filterSLice.actions;
export default filterSLice.reducer;
