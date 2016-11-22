(function (pw) {
    'use strict';

    pw.views.profileModel = Backbone.Model.extend({
        url: globals.api.getProfile
    })
})(powersed);