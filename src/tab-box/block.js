const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InnerBlocks, RichText, InspectorControls } = wp.editor;
const { PanelBody, SelectControl, BaseControl } = wp.components;
const { Fragment } = wp.element;
const THEME_NAME = 'cocoon';
const BLOCK_BOX = ' block-box';

registerBlockType( 'cocoon-blocks/tab-box', {

  title: __( 'タブボックス', THEME_NAME ),
  icon: 'category',
  category: THEME_NAME + '-block',

  attributes: {
    content: {
      type: 'string',
      source: 'html',
      selector: 'div',
      default: __( 'こちらをクリックして設定変更。この入力は公開ページで反映されません。', THEME_NAME ),
    },
    style: {
      type: 'string',
      default: 'blank-box bb-tab bb-check',
    },
    color: {
      type: 'string',
      default: '',
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
                  value: 'blank-box bb-tab bb-check',
                  label: __( 'チェック', THEME_NAME ),
                },
                {
                  value: 'blank-box bb-tab bb-comment',
                  label: __( 'コメント', THEME_NAME ),
                },
                {
                  value: 'blank-box bb-tab bb-point',
                  label: __( 'ポイント', THEME_NAME ),
                },
                {
                  value: 'blank-box bb-tab bb-tips',
                  label: __( 'ティップス', THEME_NAME ),
                },
                {
                  value: 'blank-box bb-tab bb-hint',
                  label: __( 'ヒント', THEME_NAME ),
                },
                {
                  value: 'blank-box bb-tab bb-pickup',
                  label: __( 'ピックアップ', THEME_NAME ),
                },
                {
                  value: 'blank-box bb-tab bb-bookmark',
                  label: __( 'ブックマーク', THEME_NAME ),
                },
                {
                  value: 'blank-box bb-tab bb-memo',
                  label: __( 'メモ', THEME_NAME ),
                },
                {
                  value: 'blank-box bb-tab bb-download',
                  label: __( 'ダウンロード', THEME_NAME ),
                },
                {
                  value: 'blank-box bb-tab bb-break',
                  label: __( 'ブレイク', THEME_NAME ),
                },
                {
                  value: 'blank-box bb-tab bb-amazon',
                  label: __( 'Amazon', THEME_NAME ),
                },
                {
                  value: 'blank-box bb-tab bb-ok',
                  label: __( 'OK', THEME_NAME ),
                },
                {
                  value: 'blank-box bb-tab bb-ng',
                  label: __( 'NG', THEME_NAME ),
                },
                {
                  value: 'blank-box bb-tab bb-good',
                  label: __( 'GOOD', THEME_NAME ),
                },
                {
                  value: 'blank-box bb-tab bb-bad',
                  label: __( 'BAD', THEME_NAME ),
                },
                {
                  value: 'blank-box bb-tab bb-profile',
                  label: __( 'プロフィール', THEME_NAME ),
                },
              ] }
            />

            <SelectControl
              label={ __( '色', THEME_NAME ) }
              value={ style }
              onChange={ ( value ) => setAttributes( { color: value } ) }
              options={ [
                {
                  value: '',
                  label: __( '灰色', THEME_NAME ),
                },
                {
                  value: ' bb-yellow',
                  label: __( '黄色', THEME_NAME ),
                },
                {
                  value: ' bb-red',
                  label: __( '赤色', THEME_NAME ),
                },
                {
                  value: ' bb-blue',
                  label: __( '青色', THEME_NAME ),
                },
                {
                  value: ' bb-green',
                  label: __( '緑色', THEME_NAME ),
                },
              ] }
            />

          </PanelBody>
        </InspectorControls>

        <div className={attributes.style + attributes.color + BLOCK_BOX}>
          <span className={'small-msg'}>
            <RichText
              value={ content }
              placeholder={ __( 'こちらをクリックして設定変更。この入力は公開ページで反映されません。', THEME_NAME ) }
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
      <div className={attributes.style + attributes.color + BLOCK_BOX}>
        <InnerBlocks.Content />
      </div>
    );
  }
} );