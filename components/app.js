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
    }

    var Router = Backbone.Router.extend();
    api.router = new Router();

    return api;

})(powersed);