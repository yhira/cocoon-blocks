const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, InspectorControls } = wp.editor;
const { PanelBody, SelectControl, BaseControl } = wp.components;
const { Fragment } = wp.element;
const THEME_NAME = 'cocoon';
const BUTTON_BLOCK = ' button-block';

registerBlockType( 'cocoon-blocks/button', {

  title: __( 'ボタン（Cocoon）', THEME_NAME ),
  category: 'cocoon',

  attributes: {
    content: {
      type: 'string',
      source: 'html',
      selector: 'div',
    },
    color: {
      type: 'string',
      default: 'btn btn-red',
    },
    size: {
      type: 'string',
      default: ' btn-l',
    },
  },

  edit( { attributes, setAttributes } ) {
    const { content, color, alignment } = attributes;

    function onChange(event){
      setAttributes({color: event.target.value});
    }

    function onChangeContent(newContent){
      setAttributes( { content: newContent } );
    }

    return (
      <Fragment>
        <InspectorControls>
          <PanelBody title={ __( 'ボタン設定', THEME_NAME ) }>

            <SelectControl
              label={ __( '色', THEME_NAME ) }
              value={ color }
              onChange={ ( value ) => setAttributes( { color: value } ) }
              options={ [
                {
                  value: 'btn btn-red',
                  label: __( 'レッド', THEME_NAME ),
                },
                {
                  value: 'btn btn-pink',
                  label: __( 'ピンク', THEME_NAME ),
                },
                {
                  value: 'btn btn-purple',
                  label: __( 'パープル', THEME_NAME ),
                },
                {
                  value: 'btn btn-deep',
                  label: __( 'ディープパープル', THEME_NAME ),
                },
                {
                  value: 'btn btn-indigo',
                  label: __( 'インディゴ[紺色]', THEME_NAME ),
                },
                {
                  value: 'btn btn-blue',
                  label: __( 'ブルー', THEME_NAME ),
                },
                {
                  value: 'btn btn-blue',
                  label: __( 'ライトブルー', THEME_NAME ),
                },
                {
                  value: 'btn btn-cyan',
                  label: __( 'シアン', THEME_NAME ),
                },
                {
                  value: 'btn btn-teal',
                  label: __( 'ティール[緑色がかった青]', THEME_NAME ),
                },
                {
                  value: 'btn btn-green',
                  label: __( 'グリーン', THEME_NAME ),
                },
                {
                  value: 'btn btn-light-green',
                  label: __( 'ライトグリーン', THEME_NAME ),
                },
                {
                  value: 'btn btn-lime',
                  label: __( 'ライム', THEME_NAME ),
                },
                {
                  value: 'btn btn-yellow',
                  label: __( 'イエロー', THEME_NAME ),
                },
                {
                  value: 'btn btn-amber',
                  label: __( 'アンバー[琥珀色]', THEME_NAME ),
                },
                {
                  value: 'btn btn-orange',
                  label: __( 'オレンジ', THEME_NAME ),
                },
                {
                  value: 'btn btn-deep-orange',
                  label: __( 'ディープオレンジ', THEME_NAME ),
                },
                {
                  value: 'btn btn-brown',
                  label: __( 'ブラウン', THEME_NAME ),
                },
                {
                  value: 'btn btn-grey',
                  label: __( 'グレー', THEME_NAME ),
                },
              ] }
            />

            <SelectControl
              label={ __( 'サイズ', THEME_NAME ) }
              value={ color }
              onChange={ ( value ) => setAttributes( { size: value } ) }
              options={ [
                {
                  value: ' btn-l',
                  label: __( '大', THEME_NAME ),
                },
                {
                  value: ' btn-m',
                  label: __( '中', THEME_NAME ),
                },
                {
                  value: '',
                  label: __( '小', THEME_NAME ),
                },
              ] }
            />

          </PanelBody>
        </InspectorControls>

        <div className={BUTTON_BLOCK}>
          <a className={attributes.color + attributes.size}>
            <RichText
              onChange={ onChangeContent }
              value={ attributes.content }
            />
          </a>
        </div>
      </Fragment>
    );
  },

  save( { attributes } ) {
    const { content } = attributes;
    return (
      <div className={BUTTON_BLOCK}>
        <a href="" className={attributes.color + attributes.size}>
          <RichText.Content
            value={ attributes.content }
          />
        </a>
      </div>
    );
  }
} );