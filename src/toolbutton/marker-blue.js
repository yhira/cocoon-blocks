const { Fragment } = wp.element;
const { __ } = wp.i18n;
const { registerFormatType, toggleFormat } = wp.richText;
const { RichTextShortcut, RichTextToolbarButton } = wp.editor;
const THEME_NAME = 'cocoon';
const FORMAT_TYPE_NAME = 'cocoon-blocks/marker-blue';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

registerFormatType( FORMAT_TYPE_NAME, {
  title: __( '青色マーカー', THEME_NAME ),
  tagName: 'span',
  className: 'marker-blue',
  edit( { isActive, value, onChange } ) {
    const onToggle = () => onChange( toggleFormat( value, { type: FORMAT_TYPE_NAME } ) );

    return (
      <Fragment>
        <RichTextShortcut
          type='primary'
          character='z'
          onUse={ onToggle }
        />
        <RichTextToolbarButton
          title={ __( '青色マーカー', THEME_NAME ) }
          icon={ <FontAwesomeIcon icon="highlighter" /> }
          onClick={ onToggle }
          isActive={ isActive }
          shortcutType='primary'
          shortcutCharacter='z'
        />
      </Fragment>
    );
  },
} );