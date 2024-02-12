import React from 'react';

import styles from './ErrorMessageBlock.module.scss';

const ErorrMessageBlock = ({ msg }) => {
	return <div className={styles.root}>{msg}</div>;
};

export default ErorrMessageBlock;
