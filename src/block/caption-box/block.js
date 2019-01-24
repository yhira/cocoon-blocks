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
const CAPTION_BOX_CLASS = 'caption-box';
const DEFAULT_MSG = __( 'キャプションボックスタイトル', THEME_NAME );

registerBlockType( 'cocoon-blocks/caption-box', {

  title: __( 'キャプションボックス', THEME_NAME ),
  icon: 'feedback',
  category: THEME_NAME + '-block',
  description: __( 'ボックス自体に自由な見出しを入力できる汎用ボックスです。', THEME_NAME ),

  attributes: {
    content: {
      type: 'string',
      selector: 'div',
      default: DEFAULT_MSG,
    },
    color: {
      type: 'string',
      default: '',
    },
  },

  edit( { attributes, setAttributes } ) {
    const { content, color } = attributes;

    return (
      <Fragment>
        <InspectorControls>
          <PanelBody title={ __( 'スタイル設定', THEME_NAME ) }>

            <SelectControl
              label={ __( '色', THEME_NAME ) }
              value={ color }
              onChange={ ( value ) => setAttributes( { color: value } ) }
              options={ [
                {
                  value: '',
                  label: __( '灰色', THEME_NAME ),
                },
                {
                  value: ' cb-yellow',
                  label: __( '黄色', THEME_NAME ),
                },
                {
                  value: ' cb-red',
                  label: __( '赤色', THEME_NAME ),
                },
                {
                  value: ' cb-blue',
                  label: __( '青色', THEME_NAME ),
                },
                {
                  value: ' cb-green',
                  label: __( '緑色', THEME_NAME ),
                },
              ] }
            />

          </PanelBody>
        </InspectorControls>

        <div className={CAPTION_BOX_CLASS + color + BLOCK_CLASS}>
          <div class="caption-box-label">
            <RichText
              value={ content }
              placeholder={ DEFAULT_MSG }
            />
          </div>
          <div class="caption-box-content">
            <InnerBlocks />
          </div>
        </div>
      </Fragment>
    );
  },

  save( { attributes } ) {
    const { content, color } = attributes;
    return (
      <div className={CAPTION_BOX_CLASS + color + BLOCK_CLASS}>
        <div class="caption-box-label">
          <RichText.Content
            value={ content }
          />
        </div>
        <div class="caption-box-content">
          <InnerBlocks.Content />
        </div>
      </div>
    );
  }
} );