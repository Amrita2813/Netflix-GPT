import {createSlice} from '@reduxjs/toolkit';

const movieSlice = createSlice({
	name: 'movies',
	initialState: {
		addNowPlayingMovies: null,
		trailerVideo: null,
		popularMovies: null,
		topRatedMovies: null,
	},
	reducers: {
		addNowPlayingMovies: (state, action) => {
			state.addNowPlayingMovies = action.payload;
		},
		addTrailerVideo: (state, action) => {
			state.trailerVideo = action.payload;
		},
		addPopularMovies: (state, action) => {
			state.popularMovies = action.payload;
		},
		addTopRatedMovies: (state, action) => {
			state.topRatedMovies = action.payload;
		},
	},
});

export const {addNowPlayingMovies, addTrailerVideo, addPopularMovies, addTopRatedMovies} =
	movieSlice.actions;
export default movieSlice.reducer;
