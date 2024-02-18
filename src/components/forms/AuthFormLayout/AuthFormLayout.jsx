import React from 'react';
import classNames from 'classnames/bind';

import styles from './AuthFormLayout.module.scss';

import LoginForm from '../LoginForm/LoginForm';
import RegisterForm from '../RegisterForm/RegisterForm';

const cn = classNames.bind(styles);

const selectVariants = [
	{ tag: 'Войти', type: 'login' },
	{ tag: 'Зарегистрироваться', type: 'register' },
];

const AuthFormLayout = () => {
	const [select, setSelect] = React.useState('login');

	return (
		<div className={styles.root}>
			<div className={styles.form}>
				<div className={styles.select}>
					{selectVariants.map(obj => (
						<button
							key={obj.type}
							onClick={() => setSelect(obj.type)}
							className={cn('selectItem', { active: select === obj.type })}
						>
							{obj.tag}
						</button>
					))}
				</div>

				{select === 'login' && <LoginForm />}
				{select === 'register' && <RegisterForm />}
			</div>
		</div>
	);
};

export default AuthFormLayout;
