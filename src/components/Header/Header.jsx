import React from 'react';
import { CircleUserRound } from 'lucide-react';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import HeaderPopup from './HeaderPopup/HeaderPopup';

const Header = () => {
	const [activePopup, setActivePopup] = React.useState(false);

	const popupRef = React.useRef(null);

	React.useEffect(() => {
		const checkOutsideClick = e => {
			if (popupRef.current && !popupRef.current.contains(e.target)) {
				setActivePopup(false);
			}
		};

		window.addEventListener('mousedown', checkOutsideClick);
		return () => {
			window.removeEventListener('mousedown', checkOutsideClick);
		};
	}, []);

	return (
		<header className={styles.root}>
			<div className={`${styles.inner} container`}>
				<Link to={'/'} className={styles.logo}>
					NewsBlog
				</Link>

				<div className={styles.userBox} ref={popupRef}>
					<button
						onClick={() => setActivePopup(!activePopup)}
						className={styles.user}
					>
						<CircleUserRound size={30} className={styles.icon} />
						<p>Гость</p>
					</button>
					<HeaderPopup status={activePopup} setStatus={setActivePopup} />
				</div>
			</div>
		</header>
	);
};

export default Header;
