(function (pw) {
    'use strict';

    pw.models.singleChatListModel = Backbone.Model.extend({
        defaults: {
            pictureUrl: 'dist/images/profile-placeholder.png'
        },

        /**
         * Parse api response
         * @param {Object} chat
         * @returns {*}
         */
        parse: function(chat) {
            var truncateLength = 80;

            if ($.trim(chat.pictureUrl).length === 0) {
                chat.pictureUrl = this.defaults.pictureUrl;
            }

            if (chat.chatCopy.length > truncateLength) {
                var truncatedMessage = chat.chatCopy.substr(0, truncateLength) + '...';
                chat.chatCopy = truncatedMessage;
            }

            return chat;
        }
    })

})(powersed);