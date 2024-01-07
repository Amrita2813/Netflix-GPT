import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {API_OPTIONS, GET_NOW_PLAYING_MOVIES} from '../utils/constants';
import {addNowPlayingMovies} from '../utils/movieSlice';

const useNowPlayingMovies = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		getNowPlayingMovies();
	}, []);

	const getNowPlayingMovies = async () => {
		const data = await fetch(GET_NOW_PLAYING_MOVIES, API_OPTIONS);
		const jsonData = await data.json();
		dispatch(addNowPlayingMovies(jsonData.results));
	};
};

export default useNowPlayingMovies;
