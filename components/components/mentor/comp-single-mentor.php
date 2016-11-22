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