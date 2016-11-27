(function (pw) {
    'use strict';

    pw.views.mentorsView = Backbone.View.extend({
        /**
         * Initialize
         */
        initialize: function() {
            this.$el = $('#content');
            this.$carousel = $('.carousel');
            this.collection = new pw.collections.mentorCollections();
            this.isSliderInitialized = false;
        },

        fetchData: function() {
            if (this.isSliderInitialized) {
                this.$carousel.slick('unslick');
            }

            this.collection.fetch().done(function() {
                this.render();
            }.bind(this));
        },

        /**
         * Render
         */
        render: function() {
            this.$el.empty();
            this.$carousel.empty();


            _.each(this.collection.models, function(mentor, i) {

                var mentorView = new pw.views.mentorView({
                    model: mentor,

                    className: 'comp-mentor'
                });

                this.$carousel.append(mentorView.render().el);
            }.bind(this));

            this.$el.append(this.$carousel);

            //on slider init
            this.$carousel.on('init', function() {
                this.isSliderInitialized = true;
            }.bind(this));

            //on slider destroy
            this.$carousel.on('destroy', function() {
                this.isSliderInitialized = false;
            }.bind(this));

            //initialize slider
            this.$carousel.slick({
                infinite: true,
                slidesToShow: 1,
                // adaptiveHeight: true,
                arrows: false
            });

        }
    })
})(powersed);