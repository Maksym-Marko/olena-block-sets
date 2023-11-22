<?php

// Exit if accessed directly
if (!defined('ABSPATH')) exit;

/**
 * Here you can register your own custom blocks.
 *
 * @package Olena Blocks Set
 * @author Maksym Marko <support@markomaksym.com.ua>
 *
 * @link https://markomaksym.com.ua/
 */

/**
 * The Olena Custom Blocks class.
 *
 * @since 1.0.0
 */
class MXOBSGutenberg
{

    /**
     * Register your own block types for the Olena Blocks Set.
     *
     * @since 1.0.0
     * 
     * @return void
     */
    public function __construct()
    {
                
        /**
         * Animated Section Horizontal.
         * */
        add_action('init', array($this, 'animated_section_horizontal'));

        /**
         * Animated Box.
         * */
        add_action('init', array($this, 'animated_box'));

        /**
         * Animated Section Vertical.
         * */
        add_action('init', array($this, 'animated_section_vertical'));

        /**
         * Responsive Box.
         * */
        add_action('init', array($this, 'responsive_box'));

        /**
         * Floating Box.
         * */
        add_action('init', array($this, 'floating_box'));

        /**
         * Responsive spacer.
         * */
        add_action('init', array($this, 'responsive_spacer'));

        /**
         * Content Slider.
         * */
        add_action('init', array($this, 'content_slider'));
    }
    
    /**
     * Animated Section Horizontal custom block type.
     *
     * @since 1.0.0
     * 
     * @return void Register a animated section horizontal custom block.
     */
    public function animated_section_horizontal()
    {

        register_block_type(MXOBS_PLUGIN_ABS_PATH . 'includes/gutenberg/custom-blocks/animated-section-horizontal');
    }

    
    /**
     * Animated Box custom block type.
     *
     * @since 1.0.0
     * 
     * @return void Register an animated box custom block.
     */
    public function animated_box()
    {

        register_block_type(MXOBS_PLUGIN_ABS_PATH . 'includes/gutenberg/custom-blocks/animated-box');
    }

    /**
     * Animated Section Vertical custom block type.
     *
     * @since 1.0.0
     * 
     * @return void Register a animated section vertical custom block.
     */
    public function animated_section_vertical()
    {

        register_block_type(MXOBS_PLUGIN_ABS_PATH . 'includes/gutenberg/custom-blocks/animated-section-vertical');
    }

    /**
     * Responsive Box custom block type.
     *
     * @since 1.0.0
     * 
     * @return void Register a responsive box custom block.
     */
    public function responsive_box()
    {

        register_block_type(MXOBS_PLUGIN_ABS_PATH . 'includes/gutenberg/custom-blocks/responsive-box');
    }

    /**
     * Floating box custom block type.
     *
     * @since 1.0.0
     * 
     * @return void Register a floating box custom block.
     */
    public function floating_box()
    {

        register_block_type(MXOBS_PLUGIN_ABS_PATH . 'includes/gutenberg/custom-blocks/floating-box');
    }

    /**
     * Responsive spacer custom block type.
     *
     * @since 1.0.0
     * 
     * @return void Register a responsive spacer custom block.
     */
    public function responsive_spacer()
    {

        register_block_type(MXOBS_PLUGIN_ABS_PATH . 'includes/gutenberg/custom-blocks/responsive-spacer');
    }

    /**
     * Content slider custom block type.
     *
     * @since 1.0.0
     * 
     * @return void Register a content slider custom block.
     */
    public function content_slider()
    {

        register_block_type(MXOBS_PLUGIN_ABS_PATH . 'includes/gutenberg/custom-blocks/content-slider');
    }
}

new MXOBSGutenberg();
