(function (pw) {
    'use strict';

    pw.models.mentorModel = Backbone.Model.extend({
        defaults: {
            pictureUrl: 'dist/images/profile-placeholder.png'
        },

        /**
         * Parse api response
         * @param {Object} resposne
         * @returns {*}
         */
        parse: function(mentor) {
            console.log(this);

            if ($.trim(mentor.pictureUrl).length === 0) {
                mentor.pictureUrl = this.defaults.pictureUrl;
            }

            return mentor;
        }
    })

})(powersed);