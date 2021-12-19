import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialPageState = {
    page: 'Home',
    showMenu: false
}

const pageSlice = createSlice({
    name: 'page',
    initialState: initialPageState,
    reducers: {
        home(state) {
            state.page = "Home"
        },
        about(state) {
            state.page = "About"
        },
        donate(state) {
            state.page = "Donate"
        },
        contact(state) {
            state.page = "Contact"
        },
        calendar(state) {
            state.page = "Calendar"
        },
        membership(state) {
            state.page = "Membership"
        },
        video(state) {
            state.page = "Video"
        },
        contest(state) {
            state.page = "Contest"
        },
        toggleMenu(state) {
            state.showMenu = !state.showMenu;
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