<?php

// Exit if accessed directly
if (!defined('ABSPATH')) exit;

class MXOBSMainAdminController extends MXOBSController
{

    protected $modelInstance;

    public function __construct()
    {

        $this->modelInstance = new MXOBSMainAdminModel();
        
    }
    
    public function index()
    {

    }
}
