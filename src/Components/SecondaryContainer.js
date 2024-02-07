import {useSelector} from 'react-redux';
import MovieList from './MovieList';
const SecondaryContainer = () => {
	const movies = useSelector((store) => store.movies);

	return (
		<div className="bg-black">
			<div className="relative z-20 -mt-64 pl-12">
				<MovieList title={'Now Playing Movies'} movies={movies.addNowPlayingMovies} />
				<MovieList title={'Popular Movies'} movies={movies.popularMovies} />
				<MovieList title={'Top Rated Movies'} movies={movies.topRatedMovies} />
			</div>
		</div>
	);
};

export default SecondaryContainer;
