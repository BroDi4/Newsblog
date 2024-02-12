import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '../api/utils';
import { handleError } from './error';

export const signInAction = createAsyncThunk(
	'auth/signInAction',
	async (formData, { rejectWithValue }) => {
		try {
			const { data } = await API.post('/user/login', formData, {
				headers: {
					'Content-Type': 'application/json',
				},
			});
			localStorage.setItem('token', data.token);
			return data;
		} catch (err) {
			return rejectWithValue(handleError(err));
		}
	}
);

export const signUpAction = createAsyncThunk(
	'auth/signUpAction',
	async (formData, { rejectWithValue }) => {
		try {
			const { data } = await API.post('/user/register', formData, {
				headers: {
					'Content-Type': 'application/json',
				},
			});
			localStorage.setItem('token', data.token);
			return data;
		} catch (err) {
			return rejectWithValue(handleError(err));
		}
	}
);
