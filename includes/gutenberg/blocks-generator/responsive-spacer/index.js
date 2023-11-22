import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';
import './style.scss';
import Edit from './edit';
import save from './save';

registerBlockType(metadata.name, {
	icon: {
		src: <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"><path fill="#52E6A5" d="M97.6,74.3c-6.3-0.2-12.3,2.1-16.7,6.5c-4.4,4.4-6.7,10.4-6.5,16.7l5.3,142.6c0.3,8.9,5.9,16.8,14.2,20s17.8,1.3,24-5l37-37L281.6,345l-37,37c-6.3,6.3-8.3,15.8-5,24c3.2,8.3,11.1,13.9,20,14.2l142.6,5.3c6.2,0.3,12.3-2.1,16.7-6.5c4.4-4.4,6.7-10.4,6.5-16.7l-5.3-142.6c-0.3-8.9-5.9-16.8-14.2-20c-8.3-3.2-17.8-1.3-24,5l-37,37L218.2,154.8l37-37c6.3-6.3,8.3-15.8,5-24s-11.1-13.9-20-14.2C240.2,79.6,97.6,74.3,97.6,74.3z"/></svg>
	},
	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
});