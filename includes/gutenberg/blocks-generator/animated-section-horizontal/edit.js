import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, PanelRow, __experimentalNumberControl as NumberControl, RadioControl } from '@wordpress/components';
import './editor.scss';

export default function edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps()

	return [
		<InspectorControls key="mx-settings">

			<PanelBody title={__('Section Options', 'olena')} initialOpen={false}>

				<PanelRow> 

					<RadioControl
						label={__('Start position of animation', 'olena')}
						help={__('eg. Center of a element and Top of the screen', 'olena')}
						selected={attributes.start_position}
						options={[
							{ label: __('Center Top', 'olena'), value: 'center top' },
							{ label: __('Top Top', 'olena'), value: 'top top' },
							{ label: __('Top 20%', 'olena'), value: 'top 20%' },
							{ label: __('Top Center', 'olena'), value: 'top center' },
							{ label: __('Top 70%', 'olena'), value: 'top 70%' }
						]}
						onChange={start_position => setAttributes({ start_position })}
					/>

				</PanelRow>

			</PanelBody>

		</InspectorControls>,
		<div
			{...blockProps}
			key="mx-main-content"
			data-extras={attributes.extras}
			data-start-position={attributes.start_position}
		>
			<div className="mx-animated-horizontal-slider">
				<InnerBlocks />
			</div>
		</div>
	];
}
