/**
 * Cocoon Blocks
 * @author: yhira
 * @link: https://wp-cocoon.com/
 * @license: http://www.gnu.org/licenses/gpl-2.0.html GPL v2 or later
 */

const { Fragment } = wp.element;
const { __ } = wp.i18n;
const { registerFormatType, toggleFormat } = wp.richText;
const { RichTextShortcut, RichTextToolbarButton } = wp.editor;
const THEME_NAME = 'cocoon';
const FORMAT_TYPE_NAME = 'cocoon-blocks/marker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

registerFormatType( FORMAT_TYPE_NAME, {
  title: __( '黄色マーカー', THEME_NAME ),
  tagName: 'span',
  className: 'marker',
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
          title={ __( '黄色マーカー', THEME_NAME ) }
          icon={ <FontAwesomeIcon icon="highlighter" /> }
          onClick={ onToggle }
          isActive={ isActive }
          shortcutType='primary'
          shortcutCharacter=''
        />
      </Fragment>
    );
  },
} );