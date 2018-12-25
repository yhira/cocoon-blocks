const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, InspectorControls } = wp.editor;
const { PanelBody, SelectControl, BaseControl } = wp.components;
const { Fragment } = wp.element;
const THEME_NAME = 'cocoon';
const BLOCK_MSG = __( 'キーワード', THEME_NAME );
const BLOCK_BOX = ' block-box';

registerBlockType( 'cocoon-blocks/search-box', {

  title: __( '検索案内', THEME_NAME ),
  icon: 'search',
  category: THEME_NAME + '-block',

  attributes: {
    content: {
      type: 'string',
      default: BLOCK_MSG,
    },
  },

  edit( { attributes, setAttributes } ) {
    const { content } = attributes;

    function onChange(event){
      setAttributes({content: event.target.value});
    }

    return (
      <Fragment>
        <div className="search-form">
          <div className="sform">
            <RichText
              value={ content }
              onChange={ ( value ) => setAttributes( { content: value } ) }
              placeholder={ BLOCK_MSG }
            />
          </div>
          <div className="sbtn">検索</div>
        </div>
      </Fragment>
    );
  },

  save( { attributes } ) {
    const { content } = attributes;
    return (

      <div className={"search-form" + BLOCK_BOX}>
        <div className="sform">
          <RichText.Content
            value={ content }
          />
        </div>
        <div className="sbtn">{__( '検索', THEME_NAME )}</div>
      </div>
    );
  }
} );