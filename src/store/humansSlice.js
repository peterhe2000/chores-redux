import { createSlice, nanoid } from '@reduxjs/toolkit';
import { taskSlice } from './tasksSlice';

const createHuman = (name) => ({
  id: nanoid(),
  name,
  taskIds: []
});

const initialState = [
  createHuman('Steven'),
  createHuman('Peter'),
  createHuman('Matt'),
  createHuman('Kevin')
];

export const humansSlice = createSlice({
  name: 'humans',
  initialState,
  reducers: {
    add: (state, action) => {
      const human = createHuman(action.payload);
      state.push(human);
    }
  },
  extraReducers: (builder) => {
    // deep level of control
    // this is to listen taskSlice action and do something about it.
    builder.addCase(taskSlice.actions.assignToUser, (state, action) => {
      for (const human of state) {
        if (human.id === action.payload.humanId) {
          human.taskIds.push(action.payload.taskId);
        } else {
          human.taskIds = human.taskIds.filter(
            (id) => id !== action.payload.taskId
          );
        }
      }
    });
  }
  // extraReducers
  // can do this too.
  //   {
  //   [someAction]: (state, action) => {}
  // }
});
