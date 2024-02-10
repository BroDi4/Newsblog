import React from 'react';

import styles from './TextInput.module.scss';
import { Lock, Mail, User } from 'lucide-react';

const FormInput = React.forwardRef(
	({ type = 'text', onChange, onBlur, name, logo, error, ...rest }, ref) => {
		const iconComponent =
			logo === 'email' ? (
				<Mail className={styles.icon} />
			) : logo === 'user' ? (
				<User className={styles.icon} />
			) : logo === 'password' ? (
				<Lock className={styles.icon} />
			) : (
				<></>
			);

		return (
			<>
				<div className={styles.root}>
					{iconComponent}
					<input
						id={name}
						onChange={onChange}
						onBlur={onBlur}
						name={name}
						ref={ref}
						type={type}
						{...rest}
						className={styles.input}
					/>
				</div>
				{error && <span className={styles.error}>{error}</span>}
			</>
		);
	}
);

export default FormInput;
