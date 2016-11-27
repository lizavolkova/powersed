(function (pw) {
    'use strict';

    pw.views.chatsListView = Backbone.View.extend({

        el: '.comp-chats',

        /**
         * Initialize
         */
        initialize: function() {
            this.$content = $('#content');
            this.collection = new pw.collections.chatsListCollection();

        },

        events: {
            'click .comp-single-chat': 'openChat'
        },

        /**
         * Fetch list of active chats
         */
        fetchData: function() {
            this.collection.fetch().done(function(d) {
                this.render();
            }.bind(this));
        },

        /**
         * Open existing chat
         * @param e
         */
        openChat: function(e) {
            e.preventDefault();
            app.router.navigate('chat', {trigger: true});
        },

        /**
         * Render
         */
        render: function() {
            this.$content.empty();
            this.$el.empty();

            _.each(this.collection.models, function(chat) {
                var chatView = new pw.views.singleChatListView({
                    model: chat
                });

                this.el.append(chatView.render().el);
            }.bind(this));

            this.$content.append(this.el);
            this.setElement($('.comp-chats'));
        }
    })
})(powersed);