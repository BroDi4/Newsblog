import React from 'react';

import styles from './RegisterForm.module.scss';
import TextInput from '../../UI/TextInput/TextInput';
import { useForm } from 'react-hook-form';

const Register = () => {
	const {
		handleSubmit,
		register,
		formState: { isValid, errors },
	} = useForm({
		defaultValues: { avatarUrl: '', email: '', username: '', password: '' },
	});
	return (
		<form>
			<div className={styles.formInner}>
				<TextInput />
			</div>
		</form>
	);
};

export default Register;
