import {onAuthStateChanged, signOut} from 'firebase/auth';
import {auth} from '../utils/firebase';
import {useDispatch, useSelector} from 'react-redux';
import {addUser, removeUser} from '../utils/userSlice';
import {useNavigate} from 'react-router-dom';
import {useEffect} from 'react';
import {LOGO, SUPPORTED_LANGUAGES} from '../utils/constants';
import {toggleGptSearchView} from '../utils/gptSlice';
import {changeLanguage} from '../utils/configSlice';

const Header = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const user = useSelector((store) => store.user);
	const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

	useEffect(() => {
		// onAuthStateChanged is kind of a event listener, whenever the auth state changes it keeps a
		// track of it , so it will be called again and again whenever this component will mount
		// so we should unsubscribe this whenever it will unmount
		// onAuthStateChanged - it has a unsubscribe function

		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/auth.user
				const {uid, email, displayName} = user;
				dispatch(addUser({uid: uid, email: email, displayName: displayName}));
				navigate('/browse');
				// ...
			} else {
				// User is signed out
				dispatch(removeUser());
				navigate('/');
			}
		});

		// unsubscribe when component unmounts
		// unsubscribing a function causing problem - need to check again
		// return unsubscribe();
	}, []);

	const handleSignOut = () => {
		signOut(auth)
			.then(() => {
				// Sign-out successful.
				dispatch(removeUser());
			})
			.catch((error) => {
				// An error happened.
				console.log('error', error);
			});
	};

	const GPTSearchHandler = () => {
		dispatch(toggleGptSearchView());
		console.log('gpt search handler');
	};

	const handleLanguageChange = (e) => {
		dispatch(changeLanguage(e.target.value));
	};
	return (
		<div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between">
			<img className="w-48" src={LOGO} alt="logo" />
			{user && (
				<div className="flex p-2">
					{showGptSearch && (
						<select
							className="bg-gray-900 text-white p-2 m-2 rounded-lg"
							onChange={handleLanguageChange}
						>
							{SUPPORTED_LANGUAGES.map((lang) => {
								return (
									<option key={lang.identifier} value={lang.identifier}>
										{lang.name}
									</option>
								);
							})}
						</select>
					)}

					<button
						className="text-white px-4 py-4 m-2 bg-purple-800 rounded-md"
						onClick={GPTSearchHandler}
					>
						{showGptSearch ? 'Home Page' : 'GPT Search'}
					</button>
					<button
						className="text-white bg-red-500 rounded-lg w-32 h-16"
						onClick={handleSignOut}
					>
						Sign out
					</button>
				</div>
			)}
		</div>
	);
};

export default Header;
