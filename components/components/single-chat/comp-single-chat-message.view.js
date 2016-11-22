(function (pw) {
    'use strict';

    pw.views.singleChatMessageView = Backbone.View.extend({

        template: _.template($("#tpl-chat-message").html()),

        className: 'chat-message',

        /**
         * Initialize
         */
        initialize: function() {
            this.render();
        },

        /**
         * Render
         * @returns {pw.views.mentorView}
         */
        render: function() {
            this.$el.html(this.template(this.model.toJSON()));

            if (this.model.get('user') === 'one') {
                this.$el.addClass('user-one');
            }

            return this;
        }
    })
})(powersed);