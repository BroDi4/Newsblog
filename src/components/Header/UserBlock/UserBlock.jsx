import React from 'react';

import { CircleUserRound } from 'lucide-react';

import styles from './UserBlock.module.scss';
import UserPopup from '../UserPopup/UserPopup';
import UserBtn from '../UserBtn/UserBtn';

const UserBlock = () => {
	const [activePopup, setActivePopup] = React.useState(false);

	const userdata = false;
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
			{userdata ? (
				<>
					<UserBtn type='btn' onClick={() => setActivePopup(!activePopup)} />
					<UserPopup status={activePopup} />
				</>
			) : (
				<UserBtn type='link' href={'/login'} />
			)}
		</div>
	);
};

export default UserBlock;
