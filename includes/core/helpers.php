<?php

// Exit if accessed directly
if (!defined('ABSPATH')) exit;

/*
* Require class for admin panel
*/
function mxobsRequireClassFileAdmin( $file ) {

    require_once MXOBS_PLUGIN_ABS_PATH . 'includes/admin/classes/' . $file;

}


/*
* Require class for frontend panel
*/
function mxobsRequireClassFileFrontend( $file ) {

    require_once MXOBS_PLUGIN_ABS_PATH . 'includes/frontend/classes/' . $file;

}

/*
* Require a Model
*/
function mxobsUseModel( $model ) {

    require_once MXOBS_PLUGIN_ABS_PATH . 'includes/admin/models/' . $model . '.php';

}

/*
* Debugging
*/
function mxobsDebugToFile( $content ) {

    $content = mxobsContentToString( $content );

    $path = MXOBS_PLUGIN_ABS_PATH . 'mx-debug' ;

    if (!file_exists($path)) {

        mkdir( $path, 0777, true );

        file_put_contents( $path . '/mx-debug.txt', $content );

    } else {

        file_put_contents( $path . '/mx-debug.txt', $content );

    }

}
    // pretty debug text to the file
    function mxobsContentToString( $content ) {

        ob_start();

        var_dump( $content );

        return ob_get_clean();

    }

/*
* Manage posts columns. Add column to position
*/
function mxobsInsertNewColumnToPosition( array $columns, int $position, array $newColumn ) {

    $chunkedArray = array_chunk( $columns, $position, true );

    $result = array_merge( $chunkedArray[0], $newColumn, $chunkedArray[1] );

    return $result;

}

/*
* Redirect from admin panel
*/
function mxobsAdminRedirect( $url ) {

    if (!$url) return;

    add_action( 'admin_footer', function() use ( $url ) {
        echo "<script>window.location.href = '$url';</script>";
    } );

}
