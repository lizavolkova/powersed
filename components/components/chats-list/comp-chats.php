
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