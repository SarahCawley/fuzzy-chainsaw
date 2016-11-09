import React from 'react';
import styles from './SearchResults.css';

import Heading from '../../tags/Heading/Heading';
import Rhythm from '../../tags/Rhythm/Rhythm';
import { Media, Media_Figure, Media_Body} from '../../tags/Media/Media';

export default ({
	className = '',
	results = {},
	children
}) => (
	<div className={"search-results " + className}>
		<Rhythm>
			<Heading>{results.query}</Heading>
			<Rhythm>
			{
				results.results.map(result => {
					return (
						<Media>
							<Media_Figure>
								<img src={result.image} alt={result.title} />
							</Media_Figure>

							<Media_Body>
								<Heading>{result.title}</Heading>
								<p>{result.content}</p>
							</Media_Body>
						</Media>
					)
				})
			}
			</Rhythm>
		</Rhythm>
	</div>
)
