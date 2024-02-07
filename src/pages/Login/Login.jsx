import React from 'react';
import classNames from 'classnames/bind';

import styles from './Login.module.scss';
import AuthFormLayout from '../../components/UI/AuthFormLayout/AuthFormLayout.jsx';
import LoginForm from '../../components/forms/LoginForm/LoginForm.jsx';

const cn = classNames.bind(styles);

const selectVariants = [
	{ tag: 'Войти', type: 'login' },
	{ tag: 'Зарегистрироваться', type: 'register' },
];

const Login = () => {
	const [select, setSelect] = React.useState('login');
	return (
		<AuthFormLayout>
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
			<LoginForm />
		</AuthFormLayout>
	);
};

export default Login;
