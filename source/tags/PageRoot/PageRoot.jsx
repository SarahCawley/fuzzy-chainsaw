import React from 'react';
import styles from './PageRoot.css';

import IconSet from '../IconSet/IconSet';

export const PageRoot_Wrapper = ({ children }) => (
	<html>
		{children}
	</html>
);

export const PageRoot_Head = ({ title, children }) => (
	<head>
		<meta charset="utf-8" />
		<title>{title}</title>
		<link rel="stylesheet" href="/assets/bundle.css" />
		{children}
	</head>
);

export const PageRoot_Body = ({ className, children }) => (
	<body className={className}>
		<IconSet />
		{children}
		<script src="/assets/bundle.js" />
	</body>
);

export const PageRoot = ({ title, bodyClass = "", children }) => (
	<PageRoot_Wrapper>
		<PageRoot_Head title={title} />
		<PageRoot_Body className={bodyClass}>{children}</PageRoot_Body>
	</PageRoot_Wrapper>
);


export default PageRoot;
