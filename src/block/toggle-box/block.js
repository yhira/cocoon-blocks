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
const DEFAULT_MSG = __( 'トグルボックス見出し', THEME_NAME );
const BLOCK_CLASS = ' block-box';

function getDateID(){
  //Dateオブジェクトを利用
  var d = new Date();
  var year  = d.getFullYear();
  var month = d.getMonth() + 1;
  var month = ( month          < 10 ) ? '0' + month          : month;
  var day   = ( d.getDate()    < 10 ) ? '0' + d.getDate()    : d.getDate();
  var hour  = ( d.getHours()   < 10 ) ? '0' + d.getHours()   : d.getHours();
  var min   = ( d.getMinutes() < 10 ) ? '0' + d.getMinutes() : d.getMinutes();
  var sec   = ( d.getSeconds() < 10 ) ? '0' + d.getSeconds() : d.getSeconds();
  var dateID = '' + year + month + day + hour + min + sec;
  return dateID;
}

registerBlockType( 'cocoon-blocks/toggle-box', {

  title: __( 'トグルボックス', THEME_NAME ),
  icon: 'randomize',
  category: THEME_NAME + '-block',
  description: __( 'クリックすることで表示されるコンテンツを追加することができます。', THEME_NAME ),

  attributes: {
    content: {
      type: 'string',
      selector: 'div',
      default: DEFAULT_MSG,
    },
    style: {
      type: 'string',
      default: 'toggle-wrap',
    },
    dateID: {
      type: 'string',
      default: '',
    },
  },

  edit( { attributes, setAttributes } ) {
    const { content, style, dateID } = attributes;
    //dateID = getDateID();
    setAttributes( { dateID: getDateID() } );

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
          <input id={"toggle-checkbox-" + dateID} type="checkbox" />
          <label className="toggle-button" for={"toggle-checkbox-" + dateID}>
            <RichText
              value={ content }
              placeholder={ DEFAULT_MSG }
            />
          </label>
          <div className="toggle-content">
            <InnerBlocks />
          </div>
        </div>
      </Fragment>
    );
  },

  save( { attributes } ) {
    const { content, dateID } = attributes;
    return (
      <div className={attributes.style + BLOCK_CLASS}>
        <input id={"toggle-checkbox-" + dateID} type="checkbox" />
        <label className="toggle-button" for={"toggle-checkbox-" + dateID}>
          <RichText.Content
            value={ content }
          />
        </label>
        <div className="toggle-content">
          <InnerBlocks.Content />
        </div>
      </div>
    );
  }
} );