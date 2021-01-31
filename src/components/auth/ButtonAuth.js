import React, {useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const ButtonAuth = ({title = '', disabled = false, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles.btn,
        ...{backgroundColor: disabled ? '#DADADA' : '#6379F4'},
      }}
      disabled={disabled}>
      <Text style={{...styles.text, ...{color: disabled ? '#88888F' : '#FFF'}}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonAuth;

const styles = StyleSheet.create({
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 57,
    borderRadius: 12,
  },
  text: {
    fontFamily: 'NunitoSans-Bold',
    fontSize: 18,
  },
});
