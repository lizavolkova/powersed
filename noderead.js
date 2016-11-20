fs = require('fs');

fs.readFile('./dist/all.js', 'utf8', function(err, data) {
    var ViewsFactory = []
    var views = data.match(/\bpw.views.\S*/g)
    views.forEach(function(view) {
        ViewsFactory[view] = function() {
            if (!this[view]) {
                this[view] = new view()
            }
            return this[view]
        }

    })

    console.log(ViewsFactory);
});

// header: function() {
//     if (!this.headerView) {
//         this.headerView = new pw.views.headerView({
//             $el: $('#header')
//         });
//     }
//     return this.headerView;
// },