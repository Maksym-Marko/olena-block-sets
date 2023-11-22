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
					label={__('Section Type', 'olena')}
					selected={attributes.section_type}
					options={[
						{ label: 'Vertical', value: 'vertical' },
						{ label: 'Horizontal', value: 'horizontal' }
					]}
					onChange={section_type => setAttributes({ section_type })}
				/>

				</PanelRow>

				{ attributes.section_type === 'vertical' && (
					<>
						<hr />

						<PanelRow>

							<NumberControl
								label={__('Section Height', 'olena')}
								value={attributes.section_height}
								min="1000"
								onChange={section_height => setAttributes({ section_height })}
							/>

						</PanelRow>
					</>					
				) }				

				<hr />

				<PanelRow>

					<RadioControl
						label={__('Start position of animation', 'olena')}
						help={__('eg. Center of a element and Top of the screen', 'olena')}
						selected={attributes.start_position}
						options={[
							{ label: 'Center Top', value: 'center top' },
							{ label: 'Top Top', value: 'top top' },
							{ label: 'Top 20%', value: 'top 20%' },
							{ label: 'Top Center', value: 'top center' },
							{ label: 'Top 70%', value: 'top 70%' }
						]}
						onChange={start_position => setAttributes({ start_position })}
					/>

				</PanelRow>

			</PanelBody>

		</InspectorControls>,
		<div
			{...blockProps}
			key="mx-main-content"
			data-section-height={attributes.section_height}
			data-start-position={attributes.start_position}
			data-section-type={attributes.section_type}
			data-section-extras={attributes.extras}
		>
			<div className="mx-animated-horizontal-slider">
				<InnerBlocks />
			</div>
		</div>
	];
}
