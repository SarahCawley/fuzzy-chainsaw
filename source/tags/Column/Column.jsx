import React from 'react';
import styles from './Column.css';

export default ({
	children,
	className = '',
	size = 0,
	gutter = 'on'
}) => {
	return (			
		<div className={`column column--size--${size} column--gutters--${gutter} ${className}`}>
			{children}
		</div>
	)
}
