import React from 'react';
import classNames from 'classnames/bind';

import styles from './UserPopup.module.scss';
import LinkButton from '../../UI/LinkButton/LinkButton';
import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/slices/authSlice';

const links = [
	{ tag: 'Личный кабинет', link: '/user' },
	{ tag: 'Создать статью', link: '/news/create' },
];

const cn = classNames.bind(styles);

const UserPopup = ({ status }) => {
	const dispatch = useDispatch();

	const onClickLogout = () => {
		localStorage.removeItem('token');
		dispatch(logout());
	};

	return (
		<div className={cn('root', { active: status })}>
			<div className={styles.list}>
				{links.map((obj, i) => (
					<LinkButton key={i} to={obj.link} type='link' className={styles.link}>
						{obj.tag}
					</LinkButton>
				))}
				<LinkButton
					onClick={onClickLogout}
					type='button'
					className={styles.link}
				>
					Выйти
				</LinkButton>
			</div>
		</div>
	);
};

export default UserPopup;
