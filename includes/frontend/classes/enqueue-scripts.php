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
                'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.css',
                array(),
                MXOBS_PLUGIN_VERSION
            );

            // owl.carousel.min.js
            wp_enqueue_script(
                'olena-sets-owl-carousel-script',
                'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js',
                array('jquery'),
                MXOBS_PLUGIN_VERSION,
                true
            );

            /**
             * Lenis
             * */
            wp_enqueue_script(
                'olena-sets-lenis-script',
                'https://cdn.jsdelivr.net/gh/studio-freight/lenis@1.0.28/bundled/lenis.min.js',
                array(),
                MXOBS_PLUGIN_VERSION,
                true
            );

            /**
             * GSAP
             * */
            wp_enqueue_script(
                'olena-sets-gsap-script',
                'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js',
                MXOBS_PLUGIN_VERSION,
                '3.12.2',
                true
            );

            /**
             * scrollTrigger
             * */
            wp_enqueue_script(
                'olena-sets-scrolltrigger-script',
                'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js',
                array('olena-sets-gsap-script'),
                '3.12.2',
                true
            );

            /**
             *  Frontend Styles.
             * */
            wp_enqueue_style(
                'olena-frontend-style',
                MXOBS_PLUGIN_URL . 'includes/frontend/assets/css/frontend.css',
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
             * Editor Styles.
             * */
            wp_enqueue_style(
                'olena-editor-style',
                MXOBS_PLUGIN_URL . 'includes/frontend/assets/css/editor.css',
                array(),
                MXOBS_PLUGIN_VERSION
            );

            /**
             * Editor Scripts.
             * */
            wp_enqueue_script(
                'olena-sets-editor-script',
                MXOBS_PLUGIN_URL . 'includes/frontend/assets/js/editor.js',
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
                'olena-editor-frontend-style',
                MXOBS_PLUGIN_URL . 'includes/frontend/assets/css/editor-frontend.css',
                array(),
                MXOBS_PLUGIN_VERSION
            );

        }

}

