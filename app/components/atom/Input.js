import React from 'react';
import { TextInput } from 'react-native-paper';

const Input = ({
  value,
  onChangeText,
  secureTextEntry,
  label,
  onSubmitEditing,
  mode,
  style,
}) => {
  return (
    <TextInput
      onSubmitEditing={onSubmitEditing}
      label={label}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      mode={mode}
      style={style}
    />
  );
};

export default Input;
