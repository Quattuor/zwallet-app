import React from 'react';
import {StyleSheet, Text} from 'react-native';

function CustomText({style, children, ...otherprops}) {
  return (
    <Text style={{...styles.boldFont, ...style}} {...otherprops}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  boldFont: {
    fontFamily: 'NunitoSans-Bold',
  },
});

export default CustomText;
