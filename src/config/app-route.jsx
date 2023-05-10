import React from 'react';
import App from './../app.jsx';
import Gallery from './../pages/gallery/gallery.js';

const AppRoute = [
  {
    path: '*', 
    element: <App />,
    children: [
    	{
				path: '', 
				element: <Gallery />
		},	
		{
			path: 'gallery', 
			element: <Gallery />
		},
		]
  }
];


export default AppRoute;