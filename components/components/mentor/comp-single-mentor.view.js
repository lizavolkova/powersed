(function (pw) {
    'use strict';

    pw.views.mentorView = Backbone.View.extend({

        template: _.template($("#tpl-mentor").html()),

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

            return this;
        }
    })
})(powersed);