<template>
<!-- Start of Row -->
                <div>
                <div style="height:50px;">
                <div class="pull-left"><button class="btn btn-primary"  @click="changeNoteboxstatus()">Add Note<span class="caret"></span></button></div>
                <div class="pull-right"><button class="btn btn-primary">Email PDF</button>&nbsp;<button class="btn btn-primary">Print PDF</button></div>
                </div>
                

                <div  v-if="addNotebox">
                <hr>
                <div class="row spacethebottom">


                    <div class="form-group">
                        <label class="col-md-1 control-label">Note Type:</label>
                        <div class="col-md-3">
                            <select class="form-control" id="locationtype">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            </select>
                        </div>
                    </div>

                    <div class="form-group">
                        <label class="col-md-1 control-label">Subject:</label>
                        <div class="col-md-4">
                            <input type="text" class="form-control" id="vehiclelocation" />
                        </div>
                    </div>
                </div>

                <!-- End of Row -->

                <div class="row spacethebottom">

                    <div class="form-group ">
                        <label class="col-md-2 control-label">Reuseable Notes</label><a href="#">Add New Note</a>
                        <div class="col-md-7">
                            <select class="form-control" id="locationtype">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            </select> </div>
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
                        <label class="col-md-12 control-label">Note:</label>
                        <div class="col-md-12">
                            <textarea rows="10" style="width:100%;" name="comment" form="usrform"></textarea>
                        </div>
                    </div>


                </div>
                <!-- end of row 9 -->




                <div class="row spacethebottom">
                    <div class="col-md-3">
                        <div class="form-group">
                            <button type="submit" class="btn btn-primary">Save Note</button>
                        </div>
                    </div>
                </div>

        </div>     
        </div>   
</template>

<script>

export default {
    data(){
        return {
            addNotebox: false
        }
    }, 
    methods:{
       changeNoteboxstatus(){
           this.addNotebox = !this.addNotebox;
       }
    }
};



</script>
