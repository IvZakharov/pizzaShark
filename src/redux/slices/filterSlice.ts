import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Sort = {
  name: string,
  sortProperty: 'rating' | 'price' | '-price',
}

interface filterSLiceState  {
  categoryId: number;
  sort: Sort;
}

const initialState: filterSLiceState = {
  categoryId: 0,
  sort: {
    name: 'Популярные',
    sortProperty: 'rating',
  },
};

const filterSLice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId(state: { categoryId: number; }, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
    setSort(state: any, action: PayloadAction<Sort>) {
      state.sort = action.payload;
    },
    setFilters(state: any, action: PayloadAction<filterSLiceState>) {
      state.sort = action.payload;
      state.categoryId = Number(action.payload.categoryId);
    },
  },
});

export const { setCategoryId, setSort, setFilters } = filterSLice.actions;
export default filterSLice.reducer;
