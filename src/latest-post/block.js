const { registerBlockType } = wp.blocks;
const { ServerSideRender } = wp.components;

registerBlockType( 'cocoon-blocks/latest-post', {
    title: 'Latest Post',
    icon: 'megaphone',
    category: 'cocoon',

    edit: function( props ) {
        // ensure the block attributes matches this plugin's name
        return (
            <ServerSideRender
                block="cocoon-blocks/latest-post"
                attributes={ props.attributes }
            />
        );
    },

    save() {
        // Rendering in PHP
        return null;
    },
} );