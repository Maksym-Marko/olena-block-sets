<?php

// Exit if accessed directly
if (!defined('ABSPATH')) exit;

/*
* View class
*/
class MXOBSMxView
{

    public function __construct( ...$args )
    {
        
        $this->render( ...$args );

    }
    
    // render HTML
    public function render( $file, $data = NULL )
    {

        // view content
        if (file_exists( MXOBS_PLUGIN_ABS_PATH . "includes/admin/views/{$file}.php")) {

            // data from model
            $data = $data;

            require_once MXOBS_PLUGIN_ABS_PATH . "includes/admin/views/{$file}.php";

        } else { ?>

            <div class="notice notice-error is-dismissible">

                <p>The view file "<b>includes/admin/views/<?php echo esc_attr( $file ); ?>.php</b>" doesn't exists.</p>
 
            </div>
        <?php }

    }
    
}
