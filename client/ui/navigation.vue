<template>
    <nav class="navbar-static-side" role="navigation">
        <div class="sidebar-collapse">
    
    
            <a class="close-canvas-menu"><i class="fa fa-times"></i></a>
            <ul class="nav metismenu" id="side-menu">
                <li class="nav-header">
    
    
                    <div class="dropdown profile-element">
                        <img height="70px" src="http://www.iasclaimsgroup.com/wp-content/uploads/2013/10/logo.png">
                        <br />
                        <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                            <span class="clear"> <span class="block m-t-xs"> <strong class="font-bold" style="font-size:1.5em;">Kevin Keeland</strong>
                                 </span> <span class="text-muted text-xs block">Appraiser <b class="caret"></b></span> </span>
                        </a>
                        <ul class="dropdown-menu animated fadeInRight m-t-xs">
                            <li><a href="profile">Profile</a></li>
                            <li><a href="contacts">Contacts</a></li>
                            <li><a href="mailbox">Mailbox</a></li>
                            <li class="divider"></li>
                            <li><a href="login">Logout</a></li>
                        </ul>
    
                    </div>
    
                    <div class="logo-element">
                        TE
                    </div>
                </li>
    
                <li>
                    <a href="dashboard"><i class="fa fa-th-large"></i> <span class="nav-label">Dashboard</span></a>
                </li>
                <li>
                    <a href=""><i class="fa fa-edit"></i> <span class="nav-label" data-i18n="nav.layouts">New Assignment</span> </a>
                </li>
                <li>
                    <a href="#"><i class="fa fa-money"></i> <span class="nav-label" data-i18n="nav.graphs">Billing Dashboard</span><span class="fa arrow"></span></a>
                    <ul class="nav nav-second-level collapse">
                        <li class=""><a href="graphFlot">Billing Reports</a></li>
                    </ul>
                </li>
                <li class="">
                    <a href="#"><i class="fa fa-edit"></i> <span class="nav-label" data-i18n="nav.mailbox">Add New </span></a>
                    <ul class="nav nav-second-level collapse">
                        <li><a href="mailbox">Add Insurance Company</a></li>
                        <li><a href="emailView">Add New Appraiser</a></li>
                        <li><a href="emailCompose">Add New Shop</a></li>
                        <li><a href="emailTemplates">Add New Adjuster</a></li>
                    </ul>
                </li>
    
                <li>
                    <a href="metrics"><i class="fa fa-database"></i> <span class="nav-label" data-i18n="nav.metrics">Settings</span> </a>
                </li>
    
            </ul>
    
    
        </div>
    </nav>
</template>



<script>
    export default {
        name: 'navigation'
    };

</script>
