import {createSlice} from '@reduxjs/toolkit';

const gptSlice = createSlice({
	name: 'gpt',
	initialState: {
		showGptSearch: false,
		movieNames: null,
		movieResults: null,
	},
	reducers: {
		toggleGptSearchView: (state, action) => {
			state.showGptSearch = !state.showGptSearch;
		},
		addGPTMovies: (state, action) => {
			const {movieNames, movieResults} = action.payload;
			state.movieNames = movieNames;
			state.movieResults = movieResults;
		},
	},
});

export const {toggleGptSearchView, addGPTMovies} = gptSlice.actions;
export default gptSlice.reducer;
