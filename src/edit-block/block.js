import './style.scss';
import './editor.scss';

const { registerBlockType } = wp.blocks;
const RichText = wp.editor.RichText;

registerBlockType( 'cocoon-blocks/edit-block', {
    title: '編集できるブロック',
    icon: 'shield',
    category: 'common',
    attributes: {
        content: {
            source: 'children',
            selector: 'p'
        }
    },
    edit: function( props ) {
        return (
            <div className={ props.className }>
                <RichText
                    tagName='p'
                    className={ props.className }
                    onChange={ (content) => props.setAttributes({content}) }
                    value={ props.attributes.content }
                />
            </div>
        );
    },
    save: function( props ) {
        return (
            <div>
                <RichText.Content
                    tagName="p"
                    value={ props.attributes.content }
                />
            </div>
        );
    },
} );