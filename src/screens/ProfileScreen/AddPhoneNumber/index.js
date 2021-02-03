import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ToastAndroid,
} from 'react-native';
import {Input} from 'react-native-elements';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';
import {API_URL} from '@env';
import axios from 'axios';

const AddPhoneNumber = ({navigation}) => {
  const token = useSelector((state) => state.auth.login.data.token);
  const id = useSelector((state) => state.auth.login.data.id);

  const [number, setNumber] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const filled = () => {
    if (number === '') {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = () => {
    const testNumber = /^(^\+62|62|^08)(\d{3,4}-?){2}\d{3,4}$/;
    if (!filled()) {
      if (testNumber.test(number)) {
        const config = {
          headers: {
            'x-access-token': 'bearer ' + token,
          },
        };
        const updatePhone = {
          phone: number,
        };
        axios
          .patch(`${API_URL}/user/${id}`, updatePhone, config)
          .then(({data}) => {
            ToastAndroid.show(data.message, ToastAndroid.SHORT);
            navigation.replace('Profile');
          })
          .catch(({response}) => {
            if (response.status === 401) {
              ToastAndroid.show(response.data.message, ToastAndroid.SHORT);
            }
            console.log(response.data);
          });
      } else if (number.length < 11) {
        setErrMsg('Format no telepon Min.11');
      } else if (number.length > 12) {
        setErrMsg('Format no telepon Maks.12');
      } else {
        setErrMsg('Format number salah !');
      }
    } else {
      setErrMsg('Kolom tidak boleh kosong !');
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
            onChangeText={(num) => setNumber(num)}
            editable={true}
            leftIcon={
              <Icon
                name="phone"
                color={number === '' ? '#878787' : '#6379F4'}
                size={20}
              />
            }
            placeholder="Enter your phone number"
            inputContainerStyle={[styles.inputContainerStyle, {marginTop: 53}]}
            inputStyle={styles.inputStyle}
            keyboardType="phone-pad"
          />
          <Text style={{color: 'red', fontWeight: 'bold'}}>{errMsg}</Text>
        </View>
      </ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <TouchableOpacity
          style={filled() ? styles.btn : styles.btnActive}
          onPress={handleSubmit}>
          <Text style={filled() ? styles.continue : styles.continueActive}>
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
