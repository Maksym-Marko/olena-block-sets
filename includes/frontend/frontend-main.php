<?php

// Exit if accessed directly
if (!defined('ABSPATH')) exit;

class MXOBSFrontEndMain
{

    /*
    * Additional classes
    */
    public function additionalClasses()
    {

        // enqueue_scripts class
        mxobsRequireClassFileFrontend( 'enqueue-scripts.php' );

        MXOBSEnqueueScriptsFrontend::registerScripts();

    }

}

// Initialize
$initialize_frontend_class = new MXOBSFrontEndMain();

// include classes
$initialize_frontend_class->additionalClasses();
