import React from 'react';
import styles from './Row.css';

export default ({
	children,
	className = '',
	size = '',
	align = 'center'
}) => {
	//If we use "reset" for row's size, we must also kill row's alignment
	if(size.toLowerCase() == 'reset'){
		align = '';
	}

	return (
		<div className={`row row--size--${size} row--alignment--${align} ${className}`}>
			{children}
		</div>
	)
};
