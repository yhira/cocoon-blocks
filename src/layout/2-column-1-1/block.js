/**
 * Cocoon Blocks
 * @author: yhira
 * @link: https://wp-cocoon.com/
 * @license: http://www.gnu.org/licenses/gpl-2.0.html GPL v2 or later
 */

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, InspectorControls } = wp.editor;
const { PanelBody, SelectControl, BaseControl } = wp.components;
const { Fragment } = wp.element;
const THEME_NAME = 'cocoon';
//const DEFAULT_MSG = __( 'キーワード', THEME_NAME );
const BLOCK_CLASS = ' layout-box';

registerBlockType( 'cocoon-blocks/2-column-1-1', {

  title: __( '2カラム（1:1）', THEME_NAME ),
  icon: 'search',
  category: THEME_NAME + '-block',

  attributes: {
    content: {
      type: 'string',
      //default: DEFAULT_MSG,
    },
  },

  edit( { attributes, setAttributes } ) {
    const { content } = attributes;

    function onChange(event){
      setAttributes({content: event.target.value});
    }

    return (
      <Fragment>
        <div class="column-wrap column-2">
          <div class="column-left">
            <p>左側に入力する内容</p>
          </div>
          <div class="column-right">
            <p>右側に入力する内容</p>
          </div>
        </div>
        <div className="search-form">
          <div className="sform">
            <RichText
              value={ content }
              onChange={ ( value ) => setAttributes( { content: value } ) }
              //placeholder={ DEFAULT_MSG }
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