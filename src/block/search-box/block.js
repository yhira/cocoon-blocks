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
const DEFAULT_MSG = __( 'キーワード', THEME_NAME );

registerBlockType( 'cocoon-blocks/search-box', {

  title: __( '検索案内', THEME_NAME ),
  icon: 'search',
  category: THEME_NAME + '-block',
  description: __( '訪問者に検索を促すためのボックスです。検索をクリックすることで検索結果へ跳びます（※AMPページ以外）。', THEME_NAME ),

  attributes: {
    content: {
      type: 'string',
      default: DEFAULT_MSG,
    },
  },

  edit( { attributes, setAttributes } ) {
    const { content } = attributes;

    function onChange(event){
      setAttributes({content: event.target.value});
    }

    return (
      <Fragment>
        <div className={"search-form" + BLOCK_CLASS}>
          <div className="sform">
            <RichText
              value={ content }
              onChange={ ( value ) => setAttributes( { content: value } ) }
              placeholder={ DEFAULT_MSG }
            />
          </div>
          <div className="sbtn">検索</div>
        </div>
      </Fragment>
    );
  },

  save( { attributes } ) {
    const { content } = attributes;
    return (

      <div className={"search-form" + BLOCK_CLASS}>
        <div className="sform">
          <RichText.Content
            value={ content }
          />
        </div>
        <div className="sbtn">{__( '検索', THEME_NAME )}</div>
      </div>
    );
  }
} );