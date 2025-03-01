import React from 'react';
import RichText from './RichText.jsx';

export default [{
	name: "default",
	component: (
		<RichText>
			<h1>Heading 1</h1>
			<h2>Heading 2</h2>
			<h3>Heading 3</h3>
			<h4>Heading 4</h4>
			<h5>Heading 5</h5>
			<h6>Heading 6</h6>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In culpa vitae atque nesciunt error cum numquam sit facere. Quidem aut quibusdam consequuntur dolore sed perspiciatis exercitationem hic a eligendi alias autem sunt itaque ea fugit voluptatem maiores, eaque corporis numquam debitis. Obcaecati omnis non libero architecto deleniti autem adipisci alias.</p>
			<ul>
				<li>apple</li>
				<li>grape</li>
				<li>banana</li>
			</ul>
			<ol>
				<li>Brad</li>
				<li>Anna</li>
				<li>Kim</li>
			</ol>
			<button>This button</button>
			<a href="#/">This Link</a>
		</RichText>
	),
	test(t, component) {
		t.equal(component.is('div'), true, 'tag name');
		t.equal(component.is('.rich-text'), true, 'tag class');
		t.end();
	}
}];
