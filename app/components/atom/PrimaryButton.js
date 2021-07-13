import React from 'react';
import { Button } from 'react-native-paper';

//utils
import en from "../../utils/en.json"

const PrimaryButton = ({ icon, mode, onPress, text, style }) => {
  return (
    <Button icon={icon} mode={mode} onPress={onPress} style={style}>
      {en.LOGIN}
    </Button>
  );
};

export default PrimaryButton;
