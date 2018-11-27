import { createCollection, getDefaultResolvers, getDefaultMutations, addCallback } from 'meteor/vulcan:core';

import schema from './schema.js';
import './fragments.js';
import mutations from './mutations.js';

const Modules = createCollection({

  collectionName: 'Modules',

  typeName: 'Module',

  schema: schema,

  // resolvers: resolvers,
  resolvers: getDefaultResolvers({typeName: 'Module'}),

  mutations: mutations,
  // mutations: getDefaultMutations({typeName: 'Module'}),

});

export default Modules;
