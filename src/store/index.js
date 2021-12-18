import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialPageState = {
    page: 'Home'
}

const pageSlice = createSlice({
    name: 'page',
    initialState: initialPageState,
    reducers: {
        home(state) {
            state.page = "Home"
            console.log(state.page)
        },
        about(state) {
            state.page = "About"
            console.log(state.page)
        }
    }
});

const store = configureStore({
    reducer: {
        page: pageSlice.reducer
    }
})

export const pageActions = pageSlice.actions;
export default store;