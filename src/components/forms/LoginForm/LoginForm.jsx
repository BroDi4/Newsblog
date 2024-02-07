import React from 'react';
import { useForm } from 'react-hook-form';

import styles from './LoginForm.module.scss';
import TextInput from '../../UI/TextInput/TextInput';
import Button from '../../UI/Button/Button';

const Login = () => {
	const { register, handleSubmit } = useForm();
	const onSubmit = data => {
		console.log(data);
	};

	return (
		<form className={styles.root} onSubmit={handleSubmit(onSubmit)}>
			<div className={styles.formInner}>
				<TextInput
					register={register}
					name={'email'}
					type={'email'}
					logo={'email'}
					placeholder={'Enter your email'}
				/>
				<TextInput
					register={register}
					name={'password'}
					type={'password'}
					logo={'password'}
					placeholder={'Enter your password'}
				/>
			</div>

			<Button style={{ width: '100%' }}>Войти</Button>
		</form>
	);
};

export default Login;
