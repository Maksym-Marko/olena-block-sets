import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';
import './style.scss';
import edit from './edit';
import save from './save';

registerBlockType(metadata.name, {
	icon: {
		src: <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"><path fill="#52E6A5" d="M2.6,94.3C2.6,59.9,30.4,32,64.5,32H436c34.2,0,61.9,27.9,61.9,62.3v311.3c0,34.3-27.8,62.3-61.9,62.3H64.5c-34.2,0-61.9-27.9-61.9-62.3V94.3z M315.9,197.9c-4.4-6.4-11.5-10.2-19.2-10.2s-14.9,3.8-19.2,10.2L193.4,322l-25.6-32.2c-4.5-5.5-11.1-8.8-18.1-8.8c-7,0-13.7,3.2-18.1,8.8l-61.9,77.8c-5.6,7-6.7,16.6-2.8,24.7s12,13.2,20.9,13.2h92.9h31h201.2c8.6,0,16.5-4.8,20.5-12.5c4-7.7,3.5-16.9-1.4-24C431.9,369.1,315.9,197.9,315.9,197.9z M110.9,187.7c25.6,0,46.4-20.9,46.4-46.7s-20.8-46.7-46.4-46.7S64.5,115.2,64.5,141S85.3,187.7,110.9,187.7z"/></svg>
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
