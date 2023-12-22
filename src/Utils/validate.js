export const checkValidData = (name, email, password) => {
	const isValidName = /^[^\s]+$/.test(name);
	const isValidEmail = /^[A-Za-z0-9]+@[a-z]+\.[a-z]{2,3}$/.test(email);
	const isValidPassword =
		/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(password);

	if (!isValidEmail) return 'Email is not valid';
	if (!isValidPassword) return 'Password is not valid';

	return null;
};
