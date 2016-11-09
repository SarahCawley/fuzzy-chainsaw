import React from 'react';
import SearchResults from './SearchResults.jsx';

import image1 from './assets/image-1.jpeg';
import image2 from './assets/image-2.jpeg';
import image3 from './assets/image-3.jpeg';
import image4 from './assets/image-4.jpeg';

const mockSearchResults = {
  query: 'Applesauce',
  results: [{
    image: image1,
    url: '#/image-1',
    title: 'Result #1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta fuga repellat esse cumque praesentium ipsum tenetur deserunt ullam suscipit quas? Voluptatum deserunt, quos eligendi? Labore nihil aliquid dignissimos quidem dolores repudiandae totam, maiores, magnam repellat qui omnis quas veniam reprehenderit laboriosam velit voluptas sunt. Tempore dicta excepturi atque, facilis magnam.'
  }, {
    image: image2,
    url: '#/image-2',
    title: 'Result #2',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta fuga repellat esse cumque praesentium ipsum tenetur deserunt ullam suscipit quas? Voluptatum deserunt, quos eligendi? Labore nihil aliquid dignissimos quidem dolores repudiandae totam, maiores, magnam repellat qui omnis quas veniam reprehenderit laboriosam velit voluptas sunt. Tempore dicta excepturi atque, facilis magnam.'
  }, {
    image: image3,
    url: '#/image-3',
    title: 'Result #3',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta fuga repellat esse cumque praesentium ipsum tenetur deserunt ullam suscipit quas? Voluptatum deserunt, quos eligendi? Labore nihil aliquid dignissimos quidem dolores repudiandae totam, maiores, magnam repellat qui omnis quas veniam reprehenderit laboriosam velit voluptas sunt. Tempore dicta excepturi atque, facilis magnam.'
  }, {
    image: image4,
    url: '#/image-4',
    title: 'Result #4',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta fuga repellat esse cumque praesentium ipsum tenetur deserunt ullam suscipit quas? Voluptatum deserunt, quos eligendi? Labore nihil aliquid dignissimos quidem dolores repudiandae totam, maiores, magnam repellat qui omnis quas veniam reprehenderit laboriosam velit voluptas sunt. Tempore dicta excepturi atque, facilis magnam.'
  }]
};

export default [{
	name: "default",
	component: (
		<SearchResults results={mockSearchResults} />
	)
}];
