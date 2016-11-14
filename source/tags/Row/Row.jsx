import React from 'react';
import styles from './Row.css';

export default ({
	className = '',
	flex = "",
	children,
	outerAlign = "center",
	innerAlign = ""
}) => {
	let alignmentClasses;
	let flexClass;

	innerAlign = (innerAlign.length)? ' align-chlidren-'+innerAlign : '';
	flexClass = 'flex-'+flex+' ';
	alignmentClasses = outerAlign + innerAlign + ' ';

	if(flex){
		return (
			<div className={"row "+ alignmentClasses + flexClass + className} data-flex-type={`${flex}`}>
				{children}
			</div>
		)		
	}else {
		return (
			<div className={"row "+ alignmentClasses + " " + className}>
				{children}
			</div>
		)		
	}
};
