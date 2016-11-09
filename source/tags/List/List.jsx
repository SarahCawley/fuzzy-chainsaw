import React from 'react';
import styles from './List.css';

const List_Item = ({
	className = '',
	children
}) => (
	<li className={`list__item ${className}`}>{children}</li>
);

const List = ({
	className = '',
	type = 'unordered',
	children
}) => {
	const Tag = type === 'ordered' ? 'ol' : 'ul';

	return (
		<Tag className={`list list--${type} ${className}`}>
			{children}
		</Tag>
	);
}

export default List;
export {
	List,
	List_Item
}
