import React from 'react';
import styles from './Row.css';

export default ({
	children,
	className = '',
	size = '',
	align = 'center'
}) => {
	return (
		<div className={`row row--size--${size} row--alignment--${align} ${className}`}>
			{children}
		</div>
	)
};
