<template>
    <div class="wrapper wrapper-content">
        <div class="row">
            <div class="col-lg-12 animated fadeInLeft">
                <div class="mail-box-header">
                   <div class="pull-right tooltip-demo">
                            <a @click="goback" class="btn btn-danger btn-sm" data-toggle="tooltip" data-placement="top" title="Discard email"><i class="fa fa-times"></i> GO BACK</a>
                        </div> 
                    <h2>
                        Compose Email
                    </h2>
                </div>
                <div class="mail-box">
    
    
                    <div class="mail-body">
    
                        <form class="form-horizontal" method="get">
                            <div class="form-group"><label class="col-sm-2 control-label">To:</label>
    
                                <div class="col-sm-10"><input type="text" class="form-control" value="alex.smith@amica.com"></div>
                            </div>
                            <div class="form-group"><label class="col-sm-2 control-label">Subject:</label>
    
                                <div class="col-sm-10"><input type="text" class="form-control" value="Claim Number: 115122ALO"></div>
                            </div>
                        </form>
    
                    </div>
    
                    <div class="mail-text h-200">
    
                        <div class="summernote">
                            <h3>Hello Jonathan! </h3>
                            dummy text of the printing and typesetting industry. <strong>Lorem Ipsum has been the industry's</strong> standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                            book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                            and more recently with
                            <br/>
                            <br/>
    
    
                        </div>
                        <div class="clearfix"></div>
                    </div>
                    <div class="mail-body text-right tooltip-demo">
                        <a href="/mailbox" class="btn btn-sm btn-primary" data-toggle="tooltip" data-placement="top" title="Send"><i class="fa fa-reply"></i> Send</a>
                    </div>
                    <div class="clearfix"></div>
    
    
    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { RouterFactory } from 'meteor/akryum:vue-router2'

    export default {
        mounted() {
            // Initialize summernote plugin
            $('.summernote').summernote();
        }, 
        methods: {
            goback () {
                this.$router.go(-1);
            }
        }
    
    };
</script>
