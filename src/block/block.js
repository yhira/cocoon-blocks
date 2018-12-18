/**
 * BLOCK: cocoon-blocks
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

const { registerBlockType } = wp.blocks;

registerBlockType( 'cocoon-blocks/block', {
    title: 'カスタムブロック1',
    icon: 'shield',
    category: 'common',
    edit( props ) {
        return (
            <div className={ props.className }>
                <p>エディターでの表示状態です。</p>
            </div>
        );
    },
    save( props ) {
        return (
            <div>
                <p>保存時の表示</p>
            </div>
        );
    },
} );