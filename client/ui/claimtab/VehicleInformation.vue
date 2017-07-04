<template>
    <div id="vehicle" class="tab-pane fade">
    
        <h2 class="h2heading styleh2">Vehicle Information</h2>
        <!-- Start of Tab -->
        <div id="vehicle" class="collapse in">
    
            <!-- Start of Row 1a -->
    
            <div class="row spacethebottom">
    
                <div class="form-group">
                    <label class="col-md-1 control-label">Vehicle Year</label>
                    <div class="col-md-1">
                        <input type="text" class="form-control" id="vehicleyear"/>
                    </div>
                </div>
    
                <div class="form-group">
                    <label class="col-md-1 control-label">Make</label>
                    <div class="col-md-2">
                        <input type="text" class="form-control" id="make" />
                    </div>
                </div>
    
                <div class="form-group">
                    <label class="col-md-1 control-label">Model</label>
                    <div class="col-md-2">
                       <input type="text" class="form-control" id="model" />
                    </div>
                </div>
    
                <div class="form-group">
                    <label class="col-md-1 control-label">License plate</label>
                    <div class="col-md-2">
                      <input type="text" class="form-control" id="licplate" />
                    </div>
                </div>
    
            </div>
    
            <!-- End of Row 1a -->
    
            <!-- Start of Row 1b -->
    
            <div class="row spacethebottom">
    
                <div class="form-group">
                    <label class="col-md-1 control-label">Vehicle VIN</label>
                    <div class="col-md-3">
                        <input type="text" class="form-control" id="vinnumber" />
                    </div>
                </div>
    
                <div class="form-group">
                    <label class="col-md-1 control-label">Odometer</label>
                    <div class="col-md-2">
                       <input type="text" class="form-control" id="odometer" />
                    </div>
                </div>
    
                <div class="form-group">
                    <label class="col-md-1 control-label">Vehicle Color</label>
                    <div class="col-md-2">
                        <input type="text" class="form-control" id="vehiclecolor" />
                    </div>
                </div>
    
            </div>
    
            <!-- End of Row 1b -->
    
            <!-- Start of Row 1c -->
    
            <div class="row spacethebottom">
    
    
                <div class="form-group">
                    <label class="col-md-1 control-label">Vehicle Location</label>
                    <div class="col-md-3">
                       <input type="text" class="form-control" id="vehiclelocation" />
                    </div>
                </div>
    
                <div class="form-group">
                    <label class="col-md-1 control-label">Location Type</label>
                    <div class="col-md-3">
                        <select class="form-control" id="locationtype">
                        <option>Residence</option>
                        <option>Shop</option>
                        <option>Insurance Yard</option>
                        <option>Tow Yard</option>
                        </select>
                    </div>
                </div>
    
            </div>
    
            <!-- End of Row 1c -->
    
            <!-- Start of Row 1d -->
    
            <div class="row spacethebottom">
    
    
                <div class="form-group">
                    <label class="col-md-1 control-label">Vehicle Owner</label>
                    <div class="col-md-3">
                        <input type="text" class="form-control" id="vehicleowner" />
                    </div>
                </div>
    
                <div class="form-group">
                    <label class="col-md-1 control-label">Location Address</label>
                    <div class="col-md-5">
                         <input type="text" class="form-control" id="locationaddress" />
                    </div>
                </div>
    
            </div>
    
            <!-- End of Row 1d -->
    
            <!-- start of row 3 -->
                <h2 class="h2heading styleh2">Shop's Information</h2>
            <div id="shopinformation">
                <div class="row spacethebottom">
    
                    <div class="form-group">
                        <label class="col-md-1 control-label">Name</label>
                        <div class="col-md-3">
                            <input type="text" class="form-control" id="shopname" />
                        </div>
                    </div>
    
                    <div class="form-group">
                        <label class="col-md-1 control-label">Work Phone</label>
                        <div class="col-md-3">
                            <input type="text" class="form-control" v-mask="'999-999-9999'" id="shopworkph" />
                        </div>
                    </div>
                </div>
                <!-- end of row 3 -->
    
    
    
                <!-- start of row 3a -->
                <div class="row spacethebottom">
    
                    <div class="form-group">
                        <label class="col-md-1 control-label">Address</label>
                        <div class="col-md-4">
                              <input type="text" class="form-control" id="shopaddress" />
                        </div>
                    </div>
    
                    <div class="form-group">
                        <label class="col-md-1 control-label">Suite/Apt</label>
                        <div class="col-md-2">
                             <input type="text" class="form-control" id="address2shop" />
                        </div>
                    </div>
    
                    <div class="form-group">
                        <label class="col-md-1 control-label">City</label>
                        <div class="col-md-3">
                            <input type="text" class="form-control" id="shopcity" />
                        </div>
                    </div>
    
    
                </div>
                <!-- end of row 3a -->
    
    
    
                <!-- start of row 4 -->
                <div class="row spacethebottom">
    
                    <div class="form-group">
                        <label class="col-md-1 control-label">State</label>
                        <div class="col-md-3">
                            <input type="text" class="form-control" id="selectstate" />
                        </div>
                    </div>
    
                    <div class="form-group">
                        <label class="col-md-1 control-label">Postal Code</label>
                        <div class="col-md-3">
                             <input type="text" class="form-control" id="shopzip" />
                        </div>
                    </div>
    
                    <div class="form-group">
                        <label class="col-md-1 control-label">Shop's Email</label>
                        <div class="col-md-3">
                             <input type="text" class="form-control" id="shopsemail" />
                        </div>
                    </div>
    
    
                </div>
                <!-- end of row 4 -->
            </div>
            <!-- end of collapse -->
    
            <!-- start of row 5 -->
                <h2 class="h2heading styleh2">Other Location Information</h2>
            
            <div id="otherinformation">
                <div class="row spacethebottom">
    
                    <div class="form-group">
                        <label class="col-md-1 control-label">Name</label>
                        <div class="col-md-3">
                            <input type="text" class="form-control" id="shopname" />
                        </div>
                    </div>
    
                    <div class="form-group">
                        <label class="col-md-1 control-label">Work Phone</label>
                        <div class="col-md-3">
                            <input type="text" class="form-control" v-mask="'999-999-9999'" id="shopworkph" />
                        </div>
                    </div>
                </div>
                <!-- end of row 3 -->
    
    
    
                <!-- start of row 3a -->
                <div class="row spacethebottom">
    
                    <div class="form-group">
                        <label class="col-md-1 control-label">Address</label>
                        <div class="col-md-4">
                              <input type="text" class="form-control" id="shopaddress" />
                        </div>
                    </div>
    
                    <div class="form-group">
                        <label class="col-md-1 control-label">Suite/Apt</label>
                        <div class="col-md-2">
                             <input type="text" class="form-control" id="address2shop" />
                        </div>
                    </div>
    
                    <div class="form-group">
                        <label class="col-md-1 control-label">City</label>
                        <div class="col-md-3">
                            <input type="text" class="form-control" id="shopcity" />
                        </div>
                    </div>
    
    
                </div>
                <!-- end of row 3a -->
    
    
    
                <!-- start of row 4 -->
                <div class="row spacethebottom">
    
                    <div class="form-group">
                        <label class="col-md-1 control-label">State</label>
                        <div class="col-md-3">
                            <input type="text" class="form-control" id="selectstate" />
                        </div>
                    </div>
    
                    <div class="form-group">
                        <label class="col-md-1 control-label">Postal Code</label>
                        <div class="col-md-3">
                             <input type="text" class="form-control" id="shopzip" />
                        </div>
                    </div>
    
                    <div class="form-group">
                        <label class="col-md-1 control-label">Shop's Email</label>
                        <div class="col-md-3">
                             <input type="text" class="form-control" id="shopsemail" />
                        </div>
                    </div>
    
    
                </div>
                <!-- end of row 4 -->
            </div>
            <!-- end of collapse -->
    
            <!-- start of row 8 -->
                <h2 class="h2heading styleh2">Facts of Loss</h2>
            <div id="factsofloss">
                <div class="row spacethebottom">
    
    
    
                    <div class="form-group">
                        <label class="col-md-1 control-label">Areas of Damage</label>
                        <div class="col-md-10">
                            <input type="checkbox" name="Front End" value="front"> Front End &nbsp;
                            <input type="checkbox" name="Rear End" value="rear" checked="checked"> Rear End &nbsp;
                            <input type="checkbox" name="Left Side" value="left"> Left Side &nbsp;
                            <input type="checkbox" name="Right Side" value="right" checked="checked"> Right Side <br>
                            <input type="checkbox" name="Undercarriage" value="undercarriage"> Undercarriage &nbsp;
                            <input type="checkbox" name="Fire" value="fire"> Fire &nbsp;
                            <input type="checkbox" name="Roll Over" value="roll over"> Roll over &nbsp;
                            <input type="checkbox" name="Vandalism" value="vandalism"> Vandalism &nbsp;
                        </div>
                    </div>
    
    
                </div>
                <!-- end of row 8 -->
                <!-- start of row 9-->
                <div class="row spacethebottom">
    
    
                    <div class="form-group">
                        <label class="col-md-1 control-label">Summary of Loss</label>
                        <div class="col-md-5">
                            <textarea rows="4" cols="50" name="comment" form="usrform"></textarea>
                        </div>
                    </div>
    
    
                    <div class="form-group">
                        <label class="col-md-1 control-label">Special Instructions</label>
                        <div class="col-md-4">
                            <textarea rows="4" cols="50" name="comment" form="usrform"></textarea>
                        </div>
                    </div>
    
    
                </div>
                <!-- end of row 9 -->
    
    
    
            </div>
            <!-- end of collapse -->
    
    
            <!-- Start of index number row -->
    
            <div class="row spacethebottom">
    
                <!-- Is there a UNIQUE ID yet? if SO... show it -->
    
            
    
                <div class="form-group">
                    <label class="col-md-1 control-label">Index Number</label>
                    <div class="col-md-2">
                       <input type="text" class="form-control" id="indexnumber" />
                    </div>
                </div>
    
                <!-- Else show NO ID YET-->

    
                <!-- end of Unique ID IF Statement -->
    
            </div>
            <!-- end of index number row -->
    
            <!-- start of button -->
    
            <div class="row spacethebottom">
                <div class="col-md-3">
                    <div class="form-group">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
    
            <!-- end of button -->
    
        </div>
    
    </div>
    <!-- end of vehicle tab -->
</template>
