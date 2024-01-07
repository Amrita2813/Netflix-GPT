const VideoTitle = ({title, overview}) => {
	return (
		<div className="pt-[20%] px-28 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
			<h1 className="font-bold text-6xl">{title}</h1>
			<p className="py-4 w-1/3 text-lg">{overview}</p>
			<div>
				<button className="bg-white p-4 text-black text-lg px-8 rounded-lg hover:bg-opacity-80">
					▶ Play
				</button>
				<button className="bg-gray-500 p-4 text-white text-lg px-8 rounded-lg bg-opacity-50 ml-2">
					More Info
				</button>
			</div>
		</div>
	);
};

export default VideoTitle;
