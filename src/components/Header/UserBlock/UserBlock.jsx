import React from 'react';

import styles from './UserBlock.module.scss';
import UserPopup from '../UserPopup/UserPopup';
import UserBtn from '../UserBtn/UserBtn';
import { useSelector } from 'react-redux';

const UserBlock = () => {
	const [activePopup, setActivePopup] = React.useState(false);

	const userdata = useSelector(state => state.auth.userdata);
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
			<UserBtn
				userdata={userdata}
				onClick={() => setActivePopup(!activePopup)}
				href='/login'
			/>
			{userdata && <UserPopup status={activePopup} />}
		</div>
	);
};

export default UserBlock;
