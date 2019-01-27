/**
 * Cocoon Blocks
 * @author: yhira
 * @link: https://wp-cocoon.com/
 * @license: http://www.gnu.org/licenses/gpl-2.0.html GPL v2 or later
 */

import {THEME_NAME, BLOCK_CLASS, ICONS} from '../../helpers.js';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const { times } = lodash;
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InnerBlocks, RichText, InspectorControls } = wp.editor;
const { PanelBody, SelectControl, BaseControl, Button } = wp.components;
const { Fragment } = wp.element;
const CAPTION_BOX_CLASS = 'caption-box';
const DEFAULT_MSG = __( '見出し', THEME_NAME );

let isIconUpdated = false;

registerBlockType( 'cocoon-blocks/caption-box', {

  title: __( '見出しボックス', THEME_NAME ),
  icon: 'feedback',
  category: THEME_NAME + '-block',
  description: __( 'ボックス「見出し」を入力できる汎用ボックスです。', THEME_NAME ),

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
    icon: {
      type: 'string',
      default: '',
    },
  },

  edit( { attributes, setAttributes } ) {
    const { content, color, icon } = attributes;

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

            <BaseControl label={ __( 'アイコン', THEME_NAME ) }>
              <div className="icon-selector">
                { times( ICONS.length, ( index ) => {
                  return (
                    <Button
                      isDefault
                      isPrimary={ icon === ICONS[index].value }
                      onClick={ () => {
                        isIconUpdated = true;
                        setAttributes( { icon: ICONS[index].value } );
                      } }
                    >
                      <i className={ `fa fa-${ ICONS[index].value }` } title={ ICONS[ index ].label } />
                    </Button>
                  );
                } ) }
              </div>
            </BaseControl>

          </PanelBody>
        </InspectorControls>

        <div className={CAPTION_BOX_CLASS + color + BLOCK_CLASS}>
          <div className="caption-box-label">
            <RichText
              value={ content }
              placeholder={ DEFAULT_MSG }
            />
          </div>
          <div className="caption-box-content">
            <InnerBlocks />
          </div>
        </div>
      </Fragment>
    );
  },

  save( { attributes } ) {
    const { content, color, icon } = attributes;
    return (
      <div className={CAPTION_BOX_CLASS + color + BLOCK_CLASS}>
        <div className="caption-box-label">
          <RichText.Content
            value={ content }
          />
        </div>
        <div className="caption-box-content">
          <InnerBlocks.Content />
        </div>
      </div>
    );
  }
} );