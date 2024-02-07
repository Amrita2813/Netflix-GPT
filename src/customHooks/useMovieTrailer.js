import {useDispatch} from 'react-redux';
import {API_OPTIONS} from '../utils/constants';
import {addTrailerVideo} from '../utils/movieSlice';
import {useEffect} from 'react';

const useMovieTrailer = (movieId) => {
	const dispatch = useDispatch();

	const getMoviesVideos = async () => {
		const data = await fetch(
			'https://api.themoviedb.org/3/movie/' + movieId + '/videos?language=en-US',
			API_OPTIONS
		);
		const movieData = await data.json();
		const filteredTrailerCopy = movieData?.results?.filter((ele) => ele.type === 'Trailer');
		const trailer = filteredTrailerCopy?.length ? filteredTrailerCopy[0] : movieData[1];

		dispatch(addTrailerVideo(trailer));
	};

	useEffect(() => {
		getMoviesVideos();
	}, []);
};

export default useMovieTrailer;
