import { useBlockProps, InnerBlocks } from '@wordpress/block-editor'

export default function save({ attributes }) {
	const blockProps = useBlockProps.save()

	return <div
		{...blockProps}
		data-section-height={attributes.section_height}
		data-start-position={attributes.start_position}
		data-section-type={attributes.section_type}
		data-section-extras={attributes.extras}
	>
		<div className="mx-animated-horizontal-slider">
			<InnerBlocks.Content />
		</div>
	</div>
}
