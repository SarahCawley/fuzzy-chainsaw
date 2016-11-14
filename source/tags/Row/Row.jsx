import React from 'react';
import styles from './Row.css';

export default ({
	className = '',
	children,
	size = "12",
	align = "center",
	childPosition = ""
}) => {
	let alignClass, sizeClass, positionClass;
	align = (size.toLowerCase() == 'reset')? ' ' : align + ' ';
	size = 'row-'+size+' ';
	childPosition = (childPosition.length)? ' position-children-'+childPosition+' ' : ' ';

	return (
		<div className={"row "+ size  + align + childPosition + className}>
			{children}
		</div>
	)
};
