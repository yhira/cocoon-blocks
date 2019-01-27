/**
 * Cocoon Blocks
 * @author: yhira
 * @link: https://wp-cocoon.com/
 * @license: http://www.gnu.org/licenses/gpl-2.0.html GPL v2 or later
 */

const { __ } = wp.i18n;

export const THEME_NAME = 'cocoon';
export const BLOCK_CLASS = ' block-box';
export const PARAGRAPH_CLASS = ' paragraph';

//日時をもとにしたID作成
export function getDateID(){
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

export const ICONS = [
  {
    value: 'info-circle',
    label: __( 'info-circle', THEME_NAME ),
  },
  {
    value: 'question-circle',
    label: __( 'question-circle', THEME_NAME ),
  },
  {
    value: 'exclamation-circle',
    label: __( 'exclamation-circle', THEME_NAME ),
  },
  {
    value: 'edit',
    label: __( 'edit', THEME_NAME ),
  },
  {
    value: 'comment',
    label: __( 'comment', THEME_NAME ),
  },
  {
    value: 'thumbs-up',
    label: __( 'thumbs-up', THEME_NAME ),
  },
  {
    value: 'thumbs-down',
    label: __( 'thumbs-down', THEME_NAME ),
  },
  {
    value: 'check',
    label: __( 'check', THEME_NAME ),
  },
  {
    value: 'bell',
    label: __( 'bell', THEME_NAME ),
  },
  {
    value: 'star',
    label: __( 'star', THEME_NAME ),
  },
  {
    value: 'bookmark',
    label: __( 'bookmark', THEME_NAME ),
  },
  {
    value: 'download',
    label: __( 'download', THEME_NAME ),
  },
  {
    value: 'coffee',
    label: __( 'coffee', THEME_NAME ),
  },
  {
    value: 'user',
    label: __( 'user', THEME_NAME ),
  },
];