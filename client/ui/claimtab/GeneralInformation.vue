<template>
  <div id="general" class="tab-pane fade in active">
  
    <h2 class="h2heading styleh2">General Information</h2>
  
    <!-- Start of Tab -->
  
    <div id="generalinformation" class="collapse in">
  
      <!-- Start of Row 1a -->
  
      <div class="row spacethebottom">
  
        <div class="form-group">
          <label class="col-md-2 control-label">Insurance Profile</label>
          <div class="col-md-3">
            <select class="form-control" id="insuranceprofile">
                                              <option>Permanent General</option>
                                              <option>Amica</option>
                                              <option>Firemans Fund</option>
                                              <option>USAA</option>
                                              </select>
          </div>
        </div>
  
      </div>
  
      <!-- End of Row 1a -->
  
      <!-- Start of Row 1 -->
  
      <div class="row spacethebottom">
  
  
        <div class="form-group">
          <label class="col-md-1 control-label">Appraiser</label>
          <div class="col-md-3">
            <select class="form-control" id="appraisername">
                                              <option>Terry</option>
                                              <option>Nick</option>
                                              <option>Brandon</option>
                                              <option>Alex</option>
                                              </select>
          </div>
        </div>
  
  
        <div class="form-group">
          <label class="col-md-1 control-label">Date Recieved</label>
         <div class="col-md-3">
            <input type="text" class="form-control" v-mask="'99/99/9999'" id="dateofloss" />
          </div>
        </div>
  
  
        <div class="form-group">
          <label class="col-md-1 control-label">Policy Number</label>
          <div class="col-md-3">
  
            <input type="text" class="form-control" id="policynumber" />
  
          </div>
        </div>
  
      </div>
      <!-- end of row 1 -->
  
  
      <!-- start of row 2 -->
  
      <div class="row spacethebottom">
  
        <div class="form-group">
          <label class="col-md-1 control-label">Type of Loss</label>
          <div class="col-md-3">
            <select class="form-control" id="typeofloss">
                                              <option>Collision</option>
                                              <option>Liability</option>
                                              <option>Comprehensive</option>
                                              <option>Theft</option>
                                              <option>Fire</option>
                                              </select>
          </div>
        </div>
  
        <div class="form-group">
          <label class="col-md-1 control-label">Date of Loss</label>
          <div class="col-md-3">
            <input type="text" class="form-control" v-mask="'99/99/9999'" id="dateofloss" />
          </div>
        </div>
  
        <div class="form-group">
          <label class="col-md-1 control-label">Date of Inspection</label>
          <div class="col-md-3">
  
            <input type="text" class="form-control" v-mask="'99/99/9999'" id="dateofinspection" />
  
          </div>
        </div>
  
      </div>
      <br>
      <!-- end of row 2 -->
  
  
  
  
      <!-- start of row 3 -->
        <h2 class="h2heading styleh2">Insured's Information</h2>
      <div id="insuredsinformation" data-parent="#accordion" class="">
        <div class="row spacethebottom">
  
          <div class="form-group">
            <label class="col-md-1 control-label">Name</label>
            <div class="col-md-3">
              <input type="text" class="form-control" id="insuredname" />
            </div>
          </div>
  
          <div class="form-group">
            <label class="col-md-1 control-label">Home Phone</label>
            <div class="col-md-3">
              <input type="text" class="form-control" v-mask="'999-999-9999'" id="insuredhomephone" />
            </div>
          </div>
  
          <div class="form-group">
            <label class="col-md-1 control-label">Work Phone</label>
            <div class="col-md-3">
              <input type="text" class="form-control" v-mask="'999-999-9999'" id="insworkphone" />
            </div>
          </div>
        </div>
        <!-- end of row 3 -->
  
  
  
        <!-- start of row 3a -->
        <div class="row spacethebottom">
  
          <div class="form-group">
            <label class="col-md-1 control-label">Address</label>
            <div class="col-md-4">
              <input type="text" class="form-control" id="insaddress" />
            </div>
          </div>
  
          <div class="form-group">
            <label class="col-md-1 control-label">Suite/Apt</label>
            <div class="col-md-2">
              <input type="text" class="form-control" id="insaddress2" />
            </div>
          </div>
  
          <div class="form-group">
            <label class="col-md-1 control-label">City</label>
            <div class="col-md-3">
              <input type="text" class="form-control" id="inscity" />
            </div>
          </div>
  
  
        </div>
        <!-- end of row 3a -->
  
  
  
        <!-- start of row 4 -->
        <div class="row spacethebottom">
  
          <div class="form-group">
            <label class="col-md-1 control-label">State</label>
            <div class="col-md-3">
              <input type="text" class="form-control" id="insstate" />
            </div>
          </div>
  
          <div class="form-group">
            <label class="col-md-1 control-label">Postal Code</label>
            <div class="col-md-3">
              <input type="text" class="form-control" id="zipcode" />
            </div>
          </div>
  
          <div class="form-group">
            <label class="col-md-1 control-label">Email</label>
            <div class="col-md-3">
              <input type="text" class="form-control" id="insemailaddress" />
            </div>
          </div>
  
  
        </div>
        <!-- end of row 4 -->
      </div>
      <!-- end of collapse -->
  
      <!-- start of row 5 -->
        <h2 class="h2heading styleh2">Claimant's Information</h2>
      <div id="claimantsinformation" data-parent="#accordion" class="">
        <div class="row spacethebottom">
  
          <div class="form-group">
            <label class="col-md-1 control-label">Name</label>
            <div class="col-md-3">
              <input type="text" class="form-control" id="insuredname" />
            </div>
          </div>
  
          <div class="form-group">
            <label class="col-md-1 control-label">Home Phone</label>
            <div class="col-md-3">
              <input type="text" class="form-control" v-mask="'999-999-9999'" id="insuredhomephone" />
            </div>
          </div>
  
          <div class="form-group">
            <label class="col-md-1 control-label">Work Phone</label>
            <div class="col-md-3">
              <input type="text" class="form-control" v-mask="'999-999-9999'" id="insworkphone" />
            </div>
          </div>
        </div>
        <!-- end of row 3 -->
  
  
  
        <!-- start of row 3a -->
        <div class="row spacethebottom">
  
          <div class="form-group">
            <label class="col-md-1 control-label">Address</label>
            <div class="col-md-4">
              <input type="text" class="form-control" id="insaddress" />
            </div>
          </div>
  
          <div class="form-group">
            <label class="col-md-1 control-label">Suite/Apt</label>
            <div class="col-md-2">
              <input type="text" class="form-control" id="insaddress2" />
            </div>
          </div>
  
          <div class="form-group">
            <label class="col-md-1 control-label">City</label>
            <div class="col-md-3">
              <input type="text" class="form-control" id="inscity" />
            </div>
          </div>
  
  
        </div>
        <!-- end of row 3a -->
  
  
  
        <!-- start of row 4 -->
        <div class="row spacethebottom">
  
          <div class="form-group">
            <label class="col-md-1 control-label">State</label>
            <div class="col-md-3">
              <input type="text" class="form-control" id="insstate" />
            </div>
          </div>
  
          <div class="form-group">
            <label class="col-md-1 control-label">Postal Code</label>
            <div class="col-md-3">
              <input type="text" class="form-control" id="zipcode" />
            </div>
          </div>
  
          <div class="form-group">
            <label class="col-md-1 control-label">Email</label>
            <div class="col-md-3">
              <input type="text" class="form-control" id="insemailaddress" />
            </div>
          </div>
  
  
        </div>
        <!-- end of row 4 -->
      </div>
      <!-- end of collapse-->
  
  
      <!-- Start of index number row -->
  
      <div class="row spacethebottom">
  
        <!-- Is there a UNIQUE ID yet? if SO... show it -->
  
  
        <div class="form-group">
          <label class="col-md-1 control-label">Index Number</label>
          <div class="col-md-2">
  
          </div>
        </div>
  
        <!-- end of Unique ID IF Statement -->
  
      </div>
      <!-- end of index number row -->
  
      <!-- start of button -->
  
      <div class="row spacethebottom">
        <div class="col-md-3">
          <div class="form-group">
            <button type="submit" class="btn btn-primary" @click="toasty">Submit</button>
          </div>
        </div>
      </div>
  
      <!-- end of button -->
  
    </div>
  
  
  
  </div>
  <!-- end of general tab -->
</template>

<script>
  import swal from 'sweetalert2';
  
  export default {
    data() {
      return {
        toasty: function() {
          swal('fycj')
        }
      }
  
    }
  }
</script>
