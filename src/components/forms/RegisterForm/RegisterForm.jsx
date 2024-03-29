import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signUpAction } from '../../../redux/api/authApi';
import { useForm } from 'react-hook-form';
import { Loader2 } from 'lucide-react';

import styles from './RegisterForm.module.scss';
import TextInput from '../../UI/TextInput/TextInput';
import Button from '../../UI/Button/Button';
import ErrorMessageBlock from '../../UI/ErrorMessageBlock/ErrorMessageBlock';
import FileInput from '../../UI/FileInput/FileInput';

const Register = () => {
	const { signUpError, status } = useSelector(state => state.auth);
	const dispatch = useDispatch();
	const {
		handleSubmit,
		register,
		watch,
		setError,
		setValue,
		clearErrors,
		formState: { isValid, errors },
	} = useForm({
		defaultValues: {
			avatar: {},
			email: '',
			name: '',
			password: '',
			confirmPassword: '',
		},
		mode: 'onTouched',
	});

	const handleSignUpError = React.useCallback(err => {
		if (Array.isArray(err)) {
			err.map(value =>
				setError(value.path, { type: 'custom', message: value.msg })
			);
		}
	}, []);

	React.useEffect(() => {
		handleSignUpError(signUpError);
	}, [signUpError]);

	const onSubmit = data => {
		const formData = new FormData();
		formData.append('email', data.email);
		formData.append('name', data.name);
		formData.append('password', data.password);

		if (Object.keys(data.avatar).length > 0) {
			formData.append('avatar', data.avatar[0]);
		}
		dispatch(signUpAction(formData));
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className={styles.formInner}>
				<TextInput
					{...register('name', { required: 'Введите имя' })}
					logo={'user'}
					placeholder={'Введите имя'}
					error={errors.name?.message}
				/>

				<FileInput
					{...register('avatar')}
					placeholder={'Выберите или перетащите фото'}
					value={watch('avatar')}
					error={errors.avatar?.message}
					formActions={{ setError, setValue, clearErrors }}
				/>

				<TextInput
					type={'email'}
					{...register('email', { required: 'Введите e-mail' })}
					logo={'email'}
					placeholder={'Введите e-mail'}
					error={errors.email?.message}
				/>

				<TextInput
					type={'password'}
					{...register('password', { required: 'Введите пароль' })}
					logo={'password'}
					placeholder={'Введите ваш пароль'}
					error={errors.password?.message}
				/>

				<TextInput
					type={'password'}
					{...register('confirmPassword', {
						required: 'Подтвердите пароль',
						validate: value =>
							value === watch('password') || 'Пароли не совпадают',
					})}
					logo={'password'}
					placeholder={'Подтвердите ваш пароль'}
					error={errors.confirmPassword?.message}
				/>
				{signUpError && !Array.isArray(signUpError) && (
					<ErrorMessageBlock msg={signUpError} />
				)}
			</div>

			{/* refactor button later*/}
			<Button
				disabled={status === 'loading' || !isValid}
				style={{ width: '100%' }}
			>
				{status === 'loading' ? (
					<Loader2 className={styles.loader} />
				) : (
					'Зарегестрироваться'
				)}
			</Button>
		</form>
	);
};

export default Register;
