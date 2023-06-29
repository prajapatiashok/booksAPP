import React from 'react';
import {Text as RNText, StyleSheet, TextStyle, StyleProp} from 'react-native';

interface ITextProps {
  bold?: boolean;
  invert?: boolean;
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
}

const Text = ({invert, style, children, ...props}: ITextProps): JSX.Element => {
  return (
    <RNText
      style={StyleSheet.flatten([invert && {color: '#fff'}, style && style])}
      {...props}>
      {children}
    </RNText>
  );
};

export default Text;
