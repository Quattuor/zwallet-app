import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import IconF from 'react-native-vector-icons/Feather';

const MyTextInput = ({
  placeholder = '',
  value = '',
  changeValue,
  error = false,
  left,
  secure = false,
  name,
}) => {
  const [color, setColor] = useState('rgba(169, 169, 169, 0.6);');
  const [hide, setHide] = useState(true);

  const onTyping = (e) => {
    if (e.length) {
      setColor('#6379F4');
    } else {
      setColor('rgba(169, 169, 169, 0.6);');
    }
    changeValue(name, e);
  };

  const changeHide = () => {
    return hide ? setHide(false) : setHide(true);
  };

  useEffect(() => {
    if (error.length) {
      setColor('#FF5B37');
    }
  }, [error]);

  return (
    <KeyboardAvoidingView>
      <View style={styles.areaInput}>
        <TextInput
          placeholder={placeholder}
          value={value}
          secureTextEntry={secure && hide ? true : false}
          style={{
            ...styles.input,
            ...{
              borderBottomColor: color,
              paddingLeft: left ? 40 : 5,
              paddingRight: secure ? 30 : 5,
            },
          }}
          onChangeText={(e) => onTyping(e)}
          placeholderTextColor={color}
        />
        {left && (
          <IconF name={left} color={color} size={20} style={styles.left} />
        )}
        {secure && (
          <TouchableOpacity style={styles.right} onPress={changeHide}>
            <IconF
              name={hide ? 'eye-off' : 'eye'}
              size={20}
              color="rgba(169, 169, 169, 0.6);"
            />
          </TouchableOpacity>
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

export default MyTextInput;

const styles = StyleSheet.create({
  areaInput: {
    position: 'relative',
    marginTop: 40,
  },
  input: {
    padding: 6,
    borderBottomWidth: 1.5,
  },
  left: {
    position: 'absolute',
    left: 5,
    top: 10,
  },
  right: {
    position: 'absolute',
    right: 5,
    top: 10,
  },
});
