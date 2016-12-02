import React from 'react';
import styles from './ImageWithDescription.css';


const ImageWithDescription = ({
	className = '',
	variant = 'default',
	image,
	children,
	...attrs
}) => (
	<div className={`image-with-description image-with-description--${variant} ${className}`} {...attrs}>
		<img src={image}/>
		{children}
	</div>
);

ImageWithDescription.propTypes = {
	className: React.PropTypes.string
};


export default ImageWithDescription;
