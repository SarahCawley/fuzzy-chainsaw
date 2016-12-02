import React from 'react';
import ImageWithDescription from './ImageWithDescription.jsx';

export default [{
	name: "default",
	component: (
		<ImageWithDescription>
			Hello World
		</ImageWithDescription>
	),
	test(t, component) {
		t.equal(component.is('div'), true, 'tag name');
		t.equal(component.is('.image-with-description'), true, 'tag class');
		t.equal(component.text(), 'Hello World', 'text');
		t.end();
	}
}];
