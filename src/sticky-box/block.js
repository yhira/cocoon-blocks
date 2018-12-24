const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InnerBlocks, RichText, InspectorControls } = wp.editor;
const { PanelBody, SelectControl, BaseControl } = wp.components;
const { Fragment } = wp.element;
const THEME_NAME = 'cocoon';
const BLOCK_BOX = ' block-box';

registerBlockType( 'cocoon-blocks/sticky-box', {

  title: __( '付箋風ボックス', THEME_NAME ),
  icon: 'editor-removeformatting',
  category: THEME_NAME + '-block',

  attributes: {
    content: {
      type: 'string',
      source: 'html',
      selector: 'div',
    },
    style: {
      type: 'string',
      default: 'blank-box sticky',
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
                  value: 'blank-box sticky',
                  label: __( '灰色', THEME_NAME ),
                },
                {
                  value: 'blank-box sticky st-yellow',
                  label: __( '黄色', THEME_NAME ),
                },
                {
                  value: 'blank-box sticky st-red',
                  label: __( '赤色', THEME_NAME ),
                },
                {
                  value: 'blank-box sticky st-blue',
                  label: __( '青色', THEME_NAME ),
                },
                {
                  value: 'blank-box sticky st-green',
                  label: __( '緑色', THEME_NAME ),
                },
              ] }
            />

          </PanelBody>
        </InspectorControls>

        <div className={attributes.style + BLOCK_BOX}>
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
      <div className={attributes.style + BLOCK_BOX}>
        <InnerBlocks.Content />
      </div>
    );
  }
} );