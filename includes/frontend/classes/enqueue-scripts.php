<?php

// Exit if accessed directly
if (!defined('ABSPATH')) exit;

class MXOBSEnqueueScriptsFrontend
{

    /*
    * Registration of styles and scripts
    */
    public static function registerScripts()
    {

        add_action('enqueue_block_assets', ['MXOBSEnqueueScriptsFrontend', 'olena_sets_editor_frontend_assets']);
        add_action('enqueue_block_editor_assets', ['MXOBSEnqueueScriptsFrontend', 'olena_sets_editor_assets']);
        add_action('wp_enqueue_scripts', ['MXOBSEnqueueScriptsFrontend', 'olena_sets_frontend_assets']);

    }

        public static function olena_sets_frontend_assets()
        {

            /**
             *  Owl Carousel.
             * */
            // owl.carousel.min.css
            wp_enqueue_style(
                'olena-sets-owl-carousel-style',
                MXOBS_PLUGIN_URL . 'includes/gutenberg/assets/packages/owl-carousel/owl.carousel.min.css',
                array(),
                MXOBS_PLUGIN_VERSION
            );

            // owl.carousel.min.js
            wp_enqueue_script(
                'olena-sets-owl-carousel-script',
                MXOBS_PLUGIN_URL . 'includes/gutenberg/assets/packages/owl-carousel/owl.carousel.min.js',
                array('jquery'),
                MXOBS_PLUGIN_VERSION,
                true
            );

            /**
             * Lenis
             * */
            wp_enqueue_script(
                'olena-sets-lenis-script',
                MXOBS_PLUGIN_URL . 'includes/gutenberg/assets/packages/lenis/lenis.min.js',
                array(),
                MXOBS_PLUGIN_VERSION,
                true
            );

            /**
             * GSAP
             * */
            wp_enqueue_script(
                'olena-sets-gsap-script',
                MXOBS_PLUGIN_URL . 'includes/gutenberg/assets/packages/gsap/gsap.min.js',
                MXOBS_PLUGIN_VERSION,
                '3.12.2',
                true
            );

            /**
             * scrollTrigger
             * */
            wp_enqueue_script(
                'olena-sets-scrolltrigger-script',
                MXOBS_PLUGIN_URL . 'includes/gutenberg/assets/packages/gsap/scrollTrigger.min.js',
                array('olena-sets-gsap-script'),
                '3.12.2',
                true
            );

            /**
             *  Frontend Styles.
             * */
            wp_enqueue_style(
                'olena-sets-frontend-style',
                MXOBS_PLUGIN_URL . 'includes/gutenberg/assets/css/frontend.css',
                array(),
                MXOBS_PLUGIN_VERSION
            );

            /**
             *  Frontend Scripts.
             * */
            wp_enqueue_script(
                'olena-sets-frontend-script',
                MXOBS_PLUGIN_URL . 'includes/gutenberg/assets/js/frontend.min.js',
                array('jquery', 'olena-sets-scrolltrigger-script'),
                MXOBS_PLUGIN_VERSION,
                true
            );
            
        }

        public static function olena_sets_editor_assets()
        {

            /**
             * Editor Scripts.
             * */
            wp_enqueue_script(
                'olena-sets-editor-script',
                MXOBS_PLUGIN_URL . 'includes/gutenberg/assets/js/editor.js',
                array('wp-blocks'),
                MXOBS_PLUGIN_VERSION
            );

        }

        public static function olena_sets_editor_frontend_assets()
        {
           
            /**
             * Editor/Frontend Styles.
             * */
            wp_enqueue_style(
                'olena-sets-editor-frontend-style',
                MXOBS_PLUGIN_URL . 'includes/gutenberg/assets/css/editor-frontend.css',
                array(),
                MXOBS_PLUGIN_VERSION
            );

        }

}

