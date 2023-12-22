import Header from './Header';
import {useState, useRef} from 'react';
import {checkValidData} from './../Utils/validate';

const Login = () => {
	const name = useRef(null);
	const email = useRef(null);
	const password = useRef(null);

	const [isSignIn, setIsSignIn] = useState(true);
	const [errorMessage, setErrorMessage] = useState(null);

	const toggleSignInFormHandler = () => {
		setIsSignIn(!isSignIn);
	};

	const formSubmitHandler = () => {
		const error = checkValidData(
			name?.current?.value,
			email.current.value,
			password.current.value
		);
		setErrorMessage(error);
	};

	return (
		<div>
			<Header />
			<div className="absolute">
				<img alt="bg-img" src="%PUBLIC_URL%/images/hero-img.jpg" />
			</div>

			<form className="bg-black p-12 absolute w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-75 rounded-md">
				<h1 className="text-3xl font-bold">{isSignIn ? 'Sign In' : 'Sign Up'}</h1>
				{!isSignIn && (
					<input
						type="text"
						ref={name}
						placeholder="Full Name"
						className="p-4 m-4  w-full bg-gray-500 rounded-md"
					/>
				)}

				<input
					type="text"
					ref={email}
					placeholder="Email Address"
					className="p-4 m-4  w-full bg-gray-500 rounded-md"
				/>
				<input
					type="password"
					ref={password}
					placeholder="Enter Password"
					className="p-4 m-4 w-full bg-gray-500 rounded-md"
				/>
				<p className="text-red-600 p-4 font-bold text-lg">{errorMessage}</p>
				<button
					className="p-4 m-4 bg-red-700 w-full rounded-lg"
					onClick={formSubmitHandler}
					type="button"
				>
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
