import {useSelector} from 'react-redux';
import MovieList from './MovieList';

const GPTMovieSuggestion = () => {
	const {movieResults, movieNames} = useSelector((store) => store.gpt);
	if (!movieNames) return null;

	return (
		<div className="p-4 m-4 bg-black text-white bg-opacity-70">
			{movieNames.map((ele, index) => {
				return <MovieList title={ele} movies={movieResults[index]} key={index} />;
			})}
		</div>
	);
};

export default GPTMovieSuggestion;
