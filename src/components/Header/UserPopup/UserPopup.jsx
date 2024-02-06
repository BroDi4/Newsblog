import React from 'react';
import classNames from 'classnames/bind';

import styles from './UserPopup.module.scss';
import LinkButton from '../../UI/LinkButton/LinkButton';

const links = [
	{ tag: 'Личный кабинет', link: '/user' },
	{ tag: 'Создать статью', link: '/news/create' },
];

const UserPopup = ({ status }) => {
	const cn = classNames.bind(styles);

	return (
		<div className={cn('root', { active: status })}>
			<div className={styles.list}>
				{false ? (
					<>
						{links.map((obj, i) => (
							<LinkButton
								key={i}
								to={obj.link}
								type='link'
								className={styles.link}
							>
								{obj.tag}
							</LinkButton>
						))}
						<LinkButton type='button' className={styles.link}>
							Выйти
						</LinkButton>
					</>
				) : (
					<>
						<LinkButton type='link' to={'/login'} className={styles.link}>
							Вход
						</LinkButton>
						<LinkButton type='link' to={'/register'} className={styles.link}>
							Регистрация
						</LinkButton>
					</>
				)}
			</div>
		</div>
	);
};

export default UserPopup;
