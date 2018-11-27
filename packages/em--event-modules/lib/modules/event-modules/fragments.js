import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
  fragment ModulesItemFragment on Module {
    _id
    title
    title_intl {
      locale
      value
    }
    maxParticipants
  }
`);
