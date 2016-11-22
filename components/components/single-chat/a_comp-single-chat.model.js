(function (pw) {
    'use strict';

    pw.models.singleChatModel = Backbone.Model.extend({
        defaults: {
            pictureUrl: 'dist/images/profile-placeholder.png',
            id: '123'
        }
    })

})(powersed);