import React from 'react';
import PageRoot from '../tags/PageRoot/PageRoot';
import Heading from '../tags/Heading/Heading';
import Wrapper from '../tags/Wrapper/Wrapper';
import ImageWithDescription from '../tags/ImageWithDescription/ImageWithDescription';
import { Media, Media_Figure, Media_Body } from '../tags/Media/Media';
import Rhythm from '../tags/Rhythm/Rhythm';

import randySavage from '../tags/Media/assets/randy-savage.jpg';

import food from './images/food.png';
import getActive from './images/getActive.png';
import leaderboard from './images/leaderboard.png';

var images = [
{image: food},
{image: getActive},
{image: leaderboard}
]

export default ({ locals }) => (
	<PageRoot title="Rockadoodle">
		<Wrapper>
			<Heading level='2'>Rockadoodle</Heading>
			for(var item in images){
				<Media align="middle">
					<Media_Figure>
						<img src={images[item].image} />
					</Media_Figure>

					<Media_Body>
						<Rhythm size="small">
							<Heading level="3">Randy Savage Buddy</Heading>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque facilis accusantium dolorum deserunt rem ex voluptas impedit doloribus facere, velit, possimus! Aliquid amet, corrupti cumque quae perferendis eos recusandae, nam non dicta velit rem enim vitae! Facere, aliquid inventore reiciendis.</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque facilis accusantium dolorum deserunt rem ex voluptas impedit doloribus facere, velit, possimus! Aliquid amet, corrupti cumque quae perferendis eos recusandae, nam non dicta velit rem enim vitae! Facere, aliquid inventore reiciendis.</p>
						</Rhythm>
					</Media_Body>
				</Media>
			}
		</Wrapper>
		<Heading level='1'>test</Heading>
	</PageRoot>
)