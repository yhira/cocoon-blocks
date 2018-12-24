const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InnerBlocks, RichText, InspectorControls } = wp.editor;
const { PanelBody, SelectControl, BaseControl } = wp.components;
const { Fragment } = wp.element;
const THEME_NAME = 'cocoon';
const BLOCK_BOX = ' block-box';

registerBlockType( 'cocoon-blocks/icon-box', {

  title: __( 'アイコンボックス', THEME_NAME ),
  icon: 'info',
  category: THEME_NAME + '-block',

  attributes: {
    content: {
      type: 'string',
      source: 'html',
      selector: 'div',
    },
    style: {
      type: 'string',
      default: 'information-box common-icon-box'
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
                  value: 'information-box common-icon-box',
                  label: __( '補足情報(i)', THEME_NAME ),
                },
                {
                  value: 'question-box common-icon-box',
                  label: __( '補足情報(?)', THEME_NAME ),
                },
                {
                  value: 'alert-box common-icon-box',
                  label: __( '補足情報(!)', THEME_NAME ),
                },
                {
                  value: 'memo-box common-icon-box',
                  label: __( 'メモ', THEME_NAME ),
                },
                {
                  value: 'comment-box common-icon-box',
                  label: __( 'コメント', THEME_NAME ),
                },
                {
                  value: 'ok-box common-icon-box',
                  label: __( 'OK', THEME_NAME ),
                },
                {
                  value: 'ng-box common-icon-box',
                  label: __( 'NG', THEME_NAME ),
                },
                {
                  value: 'good-box common-icon-box',
                  label: __( 'GOOD', THEME_NAME ),
                },
                {
                  value: 'bad-box common-icon-box',
                  label: __( 'BAD', THEME_NAME ),
                },
                {
                  value: 'profile-box common-icon-box',
                  label: __( 'プロフィール', THEME_NAME ),
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