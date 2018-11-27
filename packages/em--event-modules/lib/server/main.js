import '../modules/index.js';
import './seed.js';

Meteor.startup(()=>{
  Vulcan.migrateIntlFields('de');
});

