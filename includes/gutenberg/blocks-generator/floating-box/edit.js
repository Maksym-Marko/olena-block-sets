import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, PanelRow, Button, RadioControl, __experimentalNumberControl as NumberControl } from '@wordpress/components';
import './editor.scss';

export default function edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps()

	// style
	const style = () => {

		let styleObj = {}

		// Left-Top
		if( attributes.orientation === '1' ) {
			styleObj.left = attributes.position_left + '%'
			styleObj.top = attributes.position_top + '%'
		}

		// Top-Right
		if( attributes.orientation === '2' ) {
			styleObj.right = attributes.position_right + '%'
			styleObj.top = attributes.position_top + '%'
		}

		// Bottom-Right
		if( attributes.orientation === '3' ) {
			styleObj.right = attributes.position_right + '%'
			styleObj.bottom = attributes.position_bottom + '%'
		}

		// Bottom-Left
		if( attributes.orientation === '4' ) {
			styleObj.left = attributes.position_left + '%'
			styleObj.bottom = attributes.position_bottom + '%'
		}

		return styleObj

	}

	return [
		<InspectorControls key="mx-settings">

			<PanelBody title={__('Box Position', 'olena')} initialOpen={true}>

				<PanelRow>
					<RadioControl
						label={__('Box Orientation', 'olena')}
						help={__('Set Box Orientation', 'olena')}
						selected={attributes.orientation}
						options={[
							{ label: 'Left-Top', value: '1' },
							{ label: 'Top-Right', value: '2' },
							{ label: 'Bottom-Right', value: '3' },
							{ label: 'Left-Bottom', value: '4' }
						]}
						onChange={orientation => setAttributes({ orientation })}
					/>
				</PanelRow>

				{/* Left-Top */}
				{attributes.orientation === '1' &&
					<PanelRow>

						<div>
							<NumberControl
								label={__('Left (%)', 'olena')}
								value={attributes.position_left}
								min="-50"
								max="150"
								onChange={position_left => setAttributes({
									position_left
								})}
							/>
						</div>

						<div>
							<NumberControl
								label={__('Top (%)', 'olena')}
								value={attributes.position_top}
								min="-50"
								max="150"
								onChange={position_top => setAttributes({
									position_top
								})}
							/>
						</div>

					</PanelRow>
				}

				{/* Top-Right */}
				{attributes.orientation === '2' &&
					<PanelRow>

						<div>
							<NumberControl
								label={__('Top (%)', 'olena')}
								value={attributes.position_top}
								min="-50"
								max="150"
								onChange={position_top => setAttributes({
									position_top
								})}
							/>
						</div>

						<div>
							<NumberControl
								label={__('Right (%)', 'olena')}
								value={attributes.position_right}
								min="-50"
								max="150"
								onChange={position_right => setAttributes({
									position_right
								})}
							/>
						</div>

					</PanelRow>
				}

				{/* Bottom-Right */}
				{attributes.orientation === '3' &&
					<PanelRow>

						<div>
							<NumberControl
								label={__('Bottom (%)', 'olena')}
								value={attributes.position_bottom}
								min="-50"
								max="150"
								onChange={position_bottom => setAttributes({
									position_bottom
								})}
							/>
						</div>

						<div>
							<NumberControl
								label={__('Right (%)', 'olena')}
								value={attributes.position_right}
								min="-50"
								max="150"
								onChange={position_right => setAttributes({
									position_right
								})}
							/>
						</div>

					</PanelRow>
				}

				{/* Left-Bottom */}
				{attributes.orientation === '4' &&
					<PanelRow>

						<div>
							<NumberControl
								label={__('Left (%)', 'olena')}
								value={attributes.position_left}
								min="-50"
								max="150"
								onChange={position_left => setAttributes({
									position_left
								})}
							/>
						</div>

						<div>
							<NumberControl
								label={__('Bottom (%)', 'olena')}
								value={attributes.position_bottom}
								min="-50"
								max="150"
								onChange={position_bottom => setAttributes({
									position_bottom
								})}
							/>
						</div>

					</PanelRow>
				}

			</PanelBody>

		</InspectorControls>,
		<div
			key="mx-main-content"
			{...blockProps}
			style={style()}
			data-orientation={attributes.orientation}
			data-position-left={attributes.position_left}
			data-position-top={attributes.position_top}
			data-position-right={attributes.position_right}
			data-position-bottom={attributes.position_bottom}
		>
			<InnerBlocks />
		</div>
	];
}
