(function (pw) {
    'use strict';

    pw.views.connectAccountView = Backbone.View.extend({

        template: _.template($("#tpl-connect-account").html()),

        /**
         * Initialize
         */
        initialize: function() {
            this.$el = $('#content');
        },

        /**
         * Render
         */
        render: function() {
            this.$el.html(this.template({}));
        }
    })
})(powersed);