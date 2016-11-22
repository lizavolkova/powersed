(function (pw) {
    'use strict';

    pw.collections.mentorCollections = Backbone.Collection.extend({
        url: globals.api.getMentors,
        model: pw.models.mentorModel
    })
})(powersed);