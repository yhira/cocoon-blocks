const { Fragment } = wp.element;
const { __ } = wp.i18n;
const { registerFormatType, toggleFormat } = wp.richText;
const { RichTextShortcut, RichTextToolbarButton } = wp.editor;
const { ToolbarButtonContainer } = wp.components;
//import { ToolbarButtonContainer } from '@wordpress/components';

registerFormatType( 'my-plugin/myspan', {
  title: __( 'My Span' ),
  tagName: 'span',
  className: 'my-span',
  edit( { isActive, value, onChange } ) {
    const onToggle = () => onChange( toggleFormat( value, { type: 'my-plugin/myspan' } ) );

    return (
      <Fragment>
      <ToolbarButtonContainer
        containerClassName="aaaaaaa"
        icon='menu'
        title="bbbbbbbbbbb"
      >
        <RichTextShortcut
          type="primary"
          character="m"
          onUse={ onToggle }
        />
        <RichTextToolbarButton
          title={ __( 'Span' ) }
          icon="megaphone"
          onClick={ onToggle }
          isActive={ isActive }
          shortcutType="primary"
          shortcutCharacter="m"
        />
      </ToolbarButtonContainer>
      </Fragment>
    );
  },
} );