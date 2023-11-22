<?php

/*
Plugin Name: Olena Blocks Set
Plugin URI: https://github.com/Maxim-us/olena-block-sets
Description: Set of Gutenberg blocks
Author: Marko Maksym
Version: 1.1.0
Author URI: https://markomaksym.com.ua
Plugin Starter Kit Name: WPP Generator v5.3.4
Plugin Starter Kit URL: https://markomaksym.com.ua/wp-plugin-skeleton-generator/
Plugin Starter Kit Author URL: https://markomaksym.com.ua/
*/

// Exit if accessed directly
if (!defined('ABSPATH')) exit;

/*
* Unique string - MXOBS
*/

/*
* Define MXOBS_PLUGIN_PATH
*
* E:\OpenServer\domains\my-domain.com\wp-content\plugins\olena-block-sets\olena-block-sets.php
*/
if (!defined('MXOBS_PLUGIN_PATH')) {

	define( 'MXOBS_PLUGIN_PATH', __FILE__ );

}

/*
* Define MXOBS_PLUGIN_URL
*
* Return http://my-domain.com/wp-content/plugins/olena-block-sets/
*/
if (!defined('MXOBS_PLUGIN_URL')) {

	define( 'MXOBS_PLUGIN_URL', plugins_url( '/', __FILE__ ) );

}

/*
* Define MXOBS_PLUGN_BASE_NAME
*
* 	Return olena-block-sets/olena-block-sets.php
*/
if (!defined( 'MXOBS_PLUGN_BASE_NAME')) {

	define( 'MXOBS_PLUGN_BASE_NAME', plugin_basename( __FILE__ ) );

}

/*
* Define MXOBS_TABLE_SLUG
*/
if (!defined('MXOBS_TABLE_SLUG')) {

	define( 'MXOBS_TABLE_SLUG', 'mxobs_mx_table' );

}

/*
* Define MXOBS_PLUGIN_ABS_PATH
* 
* E:\OpenServer\domains\my-domain.com\wp-content\plugins\olena-block-sets/
*/
if (!defined( 'MXOBS_PLUGIN_ABS_PATH')) {

	define( 'MXOBS_PLUGIN_ABS_PATH', dirname( MXOBS_PLUGIN_PATH ) . '/' );

}

/*
* Define MXOBS_PLUGIN_VERSION
*/
if (!defined('MXOBS_PLUGIN_VERSION')) {

	// version
	define( 'MXOBS_PLUGIN_VERSION', '1.0' );
	
}

/*
* Define MXOBS_MAIN_MENU_SLUG
*/
if (!defined('MXOBS_MAIN_MENU_SLUG')) {

	// version
	define( 'MXOBS_MAIN_MENU_SLUG', 'mxobs-olena-block-sets-main-page' );

}

/*
* Define MXOBS_SINGLE_TABLE_ITEM_MENU
*/
if (!defined( 'MXOBS_SINGLE_TABLE_ITEM_MENU')) {

	// single table item menu
	define( 'MXOBS_SINGLE_TABLE_ITEM_MENU', 'mxobs-olena-block-sets-single-page' );

}

/*
* Define MXOBS_CREATE_TABLE_ITEM_MENU
*/
if (!defined('MXOBS_CREATE_TABLE_ITEM_MENU')) {

	// table item menu
	define( 'MXOBS_CREATE_TABLE_ITEM_MENU', 'mxobs-olena-block-sets-create-item-page' );

}

/**
 * activation|deactivation
 */
require_once plugin_dir_path( __FILE__ ) . 'install.php';

/*
* Registration hooks
*/
// Activation
register_activation_hook( __FILE__, ['MXOBSBasisPluginClass', 'activate'] );

// Deactivation
register_deactivation_hook( __FILE__, ['MXOBSBasisPluginClass', 'deactivate'] );

/*
* Include the main MXOBSOlenaBlockSets class
*/
if (!class_exists('MXOBSOlenaBlockSets')) {

	require_once plugin_dir_path( __FILE__ ) . 'includes/final-class.php';

	/*
	* Translate plugin
	*/
	add_action( 'plugins_loaded', 'mxobs_translate' );

	function mxobs_translate()
	{

		load_plugin_textdomain( 'olena-blocks-set', false, dirname( plugin_basename( __FILE__ ) ) . '/languages/' );

	}

}
