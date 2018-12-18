const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const RichText = wp.editor.RichText;
const THEME_NAME = 'cocoon';

registerBlockType( 'cocoon-blocks/info', {

  title: __( 'ボックス（案内）', THEME_NAME ),
  icon: 'info',
  category: 'cocoon',

  attributes: {
    style: {
      type: 'string',
      default: 'primary-box'
    },
    content: {
      type: 'array',
      source: 'children',
      selector: 'div',
    },
  },

  edit( { attributes, setAttributes } ) {

    function onChange(event){
      setAttributes({style: event.target.value});
    }

    function onChangeContent(newContent){
      setAttributes( { content: newContent } );
    }

    return (
      <div className={attributes.style}>
        <select onChange={onChange}>
          <option value={'primary-box'}>{__( 'プライマリー（濃い水色）', THEME_NAME )}</option>
          <option value={'secondary-box'}>{__( 'セカンダリー（濃い灰色）', THEME_NAME )}</option>
          <option value={'success-box'}>{__( 'サクセス（薄い緑）', THEME_NAME )}</option>
          <option value={'info-box'}>{__( 'インフォ（薄い青）', THEME_NAME )}</option>
          <option value={'warning-box'}>{__( 'ワーニング（薄い黄色）', THEME_NAME )}</option>
          <option value={'danger-box'}>{__( 'デンジャー（薄い赤色）', THEME_NAME )}</option>
          <option value={'light-box'}>{__( 'ライト（白色）', THEME_NAME )}</option>
          <option value={'dark-box'}>{__( 'ダーク（暗い灰色）', THEME_NAME )}</option>
        </select>
        <RichText
          onChange={ onChangeContent }
          value={ attributes.content }
          multiline="p"
        />
      </div>
    )
  },

  save( { attributes } ) {
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