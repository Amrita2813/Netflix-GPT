import Header from './Header';
import useNowPlayingMovies from '../customHooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../customHooks/usePopularMovies';
import useTopRatedMovies from '../customHooks/useTopRatedMovies';

const Browse = () => {
	// this is custom hook to get the now playing latest movies
	useNowPlayingMovies();
	usePopularMovies();
	useTopRatedMovies();

	return (
		<>
			<Header />
			<MainContainer />
			<SecondaryContainer />
		</>
	);
};

export default Browse;
