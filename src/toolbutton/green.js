const { Fragment } = wp.element;
const { __ } = wp.i18n;
const { registerFormatType, toggleFormat } = wp.richText;
const { RichTextShortcut, RichTextToolbarButton } = wp.editor;
const THEME_NAME = 'cocoon';
const FORMAT_TYPE_NAME = 'cocoon-blocks/green';

registerFormatType( FORMAT_TYPE_NAME, {
  title: __( '緑色', THEME_NAME ),
  tagName: 'span',
  className: 'green',
  edit( { isActive, value, onChange } ) {
    const onToggle = () => onChange( toggleFormat( value, { type: FORMAT_TYPE_NAME } ) );

    return (
      <Fragment>
        <RichTextShortcut
          type='primary'
          character='g'
          onUse={ onToggle }
        />
        <RichTextToolbarButton
          title={ __( '緑字', THEME_NAME ) }
          icon='editor-textcolor'
          onClick={ onToggle }
          isActive={ isActive }
          shortcutType='primary'
          shortcutCharacter='g'
        />
      </Fragment>
    );
  },
} );