(function (pw) {
    'use strict';

    pw.views.mentorView = Backbone.View.extend({

        template: _.template($("#tpl-mentor").html()),

        initialize: function() {
            this.render();
        },

        render: function() {
            this.$el.html(this.template({}));
        }
    })
})(powersed);