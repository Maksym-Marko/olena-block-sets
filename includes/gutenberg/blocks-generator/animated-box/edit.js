import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, PanelRow, Button, RadioControl, __experimentalNumberControl as NumberControl } from '@wordpress/components';
import './editor.scss';

export default function edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps()

	return [
		<InspectorControls key="mx-settings">

			<PanelBody title={__('Box Position', 'olena')} initialOpen={true}>

				<PanelRow>
					<RadioControl
						label={__('Animation Type', 'olena')}
						help={__('Set Animation Type', 'olena')}
						selected={attributes.animation_type}
						options={[
							{ label: 'fadeInUp', value: 'fadeInUp' },
							{ label: 'fadeInLeft', value: 'fadeInLeft' },
							{ label: 'fadeInRight', value: 'fadeInRight' },
							{ label: 'zoomIn', value: 'zoomIn' }
						]}
						onChange={animation_type => setAttributes({ animation_type })}
					/>
				</PanelRow>

			</PanelBody>

		</InspectorControls>,
		<div
			key="mx-main-content"
			{...blockProps}
			data-animation-type={attributes.animation_type}
			data-extras={attributes.extras}
		>
			<InnerBlocks />
		</div>
	];
}
