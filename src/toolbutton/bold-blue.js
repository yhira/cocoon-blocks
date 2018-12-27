const { Fragment } = wp.element;
const { __ } = wp.i18n;
const { registerFormatType, toggleFormat } = wp.richText;
const { RichTextShortcut, RichTextToolbarButton } = wp.editor;
const THEME_NAME = 'cocoon';
const FORMAT_TYPE_NAME = 'cocoon-blocks/bold-blue';

registerFormatType( FORMAT_TYPE_NAME, {
  title: __( '青色', THEME_NAME ),
  tagName: 'span',
  className: 'bold-blue',
  edit( { isActive, value, onChange } ) {
    const onToggle = () => onChange( toggleFormat( value, { type: FORMAT_TYPE_NAME } ) );

    return (
      <Fragment>
        <RichTextShortcut
          type='primary'
          character='e'
          onUse={ onToggle }
        />
        <RichTextToolbarButton
          title={ __( '青太字', THEME_NAME ) }
          icon='editor-bold'
          onClick={ onToggle }
          isActive={ isActive }
          shortcutType='primary'
          shortcutCharacter='e'
        />
      </Fragment>
    );
  },
} );