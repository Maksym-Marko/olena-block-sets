import { useBlockProps, InnerBlocks } from '@wordpress/block-editor'

export default function save({ attributes }) {
	const blockProps = useBlockProps.save()

	return <div
		{...blockProps}
		data-section-height={attributes.section_height}
		data-start-position={attributes.start_position}
	>
		<InnerBlocks.Content />
	</div>
}
