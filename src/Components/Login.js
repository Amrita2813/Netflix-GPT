import Header from './Header';
import {useState} from 'react';

const Login = () => {
	const [isSignIn, setIsSignIn] = useState(true);

	const toggleSignInFormHandler = () => {
		setIsSignIn(!isSignIn);
	};

	return (
		<div>
			<Header />
			<div className="absolute">
				<img
					src="https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_large.jpg"
					alt="bg-img"
				/>
			</div>

			<form className="bg-black p-12 absolute w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-75 rounded-md">
				<h1 className="text-3xl font-bold">{isSignIn ? 'Sign In' : 'Sign Up'}</h1>
				{!isSignIn && (
					<input
						type="text"
						placeholder="Full Name"
						className="p-4 m-4  w-full bg-gray-500 rounded-md"
					/>
				)}

				<input
					type="text"
					placeholder="Email Address"
					className="p-4 m-4  w-full bg-gray-500 rounded-md"
				/>
				<input
					type="password"
					placeholder="Enter Password"
					className="p-4 m-4 w-full bg-gray-500 rounded-md"
				/>
				<button className="p-4 m-4 bg-red-700 w-full rounded-lg">
					{isSignIn ? 'Sign In' : 'Sign Up'}
				</button>
				<p className="p-2 m-4" onClick={toggleSignInFormHandler}>
					{isSignIn ? 'New to Netflix? SignUp Now' : 'Already a User? Sign In'}
				</p>
			</form>
		</div>
	);
};
export default Login;
