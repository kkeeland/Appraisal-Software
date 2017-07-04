<template>
  <div id="supplement" class="tab-pane fade">
      
    <div>

    

     <div class="row spacethebottom">
    </div>
    <!--End of row -->
    <h2 class="h2heading h2button">Supplement 1<span class="pull-right btn-group blackletters">
        <button data-toggle="dropdown" class="btn btn-default" aria-expanded="false">Browse Supplements<span class="caret"></span></button>
        <ul class="dropdown-menu">
            <li><a href="/emailCompose" class="font-bold">115122ALO-1</a></li>
            <li><a href="#">115122ALO-2</a></li>
            <li class="divider"></li>
            <li><a href="#">Create New Supplement</a></li>
        </ul>
        </span>
        </h2>


      <div class="" style="margin-bottom:20px;">
      <button class="btn btn-primary">Print PDF</button>&nbsp;<button class="btn btn-primary">Delete Supplement</button>
      </div>

      <div class="row spacethebottom">
    </div>
    <!--End of row -->
    

    <div class="row spacethebottom">
      <div class="form-group">
        <label class="col-md-1 control-label">Date of Supplement</label>
        <div class="col-md-3">
          <div class="input-group date">
            <input type="text" id="date_recieved" :value="now" buttonclasses="glyphicon glyphicon-calendar" name="date_recieved" required="" data-schema-key="date_recieved" class="form-control datepicker"><span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
          </div>
        </div>
      </div>
    </div>
    <!--End of row -->
  
  
    <div class="row spacethebottom">
      <div class="form-group">
        <label class="col-md-1 control-label">Supplement Remarks</label>
        <div class="col-md-10 supplementlist">
          <input type="checkbox" name="Left Side" value="left">&nbsp; Desk audit supplement &nbsp;
          <br>
          <input type="checkbox" name="Front End" value="front">&nbsp; We were unable to inspect without the vehicle being disassembled. &nbsp;
          <br>
          <input type="checkbox" name="Left Side" value="left">&nbsp; The listed mechanical could not be checked until the vehicle was in operating condition. &nbsp;
          <br>
          <input type="checkbox" name="Left Side" value="left">&nbsp; LKQ or Aftermarket parts did not meet repair specifications. &nbsp;
          <br>
          <input type="checkbox" name="Left Side" value="left">&nbsp; Part price increases. &nbsp;
          <br>
          <input type="checkbox" name="Rear End" value="rear" checked="checked">&nbsp; Other (See Remarks) &nbsp;
          <br>
          <input type="checkbox" name="Right Side" value="right" checked="checked">&nbsp; Direct pay authorization attached. &nbsp;
          <br>
          <input type="checkbox" name="Right Side" value="right" checked="checked">&nbsp; Photos attached. &nbsp;
          <br>
          <input type="checkbox" name="Right Side" value="right" checked="checked">&nbsp; Towing bill attached. &nbsp;
          <br>
          <input type="checkbox" name="Left Side" value="left">&nbsp; Preliminary estimate, no invoices available. &nbsp;
          <br>
          <input type="checkbox" name="Left Side" value="left">&nbsp; <b> Vehicle released to owner, please pay shop direct. </b> &nbsp;
          <br>
        </div>
      </div>
  
    </div>
    <!-- end of row  -->
  
    <div class="row spacethebottom">
  
      <h2 class="styleh2">Appraiser Remarks</h2>
  
      <div id="summernote2">Hello Summernote</div>
  
    </div>
    <!-- end of row  -->
  
    <div class="row spacethebottom"></div>
    <div class="row spacethebottom"></div>
    <div class="row spacethebottom">
      <div class="form-group">
        <label class="col-md-4 control-label"><h3 style="font-size:2em;">Supplement Total</h3></label>
        <div class="col-md-2">
          <input type="text" id="repaircost" name="repaircost" value="$0.00" required="" data-schema-key="repaircost" class="form-control">
        </div>
      </div>
  
    </div>
    <!-- end of row  -->
  
  
  
  
  </div>
  </div>
  </div>
  <!-- end of supplement tab -->
</template>

<script>
  export default {
    data() {
      return {
        markupStr: 'Hello you guys!!',
        now: ''
      }
    },
    mounted() {
      $(document).ready(function() {
        $('#summernote2').summernote({
          height: 300, // set editor height
          minHeight: null, // set minimum height of editor
          maxHeight: null, // set maximum height of editor
          focus: true // set focus to editable area after initializing summernote
        });
        var markupStr = '';
        $('#summernote2').summernote('code', markupStr);
      });
    },
    meteor: {
      data: {
        now() {
          var now = moment().format('MM-DD-YYYY');
          return now;
        }
      }
    }
  
  
  };
  
  
  console.log(Session);
</script>