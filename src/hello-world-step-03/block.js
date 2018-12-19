

const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor;

registerBlockType( 'gutenberg-boilerplate-esnext/hello-world-step-03', {
    title: 'Hello World (Step 3)',

    icon: 'universal-access-alt',

    category: 'cocoon',

    attributes: {
        content: {
            type: 'string',
            source: 'html',
            selector: 'p',
        },
    },

    edit( { attributes, className, setAttributes } ) {
        const { content } = attributes;

        function onChangeContent( newContent ) {
            setAttributes( { content: newContent } );
        }

        return (
            <RichText
                tagName="p"
                className={ className }
                onChange={ onChangeContent }
                value={ content }
            />
        );
    },

    save( { attributes } ) {
        const { content } = attributes;

        return (
            <RichText.Content
                tagName="p"
                value={ content }
            />
        );
    },
} );

