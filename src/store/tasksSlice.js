import { createSlice, nanoid } from '@reduxjs/toolkit';

const createTask = (title) => ({
  id: nanoid(),
  title,
  completed: false,
  assignedTo: ''
});

const initialState = [
  createTask('Order more energy drinks'),
  createTask('Water the plants'),
];

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  add: (state, action) => {
    const task = createTask(action.payload);
    state.push(task);
  }
});
