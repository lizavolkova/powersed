(function (pw) {
    'use strict';

    pw.views.profileView = Backbone.View.extend({

        template: _.template($("#tpl-profile").html()),

        /**
         * Initialize profile view
         */
        initialize: function() {
            this.$el = $('#content');
            this.model = new pw.views.profileModel();
        },

        /**
         * Fetch profile model data
         */
        fetchData: function() {
            this.model.fetch().done(function() {
                this.render();
            }.bind(this));
        },

        /**
         * Render profile
         */
        render: function() {

            this.$el.html(this.template(this.model.toJSON()));
        }
    })
})(powersed);