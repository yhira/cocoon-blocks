const { registerBlockType } = wp.blocks;
const { ServerSideRender } = wp.components;

registerBlockType( 'my-plugin/latest-post', {
    title: 'Latest Post',
    icon: 'megaphone',
    category: 'layout',

    edit: function( props ) {
        // ensure the block attributes matches this plugin's name
        return (
            <ServerSideRender
                block="my-plugin/latest-post"
                attributes={ props.attributes }
            />
        );
    },

    save() {
        // Rendering in PHP
        return null;
    },
} );