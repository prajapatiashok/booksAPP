import React from 'react';
import {View, StyleSheet} from 'react-native';

const Divider = (): JSX.Element => {
  return <View style={styles.divider} />;
};

const styles = StyleSheet.create({
  divider: {
    width: '100%',
    borderWidth: 2,
    borderColor: '#EDEEF3',
    marginVertical: 15,
  },
});

export default Divider;
