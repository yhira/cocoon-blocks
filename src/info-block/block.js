const { registerBlockType } = wp.blocks;
const RichText = wp.editor.RichText;

registerBlockType( 'cocoon-blocks/info', {

  title: '案内ボックス',

  icon: 'info',

  category: 'common',

  attributes: {
    style: {
      type: 'string',
      default: 'info-box'
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
          <option value={'primary-box'}>プライマリー（濃い水色）</option>
          <option value={'secondary-box'}>セカンダリー（濃い灰色）</option>
          <option value={'success-box'}>サクセス（薄い緑）</option>
          <option value={'info-box'}>インフォ（薄い青）</option>
          <option value={'warning-box'}>ワーニング（薄い黄色）</option>
          <option value={'danger-box'}>デンジャー（薄い赤色）</option>
          <option value={'light-box'}>ライト（白色）</option>
          <option value={'dark-box'}>ダーク（暗い灰色）</option>
        </select>
        <RichText
          onChange={ onChangeContent }
          value={ attributes.content }
        />
      </div>
    )
  },

  save( { attributes } ) {
    return (
      <div className={attributes.style}>
          <RichText.Content
            value={ attributes.content }
          />
      </div>
    );
  }
} );