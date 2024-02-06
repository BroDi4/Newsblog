import React from 'react';
import { Link } from 'react-router-dom';
import { CircleUserRound } from 'lucide-react';

import styles from './UserBtn.module.scss';

const UserBtn = ({ type = 'link', onClick, href }) => {
	const content = (
		<>
			<CircleUserRound size={30} className={styles.icon} />
			<p>Гость</p>
		</>
	);

	switch (type) {
		case 'link':
			return (
				<Link className={styles.userBtn} to={href}>
					{content}
				</Link>
			);
		case 'btn':
			return (
				<button onClick={onClick} className={styles.userBtn}>
					{content}
				</button>
			);
	}
};

export default UserBtn;
