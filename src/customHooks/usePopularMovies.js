import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {API_OPTIONS, GET_POPULAR_MOVIES} from '../utils/constants';
import {addPopularMovies} from '../utils/movieSlice';

const usePopularMovies = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		getPopularMovies();
	}, []);

	const getPopularMovies = async () => {
		const data = await fetch(GET_POPULAR_MOVIES, API_OPTIONS);
		const jsonData = await data.json();
		dispatch(addPopularMovies(jsonData.results));
	};
};

export default usePopularMovies;
