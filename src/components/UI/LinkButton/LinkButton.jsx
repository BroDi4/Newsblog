import React from 'react';
import { Link } from 'react-router-dom';

import styles from './LinkButton.module.scss';

const LinkButton = ({ type = 'link', to, children, className, ...props }) => {
	switch (type) {
		case 'link':
			return (
				<Link className={`${styles.linkBtn} ${className}`} to={to} {...props}>
					{children}
				</Link>
			);
		case 'button':
			return (
				<button className={`${styles.linkBtn} ${className}`} {...props}>
					{children}
				</button>
			);
	}
};

export default LinkButton;
