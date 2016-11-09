import React from 'react';
import styles from './Media.css';
import Rhythm from '../Rhythm/Rhythm';

export const Media_Figure = ({
	tagName = 'div',
	className = '',
	children
}) => {
	const Tag = tagName;
	return (
		<Tag className={`media__figure ${className}`}>
			{children}
		</Tag>
	);
};

export const Media_Body = ({
	tagName = 'div',
	className = '',
	children
}) => {
	const Tag = tagName;
	return (
		<Tag className={`media__body ${className}`}>
			<Rhythm>
				{children}
			</Rhythm>
		</Tag>
	);
};

export const Media = ({
	tagName = 'div',
	className = '',
	align = 'top',
	children
}) => {
	const Tag = tagName;
	return (
		<Tag className={`media media--${align} ${className}`}>
			{children}
		</Tag>
	);
}

export default Media;
