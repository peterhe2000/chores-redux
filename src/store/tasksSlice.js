import { createAction, createSlice, nanoid } from '@reduxjs/toolkit';

// Task store model
const createTask = (title) => ({
  id: nanoid(), //
  title,
  completed: false,
  assignedTo: ''
});

const initialState = [
  createTask('Order more energy drinks'),
  createTask('Water the plants')
];

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    add: (state, action) => {
      const task = createTask(action.payload);
      state.push(task);
    },
    toggle: (state, action) => {
      const task = state.find((task) => task.id === action.payload.taskId);
      task.completed = action.payload.completed;
    },
    assignToUser: (state, action) => {
      const task = state.find((task) => task.id === action.payload.taskId);
      task.assignedTo = action.payload.humanId;
    }
  }
});

// own customize action so that we dont have to use taskSlice.actions.toggle(...,...) but just toggleTask(...,...).
// action name need to be match name in line 24 (tasks/toggle), otherwise it would work
export const toggleTask = createAction('tasks/toggle', (taskId, completed) => ({
  payload: { taskId, completed }
}));
