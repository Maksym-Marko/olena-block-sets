<?php

// Exit if accessed directly
if (!defined('ABSPATH')) exit;

// require Route-Registrar.php
require_once MXOBS_PLUGIN_ABS_PATH . 'includes/core/Route-Registrar.php';

/*
* Routes class
*/
class MXOBSRoute
{
    
    public static function get( ...$args )
    {

        return new MXOBSRouteRegistrar( ...$args );

    }
    
}
