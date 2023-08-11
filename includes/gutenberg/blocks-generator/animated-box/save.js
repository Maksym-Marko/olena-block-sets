import { useBlockProps, InnerBlocks } from '@wordpress/block-editor'

export default function save({ attributes }) {
	const blockProps = useBlockProps.save()

	return <div
		{...blockProps}
		data-animation-type={attributes.animation_type}
		data-extras={attributes.extras}
	>
		<InnerBlocks.Content />
	</div>
}
