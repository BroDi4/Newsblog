import React from 'react';

import styles from './AuthForm.module.scss';

const AuthForm = ({ children }) => {
	return (
		<div className={styles.root}>
			<form className={styles.form}>{children}</form>
		</div>
	);
};

export default AuthForm;
