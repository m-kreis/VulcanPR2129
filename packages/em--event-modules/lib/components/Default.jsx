import React from 'react';
// import { Input, FormGroup, Label } from 'reactstrap';
import PropTypes from 'prop-types';
import { replaceComponent } from 'meteor/vulcan:core';
import _ from 'underscore';

const Default = ({ refFunction, inputProperties, layout}, {updateCurrentValues, submitForm}) => {

  // this.input.onChange = this.onChange;

  const onChange = (e) => {
    inputProperties.onChange(e.target.name, e.target.value)
  };

  return (
    <div>
      <label>{inputProperties.label}</label>
      <input
        type="text"
        name={inputProperties.name}
        value={inputProperties.value}
        onChange={onChange}
      />
    </div>
  );

}

// Default.contextTypes = {
//   updateCurrentValues: PropTypes.func,
//   getDocument: PropTypes.func,
//   submitForm: PropTypes.func,
// };

replaceComponent('FormComponentDefault', Default);
replaceComponent('FormComponentText', Default);
