import React from 'react';
import { CircleUserRound } from 'lucide-react';

import styles from './UserBlock.module.scss';
import UserPopup from '../UserPopup/UserPopup';

const UserBlock = () => {
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
		<div className={styles.root} ref={popupRef}>
			<button
				onClick={() => setActivePopup(!activePopup)}
				className={styles.userBtn}
			>
				<CircleUserRound size={30} className={styles.icon} />
				<p>Гость</p>
			</button>
			<UserPopup status={activePopup} />
		</div>
	);
};

export default UserBlock;
