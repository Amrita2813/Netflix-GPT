import {signOut} from 'firebase/auth';
import {auth} from '../Utils/firebase';
import {useDispatch, useSelector} from 'react-redux';
import {removeUser} from '../Utils/userSlice';
import {useNavigate} from 'react-router-dom';

const Header = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const user = useSelector((store) => store.user);

	const handleSignOut = () => {
		signOut(auth)
			.then(() => {
				// Sign-out successful.
				dispatch(removeUser());
				navigate('/login');
			})
			.catch((error) => {
				// An error happened.
				console.log('error', error);
			});
	};

	return (
		<div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between">
			<img
				className="w-48"
				src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
				alt="logo"
			/>
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
