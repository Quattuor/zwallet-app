import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';

const AddPhoneNumber = () => {
  const [number, setNumber] = useState('');

  const filled = () => {
    if (number.length === 12) {
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
            Add at least one phone number for the transfer ID so you can start
            transfering your money to another user.
          </Text>
        </View>
        <View style={styles.formPin}>
          <Input
            value={number}
            onChangeText={(number) => setNumber(number)}
            editable={true}
            leftIcon={<Icon name="phone" color="#6379F4" size={20} />}
            placeholder="Enter your phone number"
            inputContainerStyle={[styles.inputContainerStyle, {marginTop: 53}]}
            inputStyle={styles.inputStyle}
            keyboardType="phone-pad"
          />
        </View>
      </ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <TouchableOpacity style={!filled() ? styles.btn : styles.btnActive}>
          <Text style={!filled() ? styles.continue : styles.continueActive}>
            Submit
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </>
  );
};

export default AddPhoneNumber;

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
    marginBottom: '70%',
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
