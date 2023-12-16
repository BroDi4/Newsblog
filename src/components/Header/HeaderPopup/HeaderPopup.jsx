import React from 'react';
import { Link } from 'react-router-dom';

import styles from './HeaderPopup.module.scss';

const HeaderPopup = () => {
	const links = [
		{ tag: 'Личный кабинет', link: '/user' },
		{ tag: 'Создать статью', link: '/news/create' },
	];

	const listToRender = (
		<>
			{links.map(obj => (
				<Link className={styles.link} to={obj.link}>
					{obj.tag}
				</Link>
			))}
			<button className={styles.link}>Выйти</button>
		</>
	);

	return (
		<div className={styles.root}>
			<div className={styles.list}>
				{false ? (
					listToRender
				) : (
					<>
						<Link className={styles.link}>Вход</Link>
						<Link className={styles.link}>Регистрация</Link>
					</>
				)}
			</div>
		</div>
	);
};

export default HeaderPopup;
