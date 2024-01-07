import {onAuthStateChanged, signOut} from 'firebase/auth';
import {auth} from '../utils/firebase';
import {useDispatch, useSelector} from 'react-redux';
import {addUser, removeUser} from '../utils/userSlice';
import {useNavigate} from 'react-router-dom';
import {useEffect} from 'react';
import {LOGO} from '../utils/constants';

const Header = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const user = useSelector((store) => store.user);

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

	return (
		<div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between">
			<img className="w-48" src={LOGO} alt="logo" />
			{user && (
				<button
					className="text-white bg-red-500 rounded-lg w-32 h-16"
					onClick={handleSignOut}
				>
					Sign out
				</button>
			)}
		</div>
	);
};

export default Header;
