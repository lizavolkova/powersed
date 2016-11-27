(function (pw) {
    'use strict';

    pw.views.singleChatView =  Backbone.View.extend({

        el: '.comp-chat',

        /**
         * Initialize
         */
        initialize: function() {
            //elements
            this.$content = $('#content');
            this.$messageContainer = $('.chat-messages');
            this.$messageInput = $('#inputNewMessage');

            //init and bind
            this.collection = new pw.collections.singleChatCollection();
            this.listenTo( this.collection, 'add', this.render );
        },

        events: {
            'click .send-message-btn': 'sendChat'
        },

        /**
         * Fetch chat messages for given chat
         */
        fetchData: function() {
            this.collection.fetch().done(function(d) {
                this.render();
            }.bind(this));
        },

        /**
         * Send a new chat
         * @param e
         */
        sendChat: function(e) {
            e.preventDefault();
            var newMessageText = this.$messageInput.val();

            if ($.trim(newMessageText).length === 0) {
                this.addErrorToField(this.$messageInput)
            } else {
                this.collection.add({
                    timestamp: new Date(),
                    message: newMessageText
                });
            }
        },

        /**
         * Render
         */
        render: function() {
            this.$content.empty();
            this.$messageContainer.empty();

            _.each(this.collection.models, function(message) {
                var messageView = new pw.views.singleChatMessageView({
                    model: message
                });

                this.$messageContainer.append(messageView.render().el);

            }.bind(this));

            this.$content.append(this.el);
            $(this.el).removeClass('hide');
            window.scrollTo(0,document.body.scrollHeight);
            this.setElement($('.comp-chat'));
        }
    })
})(powersed);