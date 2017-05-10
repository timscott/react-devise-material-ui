import React from 'react';
import {TextField, RaisedButton, FlatButton} from 'material-ui';

const plugin = ({useFlatButton = false} = {}) => {
  const ButtonComponent = useFlatButton ? FlatButton : RaisedButton;
  const SubmitButton = ({label, disabled}) => (
    <ButtonComponent
      label={label}
      primary={true}
      type="submit"
      disabled={disabled}
    />
  );
  const renderInput = ({input, label, type = 'text', meta: {touched, error}, ...rest}) => (
    <div>
      <TextField
        hintText={label}
        floatingLabelText={label}
        type={type}
        errorText={touched && error}
        {...input}
        {...rest}
      />
    </div>
  );
  return {
    renderInput,
    SubmitButton
  };
};

export default {
  plugin
};
