import Header from './Header';
import {useState, useRef} from 'react';
import {checkValidData} from '../utils/validate';

import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
} from 'firebase/auth';
import {auth} from '../utils/firebase';
import {useDispatch} from 'react-redux';
import {addUser} from '../utils/userSlice';

const Login = () => {
	const name = useRef(null);
	const email = useRef(null);
	const password = useRef(null);

	const [isSignIn, setIsSignIn] = useState(true);
	const [errorMessage, setErrorMessage] = useState(null);
	const dispatch = useDispatch();

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
		if (error) return;

		if (isSignIn) {
			// Sign in logic
			signInWithEmailAndPassword(auth, email.current.value, password.current.value)
				.then((userCredential) => {
					// Signed in
					const user = userCredential.user;
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					setErrorMessage(errorCode + '-' + errorMessage);
				});
		} else {
			// sign up logic
			createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
				.then((userCredential) => {
					// Signed up
					updateProfile(auth.currentUser, {
						displayName: name.current.value,
						photoURL: 'https://example.com/jane-q-user/profile.jpg',
					})
						.then(() => {
							// Profile updated!
							const {uid, email, displayName} = auth.currentUser;
							dispatch(
								addUser({
									uid: uid,
									email: email,
									displayName: displayName,
								})
							);
							// ...
						})
						.catch((error) => {});
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					setErrorMessage(errorCode + '-' + errorMessage);

					// ..
				});
		}
	};

	return (
		<div>
			<Header />
			<div className="absolute">
				<img
					src="https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_small.jpg"
					alt="bg-img"
				/>
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
