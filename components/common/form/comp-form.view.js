(function (pw) {
    'use strict';

    pw.views.form = Backbone.View.extend({

        initialize: function() {

        },


        addErrorToField: function($field) {
            $field.addClass('error');
        },

        removeErrorFromField: function($field) {
            $field.removeClass('error');
        }


    })
})(powersed);