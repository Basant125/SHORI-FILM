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
        removeMovie: (state, action) => {
            state.trending = [];
            state.recommended = [];
            state.show = []
        }
    }
})

// Action creators are generated for each case reducer function
export const { addTrending, removeMovie, addRecommended, addTvShow } = movieSlice.actions

export default movieSlice.reducer