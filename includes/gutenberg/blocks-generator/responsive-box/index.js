import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';
import './style.scss';
import edit from './edit';
import save from './save';

registerBlockType(metadata.name, {
	icon: {
		src: <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"><path fill="#52E6A5" d="M334.2,4.8h137.9c12.7,0,23,10.2,23,23v137.9c0,9.3-5.6,17.7-14.2,21.3c-8.6,3.5-18.5,1.6-25.1-5l-37.4-37.4l-83.3,83.3c-9,9-23.6,9-32.5,0L272,197.2c-9-9-9-23.6,0-32.5l83.3-83.3L317.9,44c-6.6-6.6-8.5-16.5-5-25.1S324.9,4.8,334.2,4.8z M165.6,495.1H27.7c-12.7,0-23-10.2-23-23V334.2c0-9.3,5.6-17.7,14.2-21.3s18.5-1.6,25.1,5l37.4,37.4l83.3-83.3c9-9,23.6-9,32.5,0l30.6,30.6c9,9,9,23.6,0,32.5l-83.3,83.3l37.4,37.4c6.6,6.6,8.5,16.5,5,25.1C183.2,489.4,174.8,495,165.6,495.1L165.6,495.1z"/></svg>
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
