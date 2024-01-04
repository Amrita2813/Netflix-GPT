import {createSlice} from '@reduxjs/toolkit';

const UserSlice = createSlice({
	name: 'user',
	initialState: null,
	reducers: {
		addUser: (state, action) => {
			// if we return action.payload , then initial state will get updated
			return action.payload;
		},
		removeUser: (state, action) => {
			return null;
		},
	},
});

export const {addUser, removeUser} = UserSlice.actions;
export default UserSlice.reducer;
