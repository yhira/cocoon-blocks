const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, InspectorControls } = wp.editor;
const { PanelBody, SelectControl, BaseControl } = wp.components;
const { Fragment } = wp.element;
const THEME_NAME = 'cocoon';
const BLOCK_BOX = ' block-box';

registerBlockType( 'cocoon-blocks/blank-box', {

  title: __( 'ボックス（白抜き）', THEME_NAME ),
  icon: 'tablet',
  category: 'cocoon',

  attributes: {
    content: {
      type: 'string',
      source: 'html',
      selector: 'div',
    },
    style: {
      type: 'string',
      default: 'blank-box',
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
                  label: __( '緑色）', THEME_NAME ),
                },
              ] }
            />

          </PanelBody>
        </InspectorControls>

        <div className={attributes.style + BLOCK_BOX}>
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
      <div className={attributes.style + BLOCK_BOX}>
          <RichText.Content
            value={ attributes.content }
            multiline="p"
          />
      </div>
    );
  }
} );