import React from 'react';

import styles from './AuthForm.module.scss';

const AuthForm = ({ title, children }) => {
	return (
		<div className={styles.root}>
			<form className={styles.form}>
				<h1>{title}</h1>
				{children}
			</form>
		</div>
	);
};

export default AuthForm;
