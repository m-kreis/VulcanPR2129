import { registerLocale } from 'meteor/vulcan:core';

registerLocale({
  id: 'de', // will be used as a general identifier and URL slug
  aliases: ['de_CH', 'de_DE'], // other strings that should be matched [TODO]
  label: 'Deutsch', // an optional label used in forms, etc.
  domains: ['http://localhost:3000'], // domain aliases that should use the locale [TODO]
});

registerLocale({
  id: 'fr', // will be used as a general identifier and URL slug
  aliases: ['fr_CH', 'fr_fr'], // other strings that should be matched [TODO]
  label: 'Français', // an optional label used in forms, etc.
  domains: ['http://localhost:3000'], // domain aliases that should use the locale [TODO]
});
