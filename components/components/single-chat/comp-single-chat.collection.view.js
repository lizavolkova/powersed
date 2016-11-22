(function (pw) {
    'use strict';

    pw.collections.singleChatCollection = Backbone.Collection.extend({
        url: globals.api.getChat,
        model: pw.models.singleChatModel
    })
})(powersed);