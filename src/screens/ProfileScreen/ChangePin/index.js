import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import SmoothPinCode from 'react-native-smooth-pincode-input';

const ChangePin = () => {
  const [code, setCode] = useState('');
  const filled = () => {
    if (code.length === 6) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <ScrollView
        contentContainerStyle={{padding: 20}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.textTitle}>
          <Text style={styles.subTitle}>
            Enter your current 6 digits Zwallet PIN below to continue to the
            next steps.
          </Text>
        </View>
        <View style={styles.formPin}>
          <SmoothPinCode
            password={true}
            codeLength={6}
            cellStyle={filled() ? styles.cellPinFilled : styles.cellPin}
            value={code}
            onTextChange={(code) => setCode(code)}
          />
        </View>
      </ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <TouchableOpacity style={!filled() ? styles.btn : styles.btnActive}>
          <Text style={!filled() ? styles.continue : styles.continueActive}>
            Continue
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </>
  );
};

export default ChangePin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20,
  },
  textTitle: {
    marginTop: 30,
    alignItems: 'center',
  },
  subTitle: {
    textAlign: 'center',
    fontSize: 17,
    color: '#7A7886',
    marginBottom: 20,
  },
  formPin: {
    marginTop: 10,
    alignItems: 'center',
    marginBottom: '100%',
  },
  cellPin: {
    borderRadius: 10,
    width: 45,
    borderColor: '#958E8E',
    borderWidth: 1,
  },
  cellPinFilled: {
    borderRadius: 10,
    width: 45,
    borderColor: '#6379F4',
    borderWidth: 1,
  },
  btn: {
    width: '92%',
    backgroundColor: '#DADADA',
    padding: 18,
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 12,
  },
  btnActive: {
    width: '92%',
    backgroundColor: '#6379F4',
    padding: 18,
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 12,
  },
  continue: {
    fontWeight: 'bold',
    color: '#88888F',
    fontSize: 20,
  },
  continueActive: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  },
});
