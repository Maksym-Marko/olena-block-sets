import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody, PanelRow, RadioControl
} from '@wordpress/components';
import { useEffect } from '@wordpress/element';
import './editor.scss';

export default function edit({ attributes, setAttributes }) {

	const blockProps = useBlockProps()

	const makeUniqueClass = (length) => {
		let result = '';
		const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		const charactersLength = characters.length;
		let counter = 0;
		while (counter < length) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
			counter += 1;
		}
		return result;
	}

	useEffect(() => {
		setAttributes({
			unique_class: 'mx-responsive-box-' + makeUniqueClass(12)
		})
	}, [])

	return [
		<InspectorControls key="mx-settings">

			<PanelBody title={__('Breakpoint', 'olena')} initialOpen={true}>

				<PanelRow>

					<RadioControl
						label={__('Pick up devices', 'olena')}
						help={__('This element will be shown on next devices:', 'olena')}
						selected={attributes.breakpoint}
						options={[
							{ label: __('All', 'olena'), value: 'all' },
							{ label: __('Desktop', 'olena'), value: 'desktop' },
							{ label: __('Desktop-Tablets', 'olena'), value: 'desktop-tablets' },
							{ label: __('Tablets', 'olena'), value: 'tablets' },
							{ label: __('Tablets-Mobile', 'olena'), value: 'tablets-mobile' },
							{ label: __('Mobile', 'olena'), value: 'mobile' }
						]}
						onChange={breakpoint => setAttributes({ breakpoint })}
					/>

				</PanelRow>

			</PanelBody>

		</InspectorControls>,
		<div
			key="mx-content"
			className={'mx-responsive-box ' + attributes.unique_class}
			data-breakpoint={attributes.breakpoint}
		>
			<div
				{...blockProps}
			>
				<style>

					{/* Display only on Desktops */}
					{
						attributes.breakpoint == 'desktop' &&
						`@media (max-width: 991.5px) {
						.mx-responsive-box.${attributes.unique_class} {
							display: none !important;
						}
						.editor-styles-wrapper .mx-responsive-box.${attributes.unique_class} {
							display: block !important;
							opacity: 0.5;
						}
					}
					`
					}

					{/* Display on Desktops and Tablets */}
					{
						attributes.breakpoint == 'desktop-tablets' &&
						`@media (max-width: 767.5px) {
							.mx-responsive-box.${attributes.unique_class} {
								display: none !important;
							}
							.editor-styles-wrapper .mx-responsive-box.${attributes.unique_class} {
								display: block !important;
								opacity: 0.5;
							}
						}						
					`
					}

					{/* Display only on Tablets */}
					{
						attributes.breakpoint == 'tablets' &&
						`@media (max-width: 767.5px) {
						.mx-responsive-box.${attributes.unique_class} {
							display: none !important;
						}
						.editor-styles-wrapper .mx-responsive-box.${attributes.unique_class} {
							display: block !important;
							opacity: 0.5;
						}
					}
					@media (min-width: 991.5px) {
						.mx-responsive-box.${attributes.unique_class} {
							display: none !important;
						}
						.editor-styles-wrapper .mx-responsive-box.${attributes.unique_class} {
							display: block !important;
							opacity: 0.5;
						}
					}
					`
					}

					{/* Display on Tablets and Mobile */}
					{
						attributes.breakpoint == 'tablets-mobile' &&
						`@media (min-width: 991.5px) {
						.mx-responsive-box.${attributes.unique_class} {
							display: none !important;
						}
						.editor-styles-wrapper .mx-responsive-box.${attributes.unique_class} {
							display: block !important;
							opacity: 0.5;
						}
					}
					`
					}
					
					{/* Display only on Mobile */}
					{
						attributes.breakpoint == 'mobile' &&
						`@media (min-width: 767.5px) {
						.mx-responsive-box.${attributes.unique_class} {
							display: none !important;
						}
						.editor-styles-wrapper .mx-responsive-box.${attributes.unique_class} {
							display: block !important;
							opacity: 0.5;
						}
					}
					`
					}

				</style>

				<InnerBlocks />

			</div>

		</div>
	];
}
