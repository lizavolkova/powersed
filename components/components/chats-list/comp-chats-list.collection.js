(function (pw) {
    'use strict';

    pw.collections.chatsListCollection = Backbone.Collection.extend({
        url: globals.api.getChats,
        model: pw.models.singleChatListModel
    })
})(powersed);