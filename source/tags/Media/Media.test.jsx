import React from 'react';
import randySavage from './assets/randy-savage.jpg';
import { Media, Media_Figure, Media_Body } from './Media.jsx';

export default [{
	name: "media to the left",
	component: (
		<Media>
			<Media_Figure>
				<img src={randySavage} />
			</Media_Figure>

			<Media_Body>
				hello world
			</Media_Body>
		</Media>
	),
	test(t, component) {
		t.equal(component.is('div'), true, 'tag name');
		t.equal(component.is('.media'), true, 'tag class');
		t.equal(component.text(), '<Media_Figure /><Media_Body />', 'text');
		t.end();
	}
}, {
	name: "media to the right",
	component: (
		<Media>
			<Media_Body>
				hello world
			</Media_Body>

			<Media_Figure>
				<img src={randySavage} />
			</Media_Figure>
		</Media>
	),
	test(t, component) {
		t.equal(component.is('div'), true, 'tag name');
		t.equal(component.is('.media'), true, 'tag class');
		t.equal(component.text(), '<Media_Body /><Media_Figure />', 'text');
		t.end();
	}
}, {
	name: "media align middle",
	component: (
		<Media>
			<Media_Figure>
				<img src={randySavage} />
			</Media_Figure>

			<Media_Body>
				hello world
			</Media_Body>
		</Media>
	)
}, {
	name: "media align bottom",
	component: (
		<Media>
			<Media_Figure>
				<img src={randySavage} />
			</Media_Figure>

			<Media_Body>
				hello world
			</Media_Body>
		</Media>
	)
}, {
	name: "media nested",
	component: (
		<Media>
			<Media_Figure>
				<img src={randySavage} />
			</Media_Figure>

			<Media_Body>
				<Media>
					<Media_Figure>
						<img src={randySavage} />
					</Media_Figure>

					<Media_Body>
						hello world
					</Media_Body>
				</Media>

				<Media>
					<Media_Figure>
						<img src={randySavage} />
					</Media_Figure>

					<Media_Body>
						hello world
					</Media_Body>
				</Media>
			</Media_Body>
		</Media>
	)
}];
