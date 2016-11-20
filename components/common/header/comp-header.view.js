(function (pw) {
    'use strict';

    pw.views.headerView = Backbone.View.extend({

        //template: _.template($("#tpl-mentor").html()),
        $el: $('#header'),

        initialize: function() {
            this.render();
        },

        render: function() {
            console.log('header view init TESTING');
            // this.$el.html(this.template({}));
        }
    })
})(powersed);