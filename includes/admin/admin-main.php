<?php

// Exit if accessed directly
if (!defined('ABSPATH')) exit;

class MXOBSAdminMain
{

    // list of model names used in the plugin
    public $modelsCollection = [
        'MXOBSMainAdminModel'
    ];

    /*
    * Additional classes
    */
    public function additionalClasses()
    {

        // enqueue_scripts class
        // mxobsRequireClassFileAdmin( 'enqueue-scripts.php' );

        // MXOBSEnqueueScripts::registerScripts();

    }

    /*
    * Models Connection
    */
    public function modelsCollection()
    {

        // require model file
        foreach ($this->modelsCollection as $model) {            
            mxobsUseModel( $model );
        }        

    }

    /**
    * registration ajax actions
    */
    public function registrationAjaxActions()
    {

        // ajax requests to main page
        MXOBSMainAdminModel::wpAjax();

    }

    /*
    * Routes collection
    */
    public function routesCollection()
    {

    }

}

// Initialize
$adminClassInstance = new MXOBSAdminMain();

// include classes
$adminClassInstance->additionalClasses();

// include models
$adminClassInstance->modelsCollection();

// ajax requests
$adminClassInstance->registrationAjaxActions();

// include controllers
$adminClassInstance->routesCollection();