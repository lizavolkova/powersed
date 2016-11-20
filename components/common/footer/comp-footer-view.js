(function (pw) {
    'use strict';

    pw.views.footerView = Backbone.View.extend({

        //template: _.template($("#tpl-mentor").html()),
        $el: $('#header'),

        initialize: function() {
            this.render();
        },

        render: function() {
            console.log('foooter view init');
            // this.$el.html(this.template({}));
        }
    })
})(powersed);