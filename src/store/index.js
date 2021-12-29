import { configureStore } from '@reduxjs/toolkit';
import { taskSlice } from './tasksSlice';
import { humansSlice } from './humansSlice';

export const store = configureStore({
  // use combine reducer behind the scenes
  reducer: {
    tasks: taskSlice.reducer,
    humans: humansSlice.reducer,
  },
});
