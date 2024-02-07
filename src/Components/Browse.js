import Header from './Header';
import useNowPlayingMovies from '../customHooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../customHooks/usePopularMovies';
import useTopRatedMovies from '../customHooks/useTopRatedMovies';
import {useSelector} from 'react-redux';
import GPTSearchPageComponent from './GPTSearchPage';

const Browse = () => {
	const showGptSearch = useSelector((state) => state.gpt.showGptSearch);

	// this is custom hook to get the now playing latest movies
	useNowPlayingMovies();
	usePopularMovies();
	useTopRatedMovies();
	console.log(showGptSearch);

	return (
		<>
			<Header />
			{}
			{showGptSearch ? (
				<GPTSearchPageComponent />
			) : (
				<>
					<MainContainer />
					<SecondaryContainer />
				</>
			)}
		</>
	);
};

export default Browse;
