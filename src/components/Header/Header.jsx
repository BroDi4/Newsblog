import React from 'react';
import { CircleUserRound } from 'lucide-react';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import HeaderPopup from './HeaderPopup/HeaderPopup';

const Header = () => {
	const [activePopup, setActivePopup] = React.useState(false);

	return (
		<header className={styles.root}>
			<div className={`${styles.inner} container`}>
				<Link to={'/'} className={styles.logo}>
					NewsBlog
				</Link>

				<button
					onClick={() => setActivePopup(!activePopup)}
					className={styles.user}
				>
					<CircleUserRound size={30} className={styles.icon} />
					<p>Гость</p>
				</button>
				{activePopup && <HeaderPopup />}
			</div>
		</header>
	);
};

export default Header;
