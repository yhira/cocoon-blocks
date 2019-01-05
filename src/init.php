<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since   1.0.0
 * @package CGB
 */
/**
 * Cocoon Blocks
 * @author: yhira
 * @link: https://wp-cocoon.com/
 * @license: http://www.gnu.org/licenses/gpl-2.0.html GPL v2 or later
 */


// // Exit if accessed directly.
// if ( !defined( 'ABSPATH' ) ) {
// 	exit;
// }

//個々でフックに対してis_admin()で条件分岐しているのは、このようにしないとwpForoフォーラム画面が真っ白になってしまうため
//何か不都合がありましたら以下まで。
//https://wp-cocoon.com/community/

/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * @uses {wp-editor} for WP editor styles.
 * @since 1.0.0
 */
// Hook: Frontend assets.
if (is_admin()) {
	add_action( 'enqueue_block_assets', 'cocoon_blocks_cgb_block_assets' );
}
function cocoon_blocks_cgb_block_assets() { // phpcs:ignore
	// Styles.
	wp_enqueue_style(
		'cocoon_blocks-cgb-style-css', // Handle.
		plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ), // Block style CSS.
		array( 'wp-editor' ) // Dependency to include the CSS after it.
		// filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.style.build.css' ) // Version: File modification time.
	);

	//Font Awesome
	if (apply_filters( 'cocoon_blocks_wp_enqueue_script_fontawesome', true )) {
		wp_enqueue_script(
			'cocoon_blocks-fontawesome5-js',
			'https://use.fontawesome.com/releases/v5.6.3/js/all.js',
			array(),
			'5.6.3',
			true
		);
	}
}


/**
 * Enqueue Gutenberg block assets for backend editor.
 *
 * @uses {wp-blocks} for block type registration & related functions.
 * @uses {wp-element} for WP Element abstraction — structure of blocks.
 * @uses {wp-i18n} to internationalize the block's text.
 * @uses {wp-editor} for WP editor styles.
 * @since 1.0.0
 */
// Hook: Editor assets.
if (is_admin()) {
	add_action( 'enqueue_block_editor_assets', 'cocoon_blocks_cgb_editor_assets' );
}
function cocoon_blocks_cgb_editor_assets() { // phpcs:ignore
	// Scripts.
	wp_enqueue_script(
		'cocoon_blocks-cgb-block-js', // Handle.
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ), // Block.build.js: We register the block here. Built with Webpack.
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ), // Dependencies, defined above.
		// filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.build.js' ), // Version: File modification time.
		true // Enqueue the script in the footer.
	);

	// Styles.
	wp_enqueue_style(
		'cocoon_blocks-cgb-block-editor-css', // Handle.
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ), // Block editor CSS.
		array( 'wp-edit-blocks' ) // Dependency to include the CSS after it.
		// filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.editor.build.css' ) // Version: File modification time.
	);
}

//Cocoonカテゴリーを追加
if (is_admin()) {
	add_filter( 'block_categories', 'add_cocoon_theme_block_categories', 10, 2 );
}
if ( !function_exists( 'add_cocoon_theme_block_categories' ) ):
function add_cocoon_theme_block_categories( $categories, $post ){
	return array_merge(
		$categories,
		array(
			array(
				'slug' => THEME_NAME.'-block',
        'title' => __( 'Cocoonブロック', THEME_NAME ),
        //'icon' => 'heart',
			),
			array(
				'slug' => THEME_NAME.'-layout',
        'title' => __( 'Cocoonレイアウト', THEME_NAME ),
        //'icon' => 'heart',
			),
		)
	);
}
endif;

// add_action( 'enqueue_block_editor_assets', function () {
//    wp_enqueue_style( 'my_plugin', plugins_url( 'assets/css/editor.css', __FILE__ ) );
//    wp_enqueue_script( 'my_plugin', plugins_url( 'assets/js/editor.js', __FILE__ ), [
//       'wp-element',
//       'wp-rich-text',
//       'wp-editor',
//    ] );
//    wp_localize_script( 'my_plugin', 'my_plugin_obj', [
//       'title' => 'My Plugin',
//       'class' => 'my-plugin',
//    ] );
// } );

require_once plugin_dir_path( __FILE__ ) . 'demo/test/block.php';
require_once plugin_dir_path( __FILE__ ) . 'demo/balloon/block.php';
require_once plugin_dir_path( __FILE__ ) . 'demo/blank-box-demo/block.php';
require_once plugin_dir_path( __FILE__ ) . 'demo/test-as-shortcode-text/block.php';
require_once plugin_dir_path( __FILE__ ) . 'demo/test-severside-as-shortcode-input/block.php';
require_once plugin_dir_path( __FILE__ ) . 'demo/test-get-id/block.php';