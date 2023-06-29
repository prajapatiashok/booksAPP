import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import Text from '../Text/Text';

interface ButtonComponentProps extends TouchableOpacityProps {
  title: string;
  onPress: () => void;
}

const ButtonComponent = ({title, onPress}: ButtonComponentProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={{fontSize: 16}}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;
