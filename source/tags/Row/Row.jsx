import React from 'react';
import styles from './Row.css';

export default ({
	className = '',
	children,
	size = "12",
	align = "center",
	childPosition = ""
}) => {
	let rowClasses;

	align = (size.toLowerCase() == 'reset')? '' : align;
	size = 'row-'+size;
	childPosition = (childPosition.length)? ' position-children-'+childPosition : '';

	//removes deadspace
	rowClasses = 'row '+ size + ' ' + align + ' ' + childPosition + ' ' + className;
	rowClasses = rowClasses.replace(/  /g, ' ');

	return (
		<div className={rowClasses}>
			{children}
		</div>
	)
};
