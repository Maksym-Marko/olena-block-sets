import { useBlockProps, InnerBlocks } from '@wordpress/block-editor'

export default function save({ attributes }) {
	const blockProps = useBlockProps.save()

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

	};

	return <div
		{...blockProps}
		style={style()}
		data-orientation={attributes.orientation}
		data-position-left={attributes.position_left}
		data-position-top={attributes.position_top}
		data-position-right={attributes.position_right}
		data-position-bottom={attributes.position_bottom}
	>
		<InnerBlocks.Content />
	</div>
}
