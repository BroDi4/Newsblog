import React from 'react';

import styles from './Message.module.scss';

const Message = ({ msg }) => {
	return <span className={styles.root}>{msg}</span>;
};

export default Message;
