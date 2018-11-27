
import Modules from '../modules/event-modules/collection.js';
import { newMutation } from 'meteor/vulcan:core';
import { Promise } from 'meteor/promise';

const seedData = [
    {
        "_id" : "H2HaXMBDMMg7ujBBk",
        "title" : "Vielfalter",
        "maxParticipants" : 16,
        "title_intl" : [
            {
                "locale" : "de",
                "value" : "Deutsch"
            },
            {
                "locale" : "fr",
                "value" : "Français"
            }
        ],
        "editedAt" : new Date()
    }
];

const seedModule = () => {
  if (Modules.find().fetch().length === 0) {
    // eslint-disable-next-line no-console
    console.log('// seeding database');

    Promise.awaitAll(
      seedData.map(document =>
        newMutation({
          collection: Modules,
          document: document,
          validate: false,
        })
      )
    );
  }
};

Meteor.startup(() => {
  seedModule();
});
