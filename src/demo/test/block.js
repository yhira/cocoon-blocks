import apiFetch from '@wordpress/api-fetch';
//const { apiFetch } = wp;
const { registerBlockType } = wp.blocks;
const { ServerSideRender } = wp.components;

registerBlockType( 'my-plugin/latest-post', {
  title: 'Latest Post',
  icon: 'megaphone',
  category: 'layout',


  edit: function( props ) {
    apiFetch( { path: '/wp-json/cocoon/v1/balloon/1' } ).then( posts => {
      console.log( posts );
    } );
    // ensure the block attributes matches this plugin's name
    return (
      <ServerSideRender
        block="my-plugin/latest-post-editor"
        attributes={ props.attributes }
      />
    );
  },

  save() {
    // Rendering in PHP
    return null;
  },
} );