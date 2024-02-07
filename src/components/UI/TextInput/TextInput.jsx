import React from 'react';

import styles from './TextInput.module.scss';
import { Lock, Mail, User } from 'lucide-react';

const FormInput = ({ type = 'text', name, register, logo, ...rest }) => {
	return (
		<div className={styles.root}>
			{logo === 'email' ? (
				<Mail className={styles.icon} />
			) : logo === 'user' ? (
				<User className={styles.icon} />
			) : logo === 'password' ? (
				<Lock className={styles.icon} />
			) : (
				<></>
			)}
			<input
				id={name}
				type={type}
				{...register(name)}
				{...rest}
				className={styles.input}
			/>
		</div>
	);
};

export default FormInput;
