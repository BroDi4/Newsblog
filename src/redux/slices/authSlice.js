import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '../api/utils';

export const signInAction = createAsyncThunk(
	'auth/signInAction',
	async (formData, { rejectWithValue }) => {
		try {
			const { data } = await API.post('/user/login', formData);
			localStorage.setItem('token', data.token);
			return data;
		} catch (err) {
			return rejectWithValue(
				err.response
					? err.response.data.message
					: 'Something went wrong, please try again later'
			);
		}
	}
);

const initialState = {
	userdata: null,
	token: null,
	signInError: null,
	status: null,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		clearError: state => {
			state.signInError = null;
			state.status = null;
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
			});
	},
});

export const { clearError } = authSlice.actions;

export default authSlice.reducer;
