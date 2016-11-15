import React from 'react';
import styles from './Wrapper.css';

export default ({
	className = '',
	size = '',
	align = 'center',
	children
}) => {
	return (
		<div className={`wrapper wrapper--size--${size} wrapper--alignment--${align} ${className}`}>
			{children}
		</div>
	)
};
