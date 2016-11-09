import React from 'react';

import Heading from '../../tags/Heading/Heading';
import {
	PageRoot_Wrapper,
	PageRoot_Head,
	PageRoot_Body
} from '../../tags/PageRoot/PageRoot';

import Nav from './Nav';

export default ({
	title,
	locals,
	children
}) => (
	<PageRoot_Wrapper>
		<PageRoot_Head title={title}>
			<link rel="stylesheet" href="/assets/styleguide.css" />
		</PageRoot_Head>
		<PageRoot_Body className="page-styleguide">
			<Nav locals={locals} />
			<div className="sg-styleguide" id="content">
				{children}
			</div>
			<script src="/assets/styleguide.js"></script>
		</PageRoot_Body>
	</PageRoot_Wrapper>
);
