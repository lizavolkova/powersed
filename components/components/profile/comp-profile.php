<script type="text/template" id="tpl-profile">
    <div class="comp-profile">
        <div class="profile-top">
            <div class="profile-img">
                <img src="<?php echo $url ?>dist/images/profile-placeholder.png" alt="">
            </div>
            <div class="name"><%= firstName %>  <%= lastName %></div>
            <div class="occupation"><%= title %></div>
        </div>
        <div class="profile-bottom">
            <form class="form-horizontal">
                <div class="form-group">
                    <label for="inputOccupation" class="col-xs-3 control-label">Occupation</label>
                    <div class="col-xs-9">
                        <input type="text" class="form-control" id="inputOccupation" placeholder="Occupation" value="<%= occupation %>">
                    </div>
                </div>

                <div class="form-group">
                    <label for="inputCollege" class="col-xs-3 control-label">School</label>
                    <div class="col-xs-9">
                        <input type="text" class="form-control" id="inputCollege" placeholder="College" value="<%= college %>">
                    </div>
                </div>

                <div class="form-group">
                    <label for="inputHighSchool" class="col-xs-3 control-label">School</label>
                    <div class="col-xs-9">
                        <input type="text" class="form-control" id="inputHighSchool" placeholder="High School" value="<%= highSchool %>">
                    </div>
                </div>

                <div class="form-group">
                    <label for="inputEmail3" class="col-xs-3 control-label">Location</label>
                    <div class="col-xs-9">
                        <input type="text" class="form-control" id="inputEmail3" placeholder="" value="<%= location %>">
                    </div>
                </div>

                <div class="form-group text-area">
                    <label for="inputEmail3" class="col-xs-3 control-label">Summary</label>
                    <textarea class="form-control" rows="4" value="<%= summary %>" placeholder="Tell us something about yourself"></textarea>
                </div>

                <div class="form-group submit-button">
                    <div class="col-sm-offset-2 col-sm-10">
                        <button type="text" class="btn btn-default">SAVE</button>
                    </div>
                </div>
            </form>

    </div>
</script>
