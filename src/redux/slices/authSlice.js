import { createSlice } from '@reduxjs/toolkit';
import { authAction, signInAction, signUpAction } from '../api/authApi';

const initialState = {
	userdata: null,
	token: null,
	signInError: null,
	signUpError: null,
	authError: null,
	status: null,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		clearError: state => {
			state.signInError = null;
			state.signUpError = null;
			state.authError = null;
		},
		logout: state => {
			state.userdata = null;
			state.token = null;
			state.signInError = null;
			state.signUpError = null;
			state.authError = null;
		},
	},
	extraReducers: builder => {
		builder
			.addCase(signInAction.fulfilled, (state, action) => {
				const { token, ...data } = action.payload;
				state.userdata = data;
				state.token = token;
				state.status = 'fullfilled';
			})
			.addCase(signInAction.pending, state => {
				state.userdata = null;
				state.token = null;
				state.signInError = null;
				state.status = 'loading';
			})
			.addCase(signInAction.rejected, (state, action) => {
				state.signInError = action.payload;
				state.status = 'error';
			})
			.addCase(signUpAction.fulfilled, (state, action) => {
				const { token, ...data } = action.payload;
				state.userdata = data;
				state.token = token;
				state.status = 'fullfilled';
			})
			.addCase(signUpAction.pending, state => {
				state.userdata = null;
				state.token = null;
				state.signUpError = null;
				state.status = 'loading';
			})
			.addCase(signUpAction.rejected, (state, action) => {
				state.signUpError = action.payload;
				state.status = 'error';
			})
			.addCase(authAction.fulfilled, (state, action) => {
				const { token, ...data } = action.payload;
				state.userdata = data;
				state.token = token;
				state.status = 'fullfilled';
			})
			.addCase(authAction.pending, state => {
				state.userdata = null;
				state.token = null;
				state.authError = null;
				state.status = 'loading';
			})
			.addCase(authAction.rejected, (state, action) => {
				state.authError = action.payload;
				state.status = 'error';
			});
	},
});

export const { clearError, logout } = authSlice.actions;

export default authSlice.reducer;
