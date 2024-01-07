import Header from './Header';
import useNowPlayingMovies from '../customHooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
	// this is custom hook to get the now playing latest movies
	useNowPlayingMovies();

	return (
		<>
			<Header />
			<MainContainer />
			<SecondaryContainer />
		</>
	);
};

export default Browse;
