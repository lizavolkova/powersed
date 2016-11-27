 <h1>Powers Education</h1>

#### How to set up project on local

You will need the following installed in order to get started:
- A PHP server. https://www.apachefriends.org/index.html is a great one, but any other local server will work
- NodeJS: https://nodejs.org/en/
- NPM: http://blog.npmjs.org/post/85484771375/how-to-install-npm

#### Technology used in the project
- BackboneJS: http://backbonejs.org/
- UnderscoreJS: http://underscorejs.org/
- JQuery: https://jquery.com/
- SASS: http://sass-lang.com/
- Twitter Bootstrap: http://getbootstrap.com/
- Gulp: http://gulpjs.com/

#### Getting started
After clonign the repo into a folder that has your PHP server running, run the following command to install all the project dependencies:
```sh
npm install
```

Next just run
```sh
gulp
```

This will compile all the resources into the /dist folder.

Now, you should be able to open the index.html file and see the working app.

#### How to create a new view, model, collection
 IMPORTANT NOTE: Anytime a new view gets created, it needs to be added to the globals.views variable inside globals/js/globals.js
 In the future, this process should be automated so all created views get automatically added to this array.
 Below is blueprint for a generic Backbone model, collection, and view for the project:

 Model
 ```javascript
    (function (pw) {
          'use strict';

          pw.views.mentorModel = Backbone.Model.extend({
              defaults: {
                name: 'default name'
              }
          })
      })(powersed);

 ```

  Collection
  ```javascript
  (function (pw) {
         'use strict';

         pw.views.mentorsCollection = Backbone.Collection.extend({
             url: globals.api.getMentors,
             model: pw.models.mentorModel
         })
     })(powersed);

  ```

   View
   ```javascript
   (function (pw) {
       'use strict';

       pw.views.mentorsView = Backbone.View.extend({
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

           }
       })
   })(powersed);

   ```

#### Folder Structure
- /globals folder contains all global js and css for the application as well as fonts and images. Global color variables are defined here as well using http://chir.ag/projects/name-that-color convention.
- /data folder is where the current mock api data is defined. This folder will eventually be obsolete when apis are developed.
- /dist folder is where all resources are compiled to and served from
- /components folder is the main application folder. It is further subdivided into a /common and /components folder. /common folder contains common ui elements for the entire application. /components folder contains individual components.

