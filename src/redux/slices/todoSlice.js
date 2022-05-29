import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tasks: ['Сделать задачу по мат', 'Тренировка', 'Помыть посуду'],
  inputValue: ''
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTask: (state, action) => {
        console.log(action.value);
    },

  },
})

export const { addTask } = todoSlice.actions

export default todoSlice.reducer