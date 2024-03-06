import { createSlice } from '@reduxjs/toolkit';

const SidebarSlice = createSlice({
  name: 'isauth',
  initialState: {
    isSate: false,
  },
  reducers: {
    handlepassShow: (state) => {
      state.isSate = true;
    },
    handlepassClose: (state) => {
      state.isSate = false;
    },
  },
}); 

export const { handlepassShow, handlepassClose } = SidebarSlice.actions;
export const isSate = (state) => state.isauth.isSate;
export default SidebarSlice.reducer;
