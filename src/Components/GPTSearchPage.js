import {IMG_BG_URL} from '../utils/constants';
import GPTMovieSuggestion from './GPTMovieSuggestion';
import GPTSearchBar from './GPTSearchBar';

const GPTSearchPageComponent = () => {
	return (
		<div>
			<div className="absolute -z-10">
				<img src={IMG_BG_URL} alt="bg-img" />
			</div>
			<GPTSearchBar />
			<GPTMovieSuggestion />
		</div>
	);
};

export default GPTSearchPageComponent;
