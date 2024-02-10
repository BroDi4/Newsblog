import React from 'react';
import { useForm } from 'react-hook-form';

import styles from './LoginForm.module.scss';
import TextInput from '../../UI/TextInput/TextInput';
import Button from '../../UI/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { clearError } from '../../../redux/slices/authSlice';
import { signInAction } from '../../../redux/api/authApi';
import ErorrMessageBlock from '../../UI/ErrorMessageBlock/ErorrMessageBlock';
import { Loader2 } from 'lucide-react';

const Login = () => {
	const { signInError, status } = useSelector(state => state.auth);
	const dispatch = useDispatch();

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm({
		defaultValues: { email: '', password: '' },
		mode: 'onTouched',
	});

	React.useEffect(() => {
		dispatch(clearError());
	}, []);

	const onSubmit = data => {
		dispatch(signInAction(data));
	};

	return (
		<form className={styles.root} onSubmit={handleSubmit(onSubmit)}>
			<div className={styles.formInner}>
				<TextInput
					{...register('email', { required: 'Введите e-mail' })}
					type={'email'}
					logo={'email'}
					placeholder={'Enter your email'}
					error={errors.email?.message}
				/>

				<TextInput
					{...register('password', { required: 'Введите пароль' })}
					type={'password'}
					logo={'password'}
					placeholder={'Enter your password'}
					error={errors.password?.message}
				/>

				{signInError && <ErorrMessageBlock msg={signInError} />}
			</div>

			<Button
				disabled={status === 'loading' || !isValid}
				style={{ width: '100%' }}
			>
				{status === 'loading' ? <Loader2 className={styles.loader} /> : 'Войти'}
			</Button>
		</form>
	);
};

export default Login;
