import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { calcTotalPrice } from '../../utils/calcTotalPrice';
import { getCartFromLc } from '../../utils/getCartFromLC';

export type CartItem = {
  id: string,
  title: string,
  price: number,
  imageUrl: string,
  type: string,
  size: number,
  count: number
}

interface CartSliceState {
  totalPrice: number,
  items: CartItem[],
}

const {items, totalPrice } = getCartFromLc()

const initialState: CartSliceState = {
  items,
  totalPrice
};

const filterSLice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state: any, action: PayloadAction<CartItem>) {
      const findItem = state.items.find((obj: CartItem) => {
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

      state.totalPrice = calcTotalPrice(state.items)
    },

    minusItem(state: any, action: PayloadAction<{id: string, type: string, size: number}>) {
      const findItem = state.items.find((obj: CartItem) => {
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
      state.totalPrice = state.totalPrice = calcTotalPrice(state.items);
    },

    removeItem(state: any, action: PayloadAction<{id: string, type: string, size: number}>) {
      state.items = state.items.filter((obj: CartItem) => {
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

    clearItem(state: any) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});


export const { addItem, removeItem, clearItem, minusItem } = filterSLice.actions;
export default filterSLice.reducer;
