import { Components, addGraphQLQuery, addGraphQLResolvers, Connectors, getIntlString } from 'meteor/vulcan:core';
import { intlShape } from 'meteor/vulcan:i18n';

import Users from 'meteor/vulcan:users';

Users.groups.guests.can([
  'module.read.all',
  'module.create',
  'module.update',
  'module.update.all',
  'module.delete.all',
]);

const schema = {

  _id: {
    type: String,
    optional: true,
    canRead: ['guests'],
  },
  createdAt: {
    type: Date,
    optional: true,
    canRead: ['guests'],
    onCreate: () => {
      return new Date();
    },
  },
  editedAt: {
    type: Date,
    optional: true,
    canRead: ['guests'],
    onUpdate: () => {
      return new Date();
    },
  },
  // Titel
  title: {
    label: 'Title',
    type: String,
    optional: true,
    label: 'Title',
    control: 'textbox',
    canRead: ['guests'],
    canCreate: ['guests'],
    canUpdate: ['guests'],
    intl: true
  },
  // maximale Teilnehmerzahl
  maxParticipants: {
    type: Number,
    canRead: ['guests'],
    canCreate: ['guests'],
    canUpdate: ['guests'],
  },
};

export default schema;
