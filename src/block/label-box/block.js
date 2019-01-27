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
const CAPTION_BOX_CLASS = 'label-box';
const DEFAULT_MSG = __( '見出し', THEME_NAME );

registerBlockType( 'cocoon-blocks/label-box', {

  title: __( 'ラベルボックス', THEME_NAME ),
  icon: 'tag',
  category: THEME_NAME + '-block',
  description: __( 'ボックスに「ラベル見出し」入力できる汎用ボックスです。', THEME_NAME ),

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
                  label: __( 'デフォルト', THEME_NAME ),
                },
                {
                  value: ' lb-yellow',
                  label: __( '黄色', THEME_NAME ),
                },
                {
                  value: ' lb-red',
                  label: __( '赤色', THEME_NAME ),
                },
                {
                  value: ' lb-blue',
                  label: __( '青色', THEME_NAME ),
                },
                {
                  value: ' lb-green',
                  label: __( '緑色', THEME_NAME ),
                },
              ] }
            />

          </PanelBody>
        </InspectorControls>

        <div className={CAPTION_BOX_CLASS + color + BLOCK_CLASS}>
          <div className="label-box-label">
            <RichText
              value={ content }
              placeholder={ DEFAULT_MSG }
            />
          </div>
          <div className="label-box-content">
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
        <div className="label-box-label">
          <RichText.Content
            value={ content }
          />
        </div>
        <div className="label-box-content">
          <InnerBlocks.Content />
        </div>
      </div>
    );
  }
} );