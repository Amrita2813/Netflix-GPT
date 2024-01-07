import {useSelector} from 'react-redux';
import useMovieTrailer from '../customHooks/useMovieTrailer';

const VideoBackground = ({movieId}) => {
	const trailerVideo = useSelector((store) => store.trailerVideo);

	useMovieTrailer(movieId);

	return (
		<div>
			{/* {'https://www.youtube.com/embed/' + trailerVideo} */}
			{trailerVideo && (
				<iframe
					width="560"
					height="315"
					src={
						'https://www.youtube.com/embed/' + trailerVideo?.key + '?&autoplay=1&mute=1'
					}
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				></iframe>
			)}

			<iframe
				className="w-screen aspect-video"
				src="https://www.youtube.com/embed/ns8weNznn1Y?&autoplay=1&mute=1"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowfullscreen
			></iframe>
		</div>
	);
};

export default VideoBackground;
