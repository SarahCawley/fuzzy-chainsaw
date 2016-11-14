import React from 'react';
import styles from './Column.css';

export default ({
	className = '',
	size = 0,
	flex = false,
	children,
	gutter = true,
	push = 0,
	pull = 0
}) => {
	let flexClass, sizeClass, gutterClass, pushClass, pullClass;
	flexClass = (flex)? 'flex ' : ' ';
	sizeClass =  (size > 0)? 'column column-'+size+' ' : ' ';
	gutterClass = (gutter == true)? ' ' : 'no-gutter ';
	pushClass = (push > 0) ? 'push-'+push+' ': ' ';
	pullClass = (pull > 0) ? 'pull-'+pull+' ': ' ';

	if(flex) {
		return (			
			<div className={flexClass + sizeClass + gutterClass + pushClass + pullClass + className}>
				{children}
			</div>
		)			
	}else{
		return (			
			<div className={sizeClass + gutterClass + pushClass + pullClass + className}>
				{children}
			</div>
		)
	}
}
