import React from 'react';
import { Link } from 'react-router-dom';
import { CircleUserRound } from 'lucide-react';

import styles from './UserBtn.module.scss';
import { apiUrl } from '../../../redux/api/utils';

const UserBtn = ({ onClick, href = '/', userdata }) => {
	return (
		<>
			{userdata && (
				<button onClick={onClick} className={styles.userBtn}>
					<div className={`${styles.imgBlock} ${styles.active}`}>
						{userdata.avatarUrl ? (
							<img
								src={`${apiUrl}${userdata.avatarUrl}`}
								alt='Avatar'
								className={styles.icon}
							/>
						) : (
							<CircleUserRound className={styles.icon} />
						)}
					</div>
					<p>{userdata.name}</p>
				</button>
			)}

			{!userdata && (
				<Link to={href} className={styles.userBtn}>
					<div className={styles.imgBlock}>
						<CircleUserRound className={styles.icon} />
					</div>
					<p>Гость</p>
				</Link>
			)}
		</>
	);
};

export default UserBtn;
