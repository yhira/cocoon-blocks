/**
 * Cocoon Blocks
 * @author: yhira
 * @link: https://wp-cocoon.com/
 * @license: http://www.gnu.org/licenses/gpl-2.0.html GPL v2 or later
 */

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InnerBlocks, RichText, InspectorControls } = wp.editor;
const { PanelBody, SelectControl, BaseControl } = wp.components;
const { Fragment } = wp.element;
const THEME_NAME = 'cocoon';
const DEFAULT_MSG = __( 'こちらをクリックして設定変更。この入力は公開ページで反映されません。', THEME_NAME );
const BLOCK_CLASS = ' block-box';

registerBlockType( 'cocoon-blocks/blank-box', {

  title: __( '白抜きボックス', THEME_NAME ),
  icon: 'tablet',
  category: THEME_NAME + '-block',

  attributes: {
    content: {
      type: 'string',
      source: 'html',
      selector: 'div',
      default: DEFAULT_MSG,
    },
    style: {
      type: 'string',
      default: 'blank-box',
    },
  },

  edit( { attributes, setAttributes } ) {
    const { content, style, alignment } = attributes;

    function onChange(event){
      setAttributes({style: event.target.value});
    }

    function onChangeContent(newContent){
      setAttributes( { content: newContent } );
    }

    return (
      <Fragment>
        <InspectorControls>
          <PanelBody title={ __( 'スタイル設定', THEME_NAME ) }>

            <SelectControl
              label={ __( 'タイプ', THEME_NAME ) }
              value={ style }
              onChange={ ( value ) => setAttributes( { style: value } ) }
              options={ [
                {
                  value: 'blank-box',
                  label: __( '灰色', THEME_NAME ),
                },
                {
                  value: 'blank-box bb-yellow',
                  label: __( '黄色', THEME_NAME ),
                },
                {
                  value: 'blank-box bb-red',
                  label: __( '赤色', THEME_NAME ),
                },
                {
                  value: 'blank-box bb-blue',
                  label: __( '青色', THEME_NAME ),
                },
                {
                  value: 'blank-box bb-green',
                  label: __( '緑色', THEME_NAME ),
                },
              ] }
            />

          </PanelBody>
        </InspectorControls>

        <div className={attributes.style + BLOCK_CLASS}>
          <span className={'box-block-msg'}>
            <RichText
              value={ content }
              placeholder={ DEFAULT_MSG }
            />
          </span>
          <InnerBlocks />
        </div>
      </Fragment>
    );
  },

  save( { attributes } ) {
    const { content } = attributes;
    return (
      <div className={attributes.style + BLOCK_CLASS}>
        <InnerBlocks.Content />
      </div>
    );
  }
} );