// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyBahCJfUOxVGZCaPXjDDLp96qE5VnLzTlk',
	authDomain: 'netflixgpt-1f7e9.firebaseapp.com',
	projectId: 'netflixgpt-1f7e9',
	storageBucket: 'netflixgpt-1f7e9.appspot.com',
	messagingSenderId: '17983525733',
	appId: '1:17983525733:web:fe88bf3c1a4e096eae878c',
	measurementId: 'G-9ECH5230D3',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
