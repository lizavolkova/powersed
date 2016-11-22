/**
 * Global namespace
 * @type {object}
 */
var globals = globals || {};
var powersed = powersed || {};

/**
 * Backbone globals
 */
powersed.views = powersed.views || {};
powersed.models = powersed.models || {};
powersed.collections = powersed.collections || {};
powersed.routers = powersed.routers || {};

/**
 * Global array of BB views initialized in app.js
 * This should eventually be created dynamically, not manually
 * @type {string[]}
 */
globals.views = ['headerView', 'footerView', 'profileView', 'chatsListView', 'mentorsView', 'connectAccountView', 'singleChatView'];

/**
 * All api urls
 * @type {{getProfile: string, getMentors: string, getChats: string}}
 */
globals.api = {
    getProfile: 'dist/data/profile.json',
    getMentors: 'dist/data/mentors.json',
    getChats: 'dist/data/chats.json',
    getChat: 'dist/data/single-chat.json'
};

(function (pw) {
    'use strict';

    pw.views.footerView = Backbone.View.extend({

        //template: _.template($("#tpl-mentor").html()),
        $el: $('#header'),

        initialize: function() {
            this.render();
        },

        render: function() {
            // console.log('foooter view init');
            // this.$el.html(this.template({}));
        }
    })
})(powersed);
(function (pw) {
    'use strict';

    pw.views.headerView = Backbone.View.extend({

        $el: $('#header'),

        /**
         * Initialize
         */
        initialize: function() {
            this.render();
        },

        /**
         * Render
         */
        render: function() {
            // console.log('header view init TESTING');
            // this.$el.html(this.template({}));
        }
    })
})(powersed);
(function (pw) {
    'use strict';

    pw.views.connectAccountView = Backbone.View.extend({

        template: _.template($("#tpl-connect-account").html()),

        /**
         * Initialize
         */
        initialize: function() {
            this.$el = $('#content');
        },

        /**
         * Render
         */
        render: function() {
            this.$el.html(this.template({}));
        }
    })
})(powersed);
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
(function (pw) {
    'use strict';

    pw.collections.mentorCollections = Backbone.Collection.extend({
        url: globals.api.getMentors,
        model: pw.models.mentorModel
    })
})(powersed);
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
(function (pw) {
    'use strict';

    pw.views.mentorView = Backbone.View.extend({

        template: _.template($("#tpl-mentor").html()),

        /**
         * Initialize
         */
        initialize: function() {
            this.render();
        },

        /**
         * Render
         * @returns {pw.views.mentorView}
         */
        render: function() {
            this.$el.html(this.template(this.model.toJSON()));

            return this;
        }
    })
})(powersed);
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
(function (pw) {
    'use strict';

    pw.collections.chatsListCollection = Backbone.Collection.extend({
        url: globals.api.getChats,
        model: pw.models.singleChatListModel
    })
})(powersed);
(function (pw) {
    'use strict';

    pw.views.chatsListView = Backbone.View.extend({

        el: '.comp-chats',

        /**
         * Initialize
         */
        initialize: function() {
            this.$content = $('#content');
            this.collection = new pw.collections.chatsListCollection();

        },

        events: {
            'click .comp-single-chat': 'openChat'
        },

        /**
         * Fetch list of active chats
         */
        fetchData: function() {
            this.collection.fetch().done(function(d) {
                this.render();
            }.bind(this));
        },

        /**
         * Open existing chat
         * @param e
         */
        openChat: function(e) {
            e.preventDefault();
            app.router.navigate('chat');
        },

        /**
         * Render
         */
        render: function() {
            this.$content.empty();
            this.$el.empty();

            _.each(this.collection.models, function(chat) {
                var chatView = new pw.views.singleChatListView({
                    model: chat
                });

                this.el.append(chatView.render().el);
            }.bind(this));

            this.$content.append(this.el);
            this.setElement($('.comp-chats'));
        }
    })
})(powersed);
(function (pw) {
    'use strict';

    pw.views.singleChatListView = Backbone.View.extend({

        template: _.template($("#tpl-single-chat").html()),

        /**
         * Initialize
         */
        initialize: function() {
            this.render();
        },

        /**
         * Render
         * @returns {pw.views.mentorView}
         */
        render: function() {
            this.$el.html(this.template(this.model.toJSON()));

            return this;
        }
    })
})(powersed);
(function (pw) {
    'use strict';

    pw.views.profileModel = Backbone.Model.extend({
        url: globals.api.getProfile
    })
})(powersed);
(function (pw) {
    'use strict';

    pw.views.profileView = Backbone.View.extend({

        template: _.template($("#tpl-profile").html()),

        /**
         * Initialize profile view
         */
        initialize: function() {
            this.$el = $('#content');
            this.model = new pw.views.profileModel();
        },

        /**
         * Fetch profile model data
         */
        fetchData: function() {
            this.model.fetch().done(function() {
                this.render();
            }.bind(this));
        },

        /**
         * Render profile
         */
        render: function() {

            this.$el.html(this.template(this.model.toJSON()));
        }
    })
})(powersed);
(function (pw) {
    'use strict';

    pw.models.singleChatModel = Backbone.Model.extend({
        defaults: {
            pictureUrl: 'dist/images/profile-placeholder.png',
            id: '123'
        }
    })

})(powersed);
(function (pw) {
    'use strict';

    pw.views.singleChatMessageView = Backbone.View.extend({

        template: _.template($("#tpl-chat-message").html()),

        className: 'chat-message',

        /**
         * Initialize
         */
        initialize: function() {
            this.render();
        },

        /**
         * Render
         * @returns {pw.views.mentorView}
         */
        render: function() {
            this.$el.html(this.template(this.model.toJSON()));

            if (this.model.get('user') === 'one') {
                this.$el.addClass('user-one');
            }

            return this;
        }
    })
})(powersed);
(function (pw) {
    'use strict';

    pw.collections.singleChatCollection = Backbone.Collection.extend({
        url: globals.api.getChat,
        model: pw.models.singleChatModel
    })
})(powersed);
(function (pw) {
    'use strict';

    pw.views.singleChatView = Backbone.View.extend({

        el: '.comp-chat',

        /**
         * Initialize
         */
        initialize: function() {
            //elements
            this.$content = $('#content');
            this.$messageContainer = $('.chat-messages');
            this.$messageInput = $('#inputNewMessage');

            //init and bind
            this.collection = new pw.collections.singleChatCollection();
            this.listenTo( this.collection, 'add', this.render );
        },

        events: {
            'click .send-message-btn': 'sendChat'
        },

        /**
         * Fetch chat messages for given chat
         */
        fetchData: function() {
            this.collection.fetch().done(function(d) {
                this.render();
            }.bind(this));
        },

        /**
         * Send a new chat
         * @param e
         */
        sendChat: function(e) {
            console.log('click!');
            e.preventDefault();
            var newMessageText = this.$messageInput.val();

            this.collection.add({
                timestamp: new Date(),
                message: newMessageText
            });
        },

        /**
         * Render
         */
        render: function() {
            this.$content.empty();
            this.$messageContainer.empty();

            _.each(this.collection.models, function(message) {
                var messageView = new pw.views.singleChatMessageView({
                    model: message
                });

                this.$messageContainer.append(messageView.render().el);

            }.bind(this));

            this.$content.append(this.el);
            window.scrollTo(0,document.body.scrollHeight);
            this.setElement($('.comp-chat'));
        }
    })
})(powersed);
// App.js

