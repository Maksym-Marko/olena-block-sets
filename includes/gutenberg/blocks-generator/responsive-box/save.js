import { useBlockProps, InnerBlocks } from '@wordpress/block-editor'

export default function save({ attributes }) {
	const blockProps = useBlockProps.save()

	return <div
		data-breakpoint={attributes.breakpoint}
		className={'mx-responsive-box ' + attributes.unique_class}
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

			<InnerBlocks.Content />

		</div>
	</div>
}
