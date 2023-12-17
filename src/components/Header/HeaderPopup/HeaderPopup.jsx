import React from 'react';
import { Link } from 'react-router-dom';

import styles from './HeaderPopup.module.scss';
import LinkButton from '../../UI/LinkButton/LinkButton';

const HeaderPopup = () => {
	const links = [
		{ tag: 'Личный кабинет', link: '/user' },
		{ tag: 'Создать статью', link: '/news/create' },
	];

	const listToRender = (
		<>
			{links.map((obj, i) => (
				<LinkButton key={i} to={obj.link} type='link' className={styles.link}>
					{obj.tag}
				</LinkButton>
			))}
			<LinkButton type='button' className={styles.link}>
				Выйти
			</LinkButton>
		</>
	);

	return (
		<div className={styles.root}>
			<div className={styles.list}>
				{false ? (
					listToRender
				) : (
					<>
						<LinkButton type='link' to={'/'} className={styles.link}>
							Вход
						</LinkButton>
						<LinkButton type='link' to={'/'} className={styles.link}>
							Регистрация
						</LinkButton>
					</>
				)}
			</div>
		</div>
	);
};

export default HeaderPopup;
