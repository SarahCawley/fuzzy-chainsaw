import React from 'react';
import styles from './Column.css';

export default ({
	className = '',
	size = 0,
	children,
	gutter = 'on'
}) => {
	return (			
		<div className={`column column--size--${size} column--gutters--${gutter} ${className}`}>
			{children}
		</div>
	)
}
