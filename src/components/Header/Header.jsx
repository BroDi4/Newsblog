import React from 'react';

import styles from './Header.module.scss';
import UserBlock from './UserBlock/UserBlock';
import HeaderLogo from './HeaderLogo/HeaderLogo';

const Header = () => {
	return (
		<header className={styles.root}>
			<div className={`${styles.inner} container`}>
				<HeaderLogo />
				<UserBlock />
			</div>
		</header>
	);
};

export default Header;
