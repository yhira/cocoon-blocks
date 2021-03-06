<?php
/**
 * Plugin Name: Cocoon Blocks
 * Plugin URI: https://wp-cocoon.com/cocoon-blocks/
 * Description: Cocoonテーマ専用のブロックエディター（Gutenberg）対応プラグイン
 * Author: わいひら
 * Author URI: https://nelog.jp/
 * Version: 0.1.2
 * Text Domain: cocoon-blocks
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( !defined( 'ABSPATH' ) ) exit;

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';

//自動アップデート
require_once plugin_dir_path( __FILE__ ) . 'plugin-update-checker/plugin-update-checker.php';
$CocoonBlocksUpdateChecker = Puc_v4_Factory::buildUpdateChecker(
    'https://raw.githubusercontent.com/yhira/cocoon-blocks/master/update-info.json',
    __FILE__,
    'cocoon-blocks'
);


