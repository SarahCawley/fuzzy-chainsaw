import React from 'react';
import styles from './Column.css';

export default ({
	className = '',
	size = 0,
	children,
	gutter = true,
	push = 0,
	pull = 0
}) => {
	let columnClasses;

	size =  (size > 0)? 'column column-'+size: '';
	gutter = (gutter == true)? '' : 'no-gutter';
	push = (push > 0) ? 'push-'+push : '';
	pull = (pull > 0) ? 'pull-'+pull : '';

	//removes deadspace
	columnClasses = size + ' ' + gutter + ' ' + push + ' ' + pull + ' ' + className;
	columnClasses = columnClasses.replace(/  /g, ' ');
	return (			
		<div className={columnClasses}>
			{children}
		</div>
	)
}