var app = (function(pw) {

    var api = {
        views: {},
        models: {},
        collections: {},
        content: null,
        router: null,
        todos: null,
        init: function() {
            this.content = $("#content");
            ViewsFactory.init();
            Backbone.history.start();
            return this;
        },
        changeContent: function(el) {
            this.content.empty().append(el);
            return this;
        },
        title: function(str) {
            $("h1").text(str);
            return this;
        }
    };

    //create object of all BB views
    var ViewsFactory = [];
    ViewsFactory.views = {};
    globals.views.forEach(function(view) {

        ViewsFactory.views[view + 'PW'] = function() {
            if (!this.views[view]) {
                this.views[view] = new pw.views[view]();
            }
            return this.views[view];
        }
    });

    /**
     * Create init() method to initialize all BB views
     */
    ViewsFactory['init'] = function() {
        for (var view in this.views) {
            this.views[view].apply(this);
        }
    };

    var Router = Backbone.Router.extend({
        routes: {
            '': 'connectAccount',
            'home': 'home',
            'profile': 'profile',
            'chats': 'chats',
            'chat': 'chat'
        },

        home: function() {
            console.log('home page');
            ViewsFactory.views.mentorsView.fetchData();
        },

        profile: function() {
            ViewsFactory.views.profileView.fetchData();
        },

        chats: function() {
            ViewsFactory.views.chatsListView.fetchData();
        },

        chat: function() {
            ViewsFactory.views.singleChatView.fetchData();
        },

        connectAccount: function() {
            console.log('connect');
            ViewsFactory.views.connectAccountView.render();
        }

    });
    api.router = new Router();

    return api;

})(powersed);