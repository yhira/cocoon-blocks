const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, InspectorControls } = wp.editor;
const { PanelBody, SelectControl, BaseControl, TextareaControl } = wp.components;
const { Fragment } = wp.element;
const THEME_NAME = 'cocoon';
const BUTTON_BLOCK = ' button-block';

registerBlockType( 'cocoon-blocks/button-wrap', {

  title: __( '囲みボタン', THEME_NAME ),
  category: THEME_NAME + '-block',

  attributes: {
    content: {
      type: 'string',
      default: __( '囲みボタン設定', THEME_NAME ),
    },
    tag: {
      type: 'string',
      default: '',
    },
    color: {
      type: 'string',
      default: 'btn-wrap btn-wrap-red',
    },
    size: {
      type: 'string',
      default: '',
    },
  },
  supports: {
    align: [ 'left', 'center', 'right' ],
  },

  edit( { attributes, setAttributes } ) {
    const { content, color, size, tag } = attributes;

    // function unescapeHTML(html) {
    //   var escapeEl = document.createElement(‘textarea’);
    //   escapeEl.innerHTML = html;
    //   return escapeEl.textContent;
    // }

    return (
      <Fragment>
        <InspectorControls>
          <PanelBody title={ __( 'ボタン設定', THEME_NAME ) }>

            <TextareaControl
              label={ __( 'リンクタグ', THEME_NAME ) }
              value={ tag }
              onChange={ ( value ) => setAttributes( { tag: value } ) }
            />

            <SelectControl
              label={ __( '色', THEME_NAME ) }
              value={ color }
              onChange={ ( value ) => setAttributes( { color: value } ) }
              options={ [
                {
                  value: 'btn-wrap btn-wrap-red',
                  label: __( 'レッド', THEME_NAME ),
                },
                {
                  value: 'btn-wrap btn-wrap-pink',
                  label: __( 'ピンク', THEME_NAME ),
                },
                {
                  value: 'btn-wrap btn-wrap-purple',
                  label: __( 'パープル', THEME_NAME ),
                },
                {
                  value: 'btn-wrap btn-wrap-deep',
                  label: __( 'ディープパープル', THEME_NAME ),
                },
                {
                  value: 'btn-wrap btn-wrap-indigo',
                  label: __( 'インディゴ[紺色]', THEME_NAME ),
                },
                {
                  value: 'btn-wrap btn-wrap-blue',
                  label: __( 'ブルー', THEME_NAME ),
                },
                {
                  value: 'btn-wrap btn-wrap-blue',
                  label: __( 'ライトブルー', THEME_NAME ),
                },
                {
                  value: 'btn-wrap btn-wrap-cyan',
                  label: __( 'シアン', THEME_NAME ),
                },
                {
                  value: 'btn-wrap btn-wrap-teal',
                  label: __( 'ティール[緑色がかった青]', THEME_NAME ),
                },
                {
                  value: 'btn-wrap btn-wrap-green',
                  label: __( 'グリーン', THEME_NAME ),
                },
                {
                  value: 'btn-wrap btn-wrap-light-green',
                  label: __( 'ライトグリーン', THEME_NAME ),
                },
                {
                  value: 'btn-wrap btn-wrap-lime',
                  label: __( 'ライム', THEME_NAME ),
                },
                {
                  value: 'btn-wrap btn-wrap-yellow',
                  label: __( 'イエロー', THEME_NAME ),
                },
                {
                  value: 'btn-wrap btn-wrap-amber',
                  label: __( 'アンバー[琥珀色]', THEME_NAME ),
                },
                {
                  value: 'btn-wrap btn-wrap-orange',
                  label: __( 'オレンジ', THEME_NAME ),
                },
                {
                  value: 'btn-wrap btn-wrap-deep-orange',
                  label: __( 'ディープオレンジ', THEME_NAME ),
                },
                {
                  value: 'btn-wrap btn-wrap-brown',
                  label: __( 'ブラウン', THEME_NAME ),
                },
                {
                  value: 'btn-wrap btn-wrap-grey',
                  label: __( 'グレー', THEME_NAME ),
                },
              ] }
            />

            <SelectControl
              label={ __( 'サイズ', THEME_NAME ) }
              value={ size }
              onChange={ ( value ) => setAttributes( { size: value } ) }
              options={ [
                {
                  value: '',
                  label: __( '小', THEME_NAME ),
                },
                {
                  value: ' btn-wrap-m',
                  label: __( '中', THEME_NAME ),
                },
                {
                  value: ' btn-wrap-l',
                  label: __( '大', THEME_NAME ),
                },
              ] }
            />

          </PanelBody>
        </InspectorControls>

        <div
          className={color + size + BUTTON_BLOCK}
          dangerouslySetInnerHTML={{__html: tag}}
        >
        </div>

      </Fragment>
    );
  },

  save( { attributes } ) {
    const { content, color, size, tag } = attributes;
    return (
      <div className={color + size + BUTTON_BLOCK}>
        <RichText.Content
          value={ tag }
        />
      </div>
    );
  }
} );