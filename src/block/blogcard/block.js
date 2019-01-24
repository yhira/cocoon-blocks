/**
 * Cocoon Blocks
 * @author: yhira
 * @link: https://wp-cocoon.com/
 * @license: http://www.gnu.org/licenses/gpl-2.0.html GPL v2 or later
 */

import {THEME_NAME, BLOCK_CLASS} from '../../helpers.js';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, InspectorControls } = wp.editor;
const { PanelBody, SelectControl, BaseControl } = wp.components;
const { Fragment } = wp.element;

registerBlockType( 'cocoon-blocks/blogcard', {

  title: __( 'ブログカード', THEME_NAME ),
  //icon: 'tablet',
  category: THEME_NAME + '-block',
  description: __( 'ブログカード表示用の入力ブロックを表示します。URLは複数入力可能です。', THEME_NAME ),

  attributes: {
    content: {
      type: 'string',
      source: 'html',
      selector: 'div',
      default: '',
    },
    style: {
      type: 'string',
      default: 'blogcard-type bct-none',
    },
  },

  edit( { attributes, setAttributes } ) {
    const { content, style } = attributes;

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
              label={ __( 'ラベル', THEME_NAME ) }
              value={ style }
              onChange={ ( value ) => setAttributes( { style: value } ) }
              options={ [
                {
                  value: 'blogcard-type bct-none',
                  label: __( 'なし', THEME_NAME ),
                },
                {
                  value: 'blogcard-type bct-related',
                  label: __( '関連記事', THEME_NAME ),
                },
                {
                  value: 'blogcard-type bct-reference',
                  label: __( '参考記事', THEME_NAME ),
                },
                {
                  value: 'blogcard-type bct-popular',
                  label: __( '人気記事', THEME_NAME ),
                },
                {
                  value: 'blogcard-type bct-together',
                  label: __( 'あわせて読みたい', THEME_NAME ),
                },
                {
                  value: 'blogcard-type bct-detail',
                  label: __( '詳細はこちら', THEME_NAME ),
                },
                {
                  value: 'blogcard-type bct-check',
                  label: __( 'チェック', THEME_NAME ),
                },
                {
                  value: 'blogcard-type bct-pickup',
                  label: __( 'ピックアップ', THEME_NAME ),
                },
                {
                  value: 'blogcard-type bct-official',
                  label: __( '公式サイト', THEME_NAME ),
                },
              ] }
            />

          </PanelBody>
        </InspectorControls>

        <div className={style}>
          <RichText
            onChange={ onChangeContent }
            value={ content }
            multiline="p"
          />
        </div>
      </Fragment>
    );
  },

  save( { attributes } ) {
    const { content } = attributes;
    return (
      <div className={attributes.style}>
          {"\n"}<RichText.Content
            value={ content.replace(/<\/p><p>/, '</p>\n<p>') }
            multiline={"p"}
          />{"\n"}
      </div>
    );
  }
} );