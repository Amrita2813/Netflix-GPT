import {useDispatch, useSelector} from 'react-redux';
import lang from '../utils/languageConstants';
import {useRef} from 'react';
import openai from '../utils/openai';
import {API_OPTIONS} from '../utils/constants';
import {addGPTMovies} from '../utils/gptSlice';
const GPTSearchBar = () => {
	const dispatch = useDispatch();
	const langKey = useSelector((store) => store.config.lang);
	const searchText = useRef(null);
	console.log(langKey);

	const handleGptSearchClick = async () => {
		console.log('searchText', searchText.current.value);
		const gptQuery =
			'Act as a Movie Recommendation system and suggest some movies for the query : ' +
			searchText.current.value +
			'. only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya';

		const gptResults = await openai.chat.completions.create({
			messages: [{role: 'user', content: gptQuery}],
			model: 'gpt-3.5-turbo',
		});

		if (!gptResults.choices) {
			// TODO: Write Error Handling
		}

		console.log(gptResults.choices?.[0]?.message?.content);

		// Andaz Apna Apna, Hera Pheri, Chupke Chupke, Jaane Bhi Do Yaaro, Padosan
		const gptMovies = gptResults.choices?.[0]?.message?.content.split(',');

		// searchovieTMDB
		// it will return us the array of promises
		// [promise,promise,promise,promise,promise]
		const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

		// here Promise.all will finish once all Promises will be resolved and then only i will get my result
		const tmdbResults = await Promise.all(promiseArray);

		console.log('tmdbResults', tmdbResults);
		dispatch(addGPTMovies({movieNames: gptMovies, movieResults: tmdbResults}));
	};

	const searchMovieTMDB = async (movie) => {
		const data = await fetch(
			'https://api.themoviedb.org/3/search/movie?query=' +
				movie +
				'&include_adult=false&language=en-US&page=1',
			API_OPTIONS
		);
		const json = await data.json();

		return json.results;
	};

	return (
		<div className="pt-[10%] flex justify-center">
			<form
				className="  bg-black w-1/2 grid grid-cols-12"
				onSubmit={(e) => e.preventDefault()}
			>
				<input
					ref={searchText}
					type="text"
					placeholder={lang[langKey].gptSearchPlaceholder}
					className="p-4 m-4 col-span-9"
				/>
				<button
					className="p-4 m-4 bg-red-700 text-white rounded-lg col-span-3"
					onClick={handleGptSearchClick}
				>
					{lang[langKey].search}
				</button>
			</form>
		</div>
	);
};

export default GPTSearchBar;
