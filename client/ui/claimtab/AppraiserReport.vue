<template>
    <!-- Start of appraiser tab -->
    <div id="appraiser" class="tab-pane fade">
    
        <h2 class="h2heading styleh2" style="">Appraiser Report</h2>
        <div class="row spacethebottom">
            <label class="col-md-2 control-label">Total Loss?</label>
            <div class="col-md-2">
                <input type="checkbox" name="Front End" v-model="isTotaloss"> Yes &nbsp;
    
            </div>
        </div>
        <!-- endrow  -->
    
        <div class="row spacethebottom">
    
            <div class="form-group">
                <label class="col-md-1 control-label">Towing</label>
                <div class="col-md-2">
                    <input type="text" id="towing" name="towing" required="" class="form-control">
                </div>
            </div>
    
            <div class="form-group">
                <label class="col-md-1 control-label">Storage</label>
                <div class="col-md-2">
                    <input type="text" id="storage" name="storage" required="" class="form-control">
                </div>
            </div>
    
            <div class="form-group">
                <label class="col-md-1 control-label">Day Since</label>
                <div class="col-md-2">
                    <input type="text" id="daysince" name="daysince" required="" class="form-control">
                </div>
            </div>
    
        </div>
    
        <h2 class="h2heading2">UPD/Betterment</h2>
        <div class="row spacethebottom">
    
            <div class="form-group">
                <label class="col-md-3 control-label">Old Damages Predefined</label><a href="#">Add Comment</a>
                <div class="col-md-7">
    
                    <select class="form-control" id="locationtype">
                                                                    <option>1</option>
                                                                    <option>2</option>
                                                                    <option>3</option>
                                                                    <option>4</option>
                                                                    </select>
    
                </div>
            </div>
        </div>
        <!-- End of Row -->
    
    
        <div class="row spacethebottom">
            <label class="col-md-2 control-label">Old Damages</label>
            <div class="col-md-6">
                <textarea rows="4" style="width:100%" id="content" name="content"></textarea>
            </div>
            <div class="form-group">
                <label class="col-md-2 control-label">Total Old Damages</label>
                <div class="col-md-2">
                    <input type="text" id="totalolddamages" class="form-control" value="0.00" name="totalolddamages" />
                </div>
            </div>
    
        </div>
        <!-- End of Row -->
        <div class="row spacethebottom">
            <label class="col-md-2 control-label">Betterment</label>
            <div class="col-md-6">
                <textarea rows="4" style="width:100%" id="content" name="content"></textarea>
            </div>
            <div class="form-group">
                <label class="col-md-2 control-label">Total Betterment</label>
                <div class="col-md-2">
                    <input type="text" class="form-control" id="totalbetterment" value="0.00" name="totalbetterment" />
                </div>
            </div>
    
        </div>
        <!-- End of Row -->
    
    
    
    
    
    
    
    
        <!-- Empty Row -->
        <div class="row spacethebottom">
        </div>
        <!-- End of Empty Row -->
    
        <h2 class="h2heading2">Appraiser Comments</h2>
        <div class="row spacethebottom">
    
            <div class="form-group">
                <label class="col-md-3 control-label">Predefined Appraiser Comments</label><a href="#">Add Comment</a>
                <div class="col-md-7">
                    <select class="form-control" id="locationtype">
                                                                    <option>1</option>
                                                                    <option>2</option>
                                                                    <option>3</option>
                                                                    <option>4</option>
                                                                    </select>
                </div>
            </div>
        </div>
        <!-- end of row  -->
    
    
        <div class="row spacethebottom">
            <div class="col-md-12">
                <h3>Appraiser Comments</h3>
            </div>
            <div class="col-md-12">
                <div id="summernote">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                    survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                    desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    <br/>
                    <br/>
    
    
                </div>
            </div>
        </div>
        <!-- end of row  -->
    
    
    
    
    
        <h2 class="h2heading2">Retail Book Value</h2>
        <div class="row spacethebottom">
    
    
            <div class="row spacethebottom">
            </div>
            <!-- end of row  -->
    
            <div class="form-group">
                <label class="col-md-1 control-label">Retail Base</label>
                <div class="col-md-2">
    
                    <input type="text" id="totalolddamages" class="form-control" size="4" value="0.00" name="totalolddamages" />
                </div>
            </div>
        </div>
        <!-- end of row  -->
    
        <div class="row spacethebottom">
            <div class="form-group">
                <label class="col-md-3 control-label">Mileage</label>
                <div class="col-md-1">
                    <input type="checkbox" name="Front End" value="front"> High &nbsp;
                    <input type="checkbox" name="Rear End" value="rear" checked="checked"> Low &nbsp;
                </div>
            </div>
    
            <div class="form-group">
                <div class="col-md-2">
                    <input type="text" id="totalolddamages" class="form-control" size="4" value="0.00" name="totalolddamages" />
                </div>
            </div>
    
        </div>
        <!-- end of row  -->
    
        <div class="row spacethebottom">
    
            <div class="form-group">
                <div class="col-md-4">
                    <input type="text" id="totalolddamages" class="form-control" size="4" name="totalolddamages" />
                </div>
            </div>
    
            <div class="form-group">
                <div class="col-md-2">
                    <input type="text" id="totalolddamages" class="form-control" size="4" value="0.00" name="totalolddamages" />
                </div>
            </div>
    
        </div>
        <!-- end of row  -->
        <div class="row spacethebottom">
    
            <div class="form-group">
                <div class="col-md-4">
                    <input type="text" id="totalolddamages" size="4" class="form-control" name="totalolddamages" />
                </div>
            </div>
    
            <div class="form-group">
                <div class="col-md-2">
                    <input type="text" id="totalolddamages" size="4" class="form-control" value="0.00" name="totalolddamages" />
                </div>
            </div>
    
        </div>
        <!-- end of row  -->
        <div class="row spacethebottom">
    
            <div class="form-group">
                <div class="col-md-4">
                    <input type="text" id="totalolddamages" size="4" class="form-control" name="totalolddamages" />
                </div>
            </div>
    
            <div class="form-group">
                <div class="col-md-2">
                    <input type="text" id="totalolddamages" size="4" class="form-control" value="0.00" name="totalolddamages" />
                </div>
            </div>
    
        </div>
        <!-- end of row  -->
        <div class="row spacethebottom">
    
            <div class="form-group">
                <div class="col-md-4">
                    <input type="text" id="totalolddamages" size="4" class="form-control" name="totalolddamages" />
                </div>
            </div>
    
            <div class="form-group">
                <div class="col-md-2">
                    <input type="text" id="totalolddamages" size="4" class="form-control" value="0.00" name="totalolddamages" />
                </div>
            </div>
    
        </div>
        <!-- end of row  -->
        <div class="row spacethebottom">
    
            <div class="form-group">
                <div class="col-md-4">
                    <input type="text" id="totalolddamages" size="4" class="form-control" name="totalolddamages" />
                </div>
            </div>
    
            <div class="form-group">
                <div class="col-md-2">
                    <input type="text" id="totalolddamages" size="4" class="form-control" value="0.00" name="totalolddamages" />
                </div>
            </div>
    
        </div>
        <!-- end of row  -->
        <div class="row spacethebottom">
    
            <div class="form-group">
                <div class="col-md-4">
                    <input type="text" id="totalolddamages" size="4" class="form-control" name="totalolddamages" />
                </div>
            </div>
    
            <div class="form-group">
                <div class="col-md-2">
                    <input type="text" id="totalolddamages" size="4" class="form-control" value="0.00" name="totalolddamages" />
                </div>
            </div>
    
        </div>
        <!-- end of row  -->
        <div class="row spacethebottom">
    
            <div class="form-group">
                <div class="col-md-4">
                    <input type="text" id="totalolddamages" size="4" class="form-control" name="totalolddamages" />
                </div>
            </div>
    
            <div class="form-group">
                <div class="col-md-2">
                    <input type="text" id="totalolddamages" size="4" class="form-control" value="0.00" name="totalolddamages" />
                </div>
            </div>
    
        </div>
        <!-- end of row  -->
        <div class="row spacethebottom">
    
            <div class="form-group">
                <div class="col-md-4">
                    <input type="text" id="totalolddamages" size="4" class="form-control" name="totalolddamages" />
                </div>
            </div>
    
            <div class="form-group">
                <div class="col-md-2">
                    <input type="text" id="totalolddamages" size="4" class="form-control" value="0.00" name="totalolddamages" />
                </div>
            </div>
    
        </div>
        <!-- end of row  -->
    
        <div class="row spacethebottom">
    
            <div class="form-group">
                <label class="col-md-4 control-label text-right">NET TOTAL</label>
            </div>
    
            <div class="form-group">
                <div class="col-md-2">
                    <input type="text" id="totalolddamages" size="4" class="form-control" readonly="true" value="111.11" name="totalolddamages" />
    
                </div>
            </div>
    
        </div>
        <!-- end of row  -->
    
        <div class="row spacethebottom">
        </div>
        <!-- end of row  -->
    
    
        <div class="row spacethebottom">
            <div class="form-group">
                <label class="col-md-1 control-label">Offical Guide</label>
                <div class="col-md-3">
                    <select class="form-control" id="officalguide">
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        </select> </div>
            </div>
    
            <div class="form-group">
                <label class="col-md-1 control-label">Edition Date</label>
                <div class="col-md-2">
                    <input type="text" id="totalolddamages" class="form-control" name="totalolddamages" />
                </div>
            </div>
    
        </div>
        <!-- end of row  -->
    
    
    
        <a href="#repairablearea" data-toggle="collapse">
            <h2 class="h2heading styleh2">Repairable Vehicle Information</h2>
        </a>
        <div id="repairablearea" data-parent="#accordion" class="collapse in">
    
    
    
            <h2 class="h2heading2">Parts Information</h2>
            <!-- Empty Row -->
            <div class="row spacethebottom">
            </div>
            <!-- End of Empty Row -->
            <div class="row spacethebottom">
                <div class="form-group">
                    <label class="col-md-2 control-label">LKQ Parts Available</label>
                    <div class="col-md-3">
                        <select class="form-control" id="lkqparts">
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    </select>
                    </div>
                </div>
    
                <div class="form-group">
                    <div class="col-md-3">
                        <select class="form-control" id="lkqparts">
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    </select>
                    </div>
                </div>
    
            </div>
            <!-- end of row  -->
    
            <div class="row spacethebottom">
                <div class="form-group">
                    <label class="col-md-2 control-label">Aftermarket Parts Available</label>
                    <div class="col-md-3">
                        <select class="form-control" id="lkqparts">
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    </select>
                    </div>
                </div>
    
                <div class="form-group">
                    <div class="col-md-3">
                        <select class="form-control" id="lkqparts">
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    </select>
                    </div>
                </div>
    
            </div>
            <!-- end of row  -->
            <div class="row spacethebottom">
                <div class="form-group">
                    <label class="col-md-2 control-label">Reconditioned Parts Available</label>
                    <div class="col-md-3">
                        <select class="form-control" id="lkqparts">
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    </select>
                    </div>
                </div>
    
                <div class="form-group">
                    <div class="col-md-3">
                        <select class="form-control" id="lkqparts">
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    </select>
                    </div>
                </div>
    
            </div>
            <!-- end of row  -->
    
            <!-- Empty Row -->
            <div class="row spacethebottom">
            </div>
            <!-- End of Empty Row -->
            <!-- Empty Row -->
            <div class="row spacethebottom">
            </div>
            <!-- End of Empty Row -->
            <h2 class="h2heading2">Repair Information</h2>
            <!-- Empty Row -->
            <div class="row spacethebottom">
            </div>
            <!-- End of Empty Row -->
    
    
    
    
    
            <div class="row spacethebottom">
    
                <div class="form-group">
                    <label class="col-md-2 control-label">Estimated Repair Cost</label>
                    <div class="col-md-2">
                        <input type="text" id="totalolddamages" class="form-control" name="totalolddamages" />
                    </div>
                </div>
    
            </div>
            <!-- end of row  -->
    
            <div class="row spacethebottom">
    
                <div class="form-group">
                    <label class="col-md-2 control-label">Betterment</label>
                    <div class="col-md-2">
                        <input type="text" id="totalolddamages" class="form-control" name="totalolddamages" />
                    </div>
                </div>
    
            </div>
            <!-- end of row  -->
    
            <div class="row spacethebottom">
    
                <div class="form-group">
                    <label class="col-md-2 control-label">Deductible</label>
                    <div class="col-md-2">
                        <input type="text" id="totalolddamages" class="form-control" name="totalolddamages" />
                    </div>
                </div>
    
            </div>
            <!-- end of row  -->
    
            <div class="row spacethebottom">
    
                <div class="form-group">
                    <label class="col-md-2 control-label">Total Deductions</label>
                    <div class="col-md-2">
                        <input type="text" id="totalolddamages" class="form-control" size="4" readonly="true" value="0.00" name="totalolddamages" />
                    </div>
                </div>
    
            </div>
            <!-- end of row  -->
    
            <div class="row spacethebottom">
    
                <div class="form-group">
                    <label class="col-md-2 control-label">Net Amount</label>
                    <div class="col-md-2">
                        <input type="text" id="totalolddamages" class="form-control" size="4" readonly="true" value="0.00" name="totalolddamages" />
                    </div>
                </div>
    
            </div>
            <!-- end of row  -->
    
            <div class="row spacethebottom">
    
                <div class="form-group">
                    <label class="col-md-2 control-label">Days to repair</label>
                    <div class="col-md-2">
                        <input type="text" id="totalolddamages" class="form-control" name="totalolddamages" />
                    </div>
                </div>
    
            </div>
            <!-- end of row  -->
    
            <div class="row spacethebottom">
    
                <div class="form-group">
                    <label class="col-md-2 control-label">% of Nada Value</label>
                    <div class="col-md-2">
                        <input type="text" id="totalolddamages" class="form-control" readonly="true" value="22%" name="totalolddamages" />
                    </div>
                </div>
    
            </div>
            <!-- end of row  -->
    
    
    
            <!-- Empty Row -->
            <div class="row spacethebottom">
            </div>
            <!-- End of Empty Row -->
    
    
            <hr>
            <div class="row spacethebottom">
                <div class="form-group">
                    <label class="col-md-1 control-label">Quick Notes</label>
                    <div class="col-md-5">
                        <input type="checkbox" name="Front End" value="front">&nbsp; Vehicle Drivable &nbsp;
                        <input type="checkbox" name="Rear End" value="rear" checked="checked">&nbsp; Shop of Owners Choice? &nbsp;
                    </div>
                </div>
            </div>
            <!-- end of row  -->
    
    
            <div class="row spacethebottom">
                <div class="form-group">
                    <label class="col-md-1 control-label">Estimate Copy</label>
                    <div class="col-md-10">
                        <input type="checkbox" name="Front End" value="front">&nbsp; Shop Copy Sent &nbsp;
                        <input type="checkbox" name="Rear End" value="rear" checked="checked">&nbsp; Shop Copy Retained &nbsp;<br>
                        <input type="checkbox" name="Left Side" value="left">&nbsp; Owner Copy Sent &nbsp;
                        <input type="checkbox" name="Right Side" value="right" checked="checked">&nbsp; Owner Copy Retained &nbsp;
                    </div>
                </div>
    
            </div>
            <!-- end of row  -->
    
    
    
        </div>
        <!-- end of accordian  -->
    
    
        <div v-if="isTotaloss">
            <h2 class="h2heading styleh2">Total Loss Vehicle Information</h2>
            <hr>
            <div id="totallossarea">
    
                <div class="row spacethebottom">
                    <div class="form-group">
                        <label class="col-md-3 control-label">Overall Condition (Prior to loss)</label>
                        <div class="col-md-8">
                            <input type="checkbox" name="Front End" value="front">&nbsp; Good &nbsp;
                            <input type="checkbox" name="Rear End" value="rear" checked="checked">&nbsp; Fair &nbsp;
                            <input type="checkbox" name="Left Side" value="left">&nbsp; Poor &nbsp;
                        </div>
                    </div>
                </div>
    
                <div class="row spacethebottom">
                    <div class="form-group">
                        <label class="col-md-3 control-label">Total Loss Status</label>
                        <div class="col-md-8">
                            <input type="checkbox" name="Front End" value="front">&nbsp; Total Loss &nbsp;
                            <input type="checkbox" name="Rear End" value="rear" checked="checked">&nbsp; Borderline &nbsp;
                        </div>
                    </div>
                </div>
                <!-- endrow  -->
                <hr>
    
                <div class="row spacethebottom"></div>
    
                <h2 class="h2heading2">Total Loss Basis</h2>
    
    
    
    
                <div class="row spacethebottom"></div>
    
                <div class="row spacethebottom">
                    <label class="col-md-2 control-label">Total Loss Valuation Entity</label>
                    <div class="col-md-4">
                        <select class="form-control" id="sel1">
                                                              <option>ADP</option>
                                                              <option>CCC</option>
                                                              <option>Mitchell</option>
                                                               <option>Other</option>
                                                              </select>
                    </div>
                </div>
                <!-- endrow  -->
    
                <div class="row spacethebottom">
                    <div class="form-group">
                        <label class="col-md-2 control-label">Request Number</label>
                        <div class="col-md-4">
                            <input type="text" id="requestnumber" name="requestnumber" required="" class="form-control">
                        </div>
                    </div>
                </div>
                <!-- endrow  -->
    
                <div class="row spacethebottom">
                    <label class="col-md-2 control-label">Other information</label>
                    <div class="col-md-4">
                        <textarea rows="4" style="width:100%" id="content" class="form-control" name="content"></textarea>
                    </div>
                </div>
                <!-- endrow  -->
    
                <div class="row spacethebottom">
    
                    <div class="form-group">
                        <label class="col-md-2 control-label">Retail Market Value</label>
                        <div class="col-md-2">
                            <input type="text" id="retailvalue" name="retailvalue" required="" class="form-control">
                        </div>
                    </div>
    
                </div>
    
                <div class="row spacethebottom">
    
                    <div class="form-group">
                        <label class="col-md-2 control-label">Less old damages</label>
                        <div class="col-md-2">
                            <input type="text" id="olddamages" name="olddaamages" required="" class="form-control">
                        </div>
                    </div>
    
                </div>
    
                <div class="row spacethebottom">
    
                    <div class="form-group">
                        <label class="col-md-2 control-label">Actual Cash Value</label>
                        <div class="col-md-2">
                            <input type="text" id="actualvalue" name="actualvalue" required="" class="form-control">
                        </div>
                    </div>
    
                </div>
    
                <div class="row spacethebottom">
    
                    <div class="form-group">
                        <label class="col-md-1 control-label">Sales Tax %</label>
                        <div class="col-md-1">
                            <input type="text" id="retailvalue" name="retailvalue" value="0.00" class="form-control">
                        </div>
                        <div class="col-md-2">
                            <input type="text" id="retailvalue" name="retailvalue" readonly="true" value="$0.00" required="" class="form-control">
                        </div>
                    </div>
    
                </div>
    
    
                <div class="row spacethebottom">
    
                    <div class="form-group">
                        <label class="col-md-2 control-label">Settlement Value</label>
                        <div class="col-md-2">
                            <input type="text" id="retailvalue" name="retailvalue" readonly="true" required="" class="form-control">
                        </div>
                    </div>
    
                </div>
    
    
                <div class="row spacethebottom"></div>
    
                <h2 class="h2heading2">Salvage Bids</h2>
    
                <div class="row spacethebottom">
                    <label class="col-md-3 control-label">Buyer/Phone Number</label>
                    <div class="col-md-3 ">
                        <select class="form-control pull-left" id="sel1">
                                                              <option>IAA</option>
                                                              <option>BidFast</option>
                                                              <option>Other</option>
                                                              </select>
                    </div>
    
    
                    <label class="col-md-1 control-label">Bid</label>
                    <div class="col-md-2">
                        <input type="text" id="retailvalue" name="retailvalue" required="" value="0.00" class="form-control">
                    </div>
    
                </div>
                <!-- endrow  -->
    
                <div class="row spacethebottom">
                    <label class="col-md-3 control-label">Buyer/Phone Number</label>
                    <div class="col-md-3">
                        <select class="form-control" id="sel1">
                                                              <option>IAA</option>
                                                              <option>BidFast</option>
                                                              <option>Other</option>
                                                              </select>
                    </div>
    
    
                    <label class="col-md-1 control-label">Bid</label>
                    <div class="col-md-2">
                        <input type="text" id="retailvalue" name="retailvalue" required="" value="0.00" class="form-control">
                    </div>
    
                </div>
                <!-- endrow  -->
    
                <div class="row spacethebottom">
                    <label class="col-md-3 control-label">Buyer/Phone Number</label>
                    <div class="col-md-3">
                        <select class="form-control" id="sel1">
                                                              <option>IAA</option>
                                                              <option>BidFast</option>
                                                              <option>Other</option>
                                                              </select>
                    </div>
    
    
                    <label class="col-md-1 control-label">Bid</label>
                    <div class="col-md-2">
                        <input type="text" id="retailvalue" name="retailvalue" required="" value="0.00" class="form-control">
                    </div>
    
                </div>
                <!-- endrow  -->
    
    
                <div class="row spacethebottom"></div>
    
                <hr>
    
                <div class="row spacethebottom">
                    <label class="col-md-3 control-label">Salvage Pool</label>
                    <div class="col-md-3">
                        <select class="form-control" id="sel1">
                                                              <option>IAA</option>
                                                              <option>Copart</option>
                                                              <option>Other</option>
                                                              </select>
                    </div>
    
                    <label class="col-md-1 control-label">Stall Number</label>
                    <div class="col-md-2">
                        <input type="text" id="retailvalue" name="retailvalue" required="" value="" class="form-control">
                    </div>
    
                    <label class="col-md-2 control-label">Permission</label>
                    <input type="checkbox" name="Front End" value="front">
    
    
    
                </div>
                <!-- endrow  -->
    
    
    
            </div>
            <!-- end of expandable -->
        </div>
    
    
        <!-- end appraiser tab -->
    
        <!-- Start of supp tab -->
    
    
        <!-- end supp tab -->
    
    
    </div>
    <!-- end of appraiser tab - real -->
</template>

<script>
    import swal from 'sweetalert2';
    
    export default {
        data() {
            return {
                isTotaloss: false
                }
        },
        methods: {
            changetoTotal() {}
        },
        mounted() {
            $(document).ready(function() {
                $('#summernote').summernote({
                    height: 300, // set editor height
                    minHeight: null, // set minimum height of editor
                    maxHeight: null, // set maximum height of editor
                    focus: true // set focus to editable area after initializing summernote
                });
                var markupStr = '';
                $('#summernote').summernote('code', markupStr);
            });
    
        }
    
    };
</script>