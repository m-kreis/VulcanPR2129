Package.describe({
  name: 'em:event-modules',
});

Package.onUse(function (api) {

  api.use([
    'promise',

    // vulcan core
    'vulcan:core@1.12.10',

    // vulcan packages
    'vulcan:forms@1.12.10',
    'vulcan:ui-bootstrap@1.12.10',

    // third-party packages
    'fourseven:scss@4.9.3',

  ]);

  // api.addFiles('lib/stylesheets/style.scss');

  api.mainModule('lib/server/main.js', 'server');
  api.mainModule('lib/client/main.js', 'client');

});
