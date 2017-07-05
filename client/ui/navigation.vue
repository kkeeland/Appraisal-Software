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
                            <span class="clear"> <span class="block m-t-xs"> <strong class="font-bold" style="font-size:1.5em;">Terry Earl</strong>
                                             </span> <span class="text-muted text-xs block">Owner - Tuscon <b class="caret"></b></span> </span>
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
                        {{namelabel}}
                    </div>
                </li>
    
                <li class="nav-hover">
                    <router-link to="dashboard"><i class="fa fa-th-large icon-label"></i><span class="nav-label">Dashboard</span></router-link>
                </li>
                <li class="nav-hover">
                    <router-link to="claim"><i class="fa fa-edit icon-label"></i> <span class="nav-label" data-i18n="nav.layouts">New Assignment</span> </router-link>
                </li>
                <li class="nav-hover">
                    <router-link to="billingdashboard"><i class="fa fa-money icon-label"></i> <span class="nav-label" data-i18n="nav.graphs">Billing Reports</span></router-link>
                    <!-- <ul class="nav nav-second-level collapse in" id="billingmenu">
                            <li class=""><a href="graphFlot">Billing Reports</a></li>
                        </ul> -->
                </li>
                <li class="nav-hover">
                    <a href="#"><i class="fa fa-edit icon-label"></i> <span class="nav-label " data-i18n="nav.mailbox">Add New </span></a>
                    <ul class="nav nav-second-level collapse in">
                        <li class="nav-hover"><router-link to="emailCompose">Add Insurance Company</router-link></li>
                        <li class="nav-hover"><a class="nav-label" href="emailView">Add New Appraiser</a></li>
                        <li class="nav-hover"><a class="nav-label" href="emailCompose">Add New Shop</a></li>
                        <li class="nav-hover"><a class="nav-label" href="emailTemplates">Add New Adjuster</a></li>
                    </ul>
                </li>
    
    
    
                <li class="nav-hover">
                    <router-link to="dashboard"><i class="fa fa-database nav-label"></i> <span class="nav-label" data-i18n="nav.metrics">Settings</span> </router-link>
                </li>
    
            </ul>
    
    
        </div>
    </nav>
</template>



<script>
    export default {
        name: 'navigation',
        data() {
            return {
                namelabel: "TE"
            }
        },
        methods: {
    
        }
    
    
    };
</script>
