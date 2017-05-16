<template>
    <!-- Start of invoice tab -->
    <div id="invoice" class="tab-pane fade">
    
    
        
        <h2 class="h2heading styleh2">Invoice: 115122ALO 
       <invoicemenu></invoicemenu>
    </h2>
    
    
        <!-- Start of Row 1a -->
        <div class="row spacethebottom">
    
            <div class="form-group">
                <label class="col-md-1 control-label">Invoice Date</label>
                <div class="col-md-3">
                    <div class="input-group date">
                        <input type="text" id="date_recieved" :value="now" name="date_recieved" required="" data-schema-key="date_recieved" class="form-control datepicker"><span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
                    </div>
                </div>
            </div>
    
    
    
        </div>
        <!-- End of Row 1a -->
    
        <!-- Start of Row -->
    
        <div class="row spacethebottom">
    
    
            <div class="form-group">
                <label class="col-md-12 control-label">Attention Line (Prints to Invoice)</label>
                <div class="col-md-6">
                    <input type="text" class="form-control" id="attention" />
                    <a href="#">Add Adjuster Name</a>
                </div>
            </div>
    
    
    
    
        </div>
    
        <!-- End of Row -->
    
        <!-- Empty Row -->
        <div class="row spacethebottom">
        </div>
        <!-- End of Empty Row -->
    
    
        <!-- start of row 9-->
        <div class="row spacethebottom">
    
    
            <div class="form-group">
                <label class="col-md-12 control-label">Other Description - Prints to Invoice</label>
                <div class="col-md-6">
                    <textarea rows="4" cols="73" name="comment" form="usrform"></textarea>
                </div>
            </div>
    
    
        </div>
        <!-- end of row 9 -->
    
        <!-- Empty Row -->
        <div class="row spacethebottom">
        </div>
        <!-- End of Empty Row -->
        <!-- start of row 9-->
        <div class="row spacethebottom">
    
    
    
    
    
    
            <div class="form-group">
                <label class="col-md-12 control-label">Predefined Services</label>
    
                <select id="example-getting-started" multiple="multiple">
                                                    <option value="cheese"><i class="glyphicon glyphicon-calendar">Heavy Equipment</i></option>
                                                    <option value="tomatoes">Example 2</option>
                                                    <option value="Mozzarella">Example 3</option>
                                                    <option value="Mushrooms">Example 4</option>
                                                    <option value="Pepperoni">Example 5</option>
                                                    <option value="Onions">Example 6</option>
                                                  </select>
            </div>
        </div>
        <!-- end of row 9-->
    
        <!-- Start of Row -->
    
        <h2 class="h2heading">Invoice Fees</h2>
        <hr>
        <div class="row spacethebottom">
    
    
            <div class="form-group">
                <label class="col-md-1 control-label">Service Fee</label>
                <div class="col-md-2">
                    <input type="text" class="form-control" id="servicefee" />
                </div>
            </div>
    
            <div class="form-group">
                <label class="col-md-1 control-label">Time & Expense</label>
                <div class="col-md-2">
                    <input type="text" class="form-control" id="timeexpensetotal" />
                </div>
            </div>
    
    
    
        </div>
    
        <!-- End of Row -->
    
        <!-- Start of Row 2 -->
    
        <div class="row spacethebottom">
    
    
            <div class="form-group">
                <label class="col-md-1 control-label">Mileage</label>
                <div class="col-md-2">
                    <input type="text" class="form-control" id="milecalc" />
                    <a href="#">Mileage Calculator</a>
                </div>
            </div>
    
            <div class="form-group">
                <label class="col-md-1 control-label">Other Cost</label>
                <div class="col-md-2">
                    <input type="text" class="form-control" id="othercost" />
                </div>
                - (Not Calculated as part of Appraiser Earnings)
            </div>
    
        </div>
    
        <!-- End of Row 2 -->
    
        <!-- Start of Row 2 -->
    
        <div class="row spacethebottom">
    
    
            <div class="form-group">
                <div class="col-md-6">
                    <input type="checkbox" name="Completed" value="completed"> Ready for Billing<br>
                    <input type="checkbox" name="Cancelled" value="cancelled" checked="checked">Invoice Paid &nbsp;
                </div>
            </div>
        </div>
    
    
        <!-- Empty Row -->
        <div class="row spacethebottom">
        </div>
        <!-- End of Empty Row -->
    
    
        <div class="row spacethebottom">
            <div class="form-group">
                <h3 style="margin-left:15px;">Total Invoice</h3>
                <div class="col-md-2">
                    <input type="text" class="form-control" id="locationaddress" value="$115.00" readonly="true" />
                </div>
            </div>
        </div>
    
    
        <!-- End of Row 2 -->
    
    
    
    
    
    
    
    
    </div>
    <!-- end of invoice tab-->
</template>

<script>
    export default {
        meteor: {
            data: {
                now() {
                    var now = moment().format('MM-DD-YYYY');
                    return now;
                }
            }
        }
    
    
    };
</script>
 