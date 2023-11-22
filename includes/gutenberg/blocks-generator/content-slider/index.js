import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';
import './style.scss';
import edit from './edit';
import save from './save';

registerBlockType(metadata.name, {
	icon: {
		src: <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"><path fill="#52E6A5" d="M118.8,10.8c-16.3-10-36.8-10.4-53.4-1s-27,27-27,46.2v387.9c0,19.2,10.4,36.8,27,46.2s37.1,8.9,53.4-1l317.4-193.9c15.8-9.6,25.3-26.7,25.3-45.2s-9.6-35.5-25.3-45.2L118.8,10.8z"/></svg>
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
