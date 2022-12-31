import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    trending: [],
    recommended: [],
    show: [],
}

export const movieSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTrending: (state, action) => {
            state.trending = [...action.payload]
        },

        addRecommended: (state, action) => {
            state.recommended = [...action.payload]
        },

        addTvShow: (state, action) => {
            state.show = [...action.payload]
        },

        searchMovie: (state, action) => {
            if (action.payload.text) {
                state.trending = state.trending.filter(item => item.title.toLowerCase().includes(action.payload.text));
                state.recommended = state.recommended.filter(item => item.title.toLowerCase().includes(action.payload.text));
                state.show = state.show.filter(item => item.title.toLowerCase().includes(action.payload.text));
            } else {
                state.trending = [...state.trending]
                state.recommended = [...state.recommended]
                state.show = [...state.show]
            }
        },
        removeMovie: (state, action) => {
            state.trending = [];
            state.recommended = [];
            state.show = []
        }
    }
})

// Action creators are generated for each case reducer function
export const { addTrending, removeMovie, addRecommended, addTvShow, searchMovie } = movieSlice.actions

export default movieSlice.reducer