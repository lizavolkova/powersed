(function (pw) {
    'use strict';

    pw.views.headerView = Backbone.View.extend({

        $el: $('#header'),

        /**
         * Initialize
         */
        initialize: function() {
            this.render();
        },

        /**
         * Render
         */
        render: function() {
            // console.log('header view init TESTING');
            // this.$el.html(this.template({}));
        }
    })
})(powersed);