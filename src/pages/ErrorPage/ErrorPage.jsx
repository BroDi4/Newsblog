import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { useRouteError } from 'react-router-dom';

import styles from './ErrorPage.module.scss';
import LinkButton from '../../components/UI/LinkButton/LinkButton';

const ErrorPage = () => {
	const error = useRouteError();
	console.log(error);

	return (
		<div className={styles.root}>
			<div className={styles.text}>
				<h2 className={styles.title}>Увы, вы ни туда нажали</h2>
				<p>Что-то пошло не так</p>
				<p>
					{error.statusText} {error.status}
				</p>
				<LinkButton type='link' to={'/'} className={styles.link}>
					Вернуться на главную
				</LinkButton>
			</div>
		</div>
	);
};

export default ErrorPage;
