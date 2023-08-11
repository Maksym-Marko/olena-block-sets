import { useBlockProps, InnerBlocks } from '@wordpress/block-editor'

export default function save({ attributes }) {
	const blockProps = useBlockProps.save()

	return <div
		{...blockProps}
		data-extras={attributes.extras}
		data-start-position={attributes.start_position}
	>
		<div className="mx-animated-horizontal-slider">
			<InnerBlocks.Content />
		</div>
	</div>
}
