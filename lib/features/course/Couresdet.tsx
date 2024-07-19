import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CourseState {
  title: string;
  lastName: string;
  id: string;
}

const initialState: CourseState = {
  title: '',
  lastName: '',
  id: '1',
};

const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    addId: (state, action) => {
      state.id = action.payload;
      
    },
    viewId:(state)=>{
     
    }
    // Uncomment and complete if you need other actions
    // deleteId: (state) => {
    //   delete state.id;
    // },
  },
});

export const { addId,viewId } = courseSlice.actions;
export default courseSlice.reducer;
