import React from 'react';

import styles from './AuthFormLayout.module.scss';

const AuthFormLayout = ({ children }) => {
	return (
		<div className={styles.root}>
			<div className={styles.form}>{children}</div>
		</div>
	);
};

export default AuthFormLayout;
