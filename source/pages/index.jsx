import React from 'react';

import PageRoot from '../tags/PageRoot/PageRoot';
import Heading from '../tags/Heading/Heading';
import Rhythm from '../tags/Rhythm/Rhythm';
import Wrapper from '../tags/Wrapper/Wrapper';
import {
  getTagsIndexData,
  getComponentsIndexData,
  getPagesIndexData,
  Index
} from '../styleguide/components/Index';

export default ({ locals }) => (
	<PageRoot title="Rockadoodle!!!">
		<Wrapper>
			<Rhythm size="large">
				<Heading level="1">Rockadoodle</Heading>

        <Rhythm>
          <Heading level="2">Tags</Heading>
          <Index items={getTagsIndexData(locals)} className="rhythm--small" />
        </Rhythm>

        <Rhythm>
          <Heading level="2">Components</Heading>
          <Index items={getComponentsIndexData(locals)} className="rhythm--small" />
        </Rhythm>

        <Rhythm>
          <Heading level="2">Pages</Heading>
          <Index items={getPagesIndexData(locals)} className="rhythm--small" />
        </Rhythm>
			</Rhythm>
		</Wrapper>
	</PageRoot>
)
