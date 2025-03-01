import React from 'react';
import styles from './Heading.css';

const Heading = ({
	tagName,
	variant = 'default',
	level, //
	className = '',
	children
}) => {
	let Tag = tagName || 'h1';
	let delevel = level || 1;

	if (level !== undefined && tagName === undefined) {
		Tag	= 'h' + level;
		delevel = level
	} else if (level === undefined && tagName !== undefined) {
		Tag = tagName;
	}

	return (
		<Tag className={`heading heading--${variant} heading--h${delevel} ${className}`}>
			{children}
		</Tag>
	)
};

Heading.propTypes = {
	tagName: React.PropTypes.string,
	variant: React.PropTypes.string,
	level: React.PropTypes.string,
	className: React.PropTypes.string
};


export default Heading;
