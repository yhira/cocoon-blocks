const { Fragment } = wp.element;
const { __ } = wp.i18n;
const { registerFormatType, toggleFormat } = wp.richText;
const { RichTextShortcut, RichTextToolbarButton } = wp.editor;
const THEME_NAME = 'cocoon';
const FORMAT_TYPE_NAME = 'cocoon-blocks/strike';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

registerFormatType( FORMAT_TYPE_NAME, {
  title: __( '打ち消し線', THEME_NAME ),
  tagName: 'span',
  className: 'strike',
  edit( { isActive, value, onChange } ) {
    const onToggle = () => onChange( toggleFormat( value, { type: FORMAT_TYPE_NAME } ) );

    return (
      <Fragment>
        <RichTextShortcut
          type='primary'
          character=''
          onUse={ onToggle }
        />
        <RichTextToolbarButton
          title={ __( '打ち消し線', THEME_NAME ) }
          icon={ <FontAwesomeIcon icon="strikethrough" /> }
          onClick={ onToggle }
          isActive={ isActive }
          shortcutType='primary'
          shortcutCharacter=''
        />
      </Fragment>
    );
  },
} );