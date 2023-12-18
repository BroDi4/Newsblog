import React from 'react';
import { Link } from 'react-router-dom';

import styles from './HeaderLogo.module.scss';

const HeaderLogo = () => {
	return (
		<Link to={'/'} className={styles.logo}>
			NewsBlog
		</Link>
	);
};

export default HeaderLogo;
