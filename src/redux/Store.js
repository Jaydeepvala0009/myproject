import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './Slice/LanguageSlice';
import authReducer from './Slice/AuthSlice';
import SidebarSlice from './Slice/SidebarSlice';
import LogoutSlice from './Slice/LogoutSlice';

const store = configureStore({
  reducer: {
    language: languageReducer,
    auth: authReducer,
    isauth: SidebarSlice,
    authlogout: LogoutSlice,
    },
});

export default store;
