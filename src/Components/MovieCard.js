import {IMG_CARD_CDN} from '../utils/constants';

const MovieCard = ({posterPath}) => {
	return (
		<div className="w-36 md:w-48 pr-4">
			<img alt="Movie Card" src={IMG_CARD_CDN + posterPath} />
		</div>
	);
};

export default MovieCard;
