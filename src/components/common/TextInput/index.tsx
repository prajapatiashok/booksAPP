import React from 'react';
import {TextInput, TextInputProps} from 'react-native';

interface TextInputComponentProps extends TextInputProps {
  placeholder: string;
  value: string;
}

const TextInputComponent = ({
  placeholder,
  value,
  ...props
}: TextInputComponentProps) => {
  return <TextInput placeholder={placeholder} value={value} {...props} />;
};

export default TextInputComponent;
