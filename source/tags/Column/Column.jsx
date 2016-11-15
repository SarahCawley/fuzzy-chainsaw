import React from 'react';
import styles from './Column.css';

export default ({
	children,
	className = '',
	size = 0,
	gutter = 'on',
	padding = 'on'
}) => {
	return (			
		<div className={`column column--size--${size} column--gutters--${gutter} column--padding--${padding} ${className}`}>
			{children}
		</div>
	)
}
