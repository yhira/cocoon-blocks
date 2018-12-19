const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, InspectorControls } = wp.editor;
const { PanelBody, SelectControl, BaseControl } = wp.components;
const { Fragment } = wp.element;
const THEME_NAME = 'cocoon';

registerBlockType( 'cocoon-blocks/info-box', {

  title: __( 'ボックス（案内）', THEME_NAME ),
  icon: 'info',
  category: 'cocoon',

  attributes: {
    content: {
      type: 'string',
      source: 'html',
      selector: 'div',
    },
    style: {
      type: 'string',
      default: 'primary-box block-box',
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
                  value: 'primary-box block-box',
                  label: __( 'プライマリー（濃い水色）', THEME_NAME ),
                },
                {
                  value: 'secondary-box block-box',
                  label: __( 'セカンダリー（濃い灰色）', THEME_NAME ),
                },
                {
                  value: 'info-box block-box',
                  label: __( 'インフォ（薄い青）', THEME_NAME ),
                },
                {
                  value: 'warning-box block-box',
                  label: __( 'ワーニング（薄い黄色）', THEME_NAME ),
                },
                {
                  value: 'danger-box block-box',
                  label: __( 'デンジャー（薄い赤色）', THEME_NAME ),
                },
                {
                  value: 'light-box block-box',
                  label: __( 'ライト（白色）', THEME_NAME ),
                },
                {
                  value: 'dark-box block-box',
                  label: __( 'ダーク（暗い灰色）', THEME_NAME ),
                },
              ] }
            />

          </PanelBody>
        </InspectorControls>

        <div className={attributes.style}>
          <RichText
            onChange={ onChangeContent }
            value={ attributes.content }
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
          <RichText.Content
            value={ attributes.content }
            multiline="p"
          />
      </div>
    );
  }
} );