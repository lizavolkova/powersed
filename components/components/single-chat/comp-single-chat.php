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