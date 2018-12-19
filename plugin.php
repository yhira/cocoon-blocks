<?php
/**
 * Plugin Name: Cocoon Blocks
 * Plugin URI: https://wp-cocoon.com/cocoon-blocks/
 * Description: Cocoon Blocks — is a Gutenberg plugin created via create-guten-block.
 * Author: わいひら
 * Author URI: https://nelog.jp/
 * Version: 0.0.1
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
