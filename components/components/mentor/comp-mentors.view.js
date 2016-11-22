(function (pw) {
    'use strict';

    pw.views.mentorsView = Backbone.View.extend({

        /**
         * Initialize
         */
        initialize: function() {
            this.$el = $('#content');
            this.$carousel = $('.carousel');
            this.$carouselItemContainer = $('.carousel-inner');
            this.collection = new pw.collections.mentorCollections();
        },

        fetchData: function() {
            this.collection.fetch().done(function() {
                this.render();
            }.bind(this));
        },

        /**
         * Render
         */
        render: function() {
            console.log('mentors render');
            this.$el.empty();
            this.$carouselItemContainer.empty();

            _.each(this.collection.models, function(mentor, i) {
                var aciveClass = i === 0 ? 'active' : '';

                var mentorView = new pw.views.mentorView({
                    model: mentor,

                    className: 'item comp-mentor ' + aciveClass
                });

                this.$carouselItemContainer.append(mentorView.render().el);
            }.bind(this));

            this.$el.append(this.$carousel);

            $(".carousel-inner").swipe( {
                //Generic swipe handler for all directions
                swipeLeft:function(event, direction, distance, duration, fingerCount) {
                    console.log('swipe left');
                    $(this).parent().carousel('prev');
                },
                swipeRight: function() {
                    console.log('swipe right');
                    $(this).parent().carousel('next');
                },
                //Default is 75px, set to 0 for demo so any distance triggers swipe
                threshold:0
            });
        }
    })
})(powersed);