import {useDispatch} from 'react-redux';
import {API_OPTIONS, GET_TOP_RATED_MOVIES} from '../utils/constants';
import {addTopRatedMovies} from '../utils/movieSlice';
import {useEffect} from 'react';

const useTopRatedMovies = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		getTopMovies();
	}, []);

	const getTopMovies = async () => {
		const data = await fetch(GET_TOP_RATED_MOVIES, API_OPTIONS);
		const jsonData = await data.json();
		dispatch(addTopRatedMovies(jsonData.results));
	};
};

export default useTopRatedMovies;
