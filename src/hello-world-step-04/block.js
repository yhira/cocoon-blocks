

const { registerBlockType } = wp.blocks;
const { Fragment } = wp.element;
const {
    RichText,
    BlockControls,
    AlignmentToolbar,
} = wp.editor;

registerBlockType( 'gutenberg-boilerplate-esnext/hello-world-step-04', {
    title: 'Hello World (Step 4)',

    icon: 'universal-access-alt',

    category: 'cocoon',

    attributes: {
        content: {
            type: 'string',
            source: 'html',
            selector: 'p',
        },
        alignment: {
            type: 'string',
        },
    },

    edit( { attributes, className, setAttributes } ) {
        const { content, alignment } = attributes;

        function onChangeContent( newContent ) {
            setAttributes( { content: newContent } );
        }

        function onChangeAlignment( newAlignment ) {
            setAttributes( { alignment: newAlignment } );
        }

        return (
            <Fragment>
                <BlockControls>
                    <AlignmentToolbar
                        value={ alignment }
                        onChange={ onChangeAlignment }
                    />
                </BlockControls>
                <RichText
                    key="editable"
                    tagName="p"
                    className={ className }
                    style={ { textAlign: alignment } }
                    onChange={ onChangeContent }
                    value={ content }
                />
            </Fragment>
        );
    },

    save( { attributes } ) {
        const { content, alignment } = attributes;

        return (
            <RichText.Content
                style={ { textAlign: alignment } }
                value={ content }
                tagName="p"
            />
        );
    },
} );

