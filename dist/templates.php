<!--<div id="carousel-example-generic" class="carousel slide comp-mentors" data-ride="carousel" data-interval="false">-->

    <!--&lt;!&ndash; Wrapper for slides &ndash;&gt;-->
    <!--<div class="carousel-inner" role="listbox">-->

    <!--</div>-->

    <!--&lt;!&ndash; Controls &ndash;&gt;-->
    <!--<a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">-->
        <!--<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>-->
        <!--<span class="sr-only">Previous</span>-->
    <!--</a>-->
    <!--<a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">-->
        <!--<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>-->
        <!--<span class="sr-only">Next</span>-->
    <!--</a>-->
<!--</div>-->

<div class="carousel mentor-slider comp-mentors">

</div>

<script type="text/template" id="tpl-mentor">
        <div class="mentor-wrapper">
            <div class="img-container">
                <img src="<%= pictureUrl %>" alt="">
            </div>
            <div class="short-content">
                <div class="name"><%= firstName %>&nbsp;<%= lastName %></div>
                <div class="title"><%= title %></div>
                <div class="location"><%= location %></div>
                <div class="education"><%= education %></div>
            </div>
            <div class="long-content">
                <%= summary %>
            </div>
            <div class="connect">
                <a href="#" class="connect-button">connect</a>
            </div>
        </div>
</script>

<div class="comp-chats">

</div>


<script type="text/template" id="tpl-single-chat">
    <div class="comp-single-chat">
        <div class="profile-img">
            <img src="<?php echo $url ?>dist/images/profile-placeholder.png" alt="">
        </div>
        <div class="chat-info">
            <div class="header">
                <div class="name left"><%= firstName %> <%= lastName %></div>
                <div class="time-stamp right">Yesterday</div>
            </div>
            <div class="body">
                <%= chatCopy %>
            </div>
        </div>
    </div>
</script>

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

<div class="comp-chat hide">
    <div class="chat-messages">

    </div>

    <div class="message-bar">
        <div class="form-group">
            <div class="col-xs-9">
                <input type="text" class="form-control" id="inputNewMessage" placeholder="Type message here">
            </div>
            <label for="inputNewMessage" class="col-xs-3 control-label">
                <a href="javascript:void(0)" class="send-message-btn">SEND</a>
            </label>
        </div>
    </div>
</div>

<script type="text/template" id="tpl-chat-message">
        <%= message %>
</script>
<script type="text/template" id="tpl-connect-account">
    <div class="comp-connect-account">
        <div class="connect-container">
            <div class="logo">
                <img src="<?php echo $url ?>/dist/images/logo.png" alt="">
            </div>
            <div class="connect-buttons">
                <a href="#/home" class="connect-linked-in btn btn-default">
                    <i class="fa fa-linkedin-square" aria-hidden="true"></i> Connect with LinkedIn
                </a>
            </div>
        </div>

    </div>
</script>
