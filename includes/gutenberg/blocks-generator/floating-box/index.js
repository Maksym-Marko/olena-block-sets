import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';
import './style.scss';
import edit from './edit';
import save from './save';

registerBlockType(metadata.name, {
	icon: {
		src: <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"><path fill="#52E6A5" d="M4.4,311.3c0,61,49.5,110.5,110.5,110.5h282.4c54.2,0,98.2-44,98.2-98.2c0-47.5-33.8-87.2-78.6-96.2c3.1-8.2,4.9-17.2,4.9-26.5c0-40.7-33-73.7-73.7-73.7c-15.1,0-29.2,4.6-40.9,12.4C286,102.8,246.3,78,200.8,78C133,78,78,133,78,200.8c0,2.1,0.1,4.1,0.2,6.2C35.2,222.1,4.4,263.1,4.4,311.3z"/></svg>
	},
	/**
	 * @see ./edit.js
	 */
	edit,

	/**
	 * @see ./save.js
	 */
	save,
});
