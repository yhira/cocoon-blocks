/**
 * Cocoon Blocks
 * @author: yhira
 * @link: https://wp-cocoon.com/
 * @license: http://www.gnu.org/licenses/gpl-2.0.html GPL v2 or later
 */

import {THEME_NAME, BLOCK_CLASS} from '../../helpers.js';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InnerBlocks, RichText, InspectorControls } = wp.editor;
const { PanelBody, SelectControl, BaseControl } = wp.components;
const { Fragment } = wp.element;
const DEFAULT_MSG = __( 'マイクロコピーバルーン', THEME_NAME );
const MICRO_COPY_CLASS = ' micro-copy';

registerBlockType( 'cocoon-blocks/micro-balloon', {

  title: __( 'マイクロバルーン', THEME_NAME ),
  icon: 'admin-comments',
  category: THEME_NAME + '-micro',

  attributes: {
    content: {
      type: 'string',
      selector: 'div',
      default: DEFAULT_MSG,
    },
    style: {
      type: 'string',
      default: 'micro-balloon',
    },
  },
  supports: {
    align: [ 'left', 'center', 'right' ],
    customClassName: true,
  },

  edit( { attributes, setAttributes } ) {
    const { content, style } = attributes;

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
                  value: 'micro-balloon',
                  label: __( '下寄り', THEME_NAME ),
                },
                {
                  value: 'micro-balloon micro-bottom',
                  label: __( '上寄り', THEME_NAME ),
                },
              ] }
            />

          </PanelBody>
        </InspectorControls>

        <div className={style + MICRO_COPY_CLASS + BLOCK_CLASS}>
          <RichText
            value={ content }
            onChange={ ( value ) => setAttributes( { content: value } ) }
          />
        </div>
      </Fragment>
    );
  },

  save( { attributes } ) {
    const { content, style } = attributes;
    return (
      <div className={style + MICRO_COPY_CLASS + BLOCK_CLASS}>
        <RichText.Content
          value={ content }
        />
      </div>
    );
  }
} );