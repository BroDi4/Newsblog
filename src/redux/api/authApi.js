import { createAsyncThunk } from '@reduxjs/toolkit';
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
