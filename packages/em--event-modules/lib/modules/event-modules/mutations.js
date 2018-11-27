import {
  createMutator,
  updateMutator,
  deleteMutator,
  Utils,
} from 'meteor/vulcan:core';
import Users from 'meteor/vulcan:users';

const mutations = {
  create: {
    name: 'createModule',

    check(user) {
      if (!user) return false;
      return Users.canDo(user, 'module.create');
    },

    mutation(root, args, context) {
      const { data: document } = args;

      Utils.performCheck(this.check, context.currentUser, document);

      return createMutator({
        collection: context.Modules,
        document: document,
        currentUser: context.currentUser,
        validate: true,
        context,
      });
    },
  },

  update: {
    name: 'updateModule',

    check(user, document) {
      // if (!user || !document) return false;
      if (!document) return false;
      if (!user) {
        return Users.groups.guests.actions.includes('module.update.all');
      } else {
        return Users.owns(user, document)
          ? Users.canDo(user, 'module.update')
          : Users.canDo(user, `module.update`);
      }
    },

    mutation(root, {selector, data}, context) {
      const document = context.Modules.findOne( {_id: selector.documentId || selector._id});
      Utils.performCheck(this.check, context.currentUser, document, context, data._id, 'Modules.update', 'Modules');

      return updateMutator({
        collection: context.Modules,
        selector: selector,
        data: data,
        currentUser: context.currentUser,
        validate: true,
        context,
      });
    },
  },

  delete: {
    name: 'deleteModule',

    check(user, document) {
      if (!user || !document) return false;
      return Users.owns(user, document)
        ? Users.canDo(user, 'modules.delete')
        : Users.canDo(user, `modules.delete`);
    },

    mutation(root, { selector }, context) {
      const document = context.Modules.findOne({ _id: selector.documentId || selector._id });
      Utils.performCheck(this.check, context.currentUser, document);

      return deleteMutator({
        collection: context.Modules,
        selector: selector,
        currentUser: context.currentUser,
        validate: true,
        context,
      });
    },
  },
};

export default mutations;
