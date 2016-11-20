/**
 * Global namespace
 * @type {object}
 */
var globals = globals || {};
var powersed = powersed || {};

/**
 * Backbone globals
 */
powersed.views = powersed.views || {};
powersed.models = powersed.models || {};
powersed.collections = powersed.collections || {};
powersed.routers = powersed.routers || {};

globals.views = ['headerView', 'footerView'];

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