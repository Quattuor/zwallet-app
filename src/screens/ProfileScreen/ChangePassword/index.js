import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ToastAndroid,
  ScrollView,
} from 'react-native';
import {Button, Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';
import {API_URL} from '@env';
import {useSelector} from 'react-redux';
import axios from 'axios';

const ChangePassword = ({navigation}) => {
  const [pass, setPass] = useState('');
  const [pass2, setPass2] = useState('');
  const [pass3, setPass3] = useState('');
  const [show, setShow] = useState(true);
  const [show2, setShow2] = useState(true);
  const [show3, setShow3] = useState(true);
  const [errMsg, setErrMsg] = useState('');

  const token = useSelector((state) => state.auth.login.data.token);

  const empty = () => {
    if (pass === '' || pass2 === '' || pass3 === '') {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = () => {
    if (!empty()) {
      if (pass2 !== pass3) {
        setErrMsg('Konfirmasi password harus sama !');
      } else {
        const checkPass = /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{8,}$/;
        if (checkPass.test(pass2)) {
          setErrMsg('');
          const config = {
            headers: {
              'x-access-token': 'bearer ' + token,
            },
          };
          const updatePassword = {
            oldpass: pass,
            newpass: pass2,
          };
          axios
            .patch(API_URL + '/user/pw/new', updatePassword, config)
            .then(({data}) => {
              ToastAndroid.show(data.message, ToastAndroid.SHORT);
              // console.log('PASSWORD', data);
              navigation.replace('Profile');
            })
            .catch(({response}) => {
              if (response.status === 400) {
                ToastAndroid.show(response.data.error, ToastAndroid.SHORT);
                setPass('');
              }
            });
        } else {
          setErrMsg(
            'Password must contain at least 1 number, and be longer than 8 character',
          );
        }
      }
    } else {
      setErrMsg('Password tidak boleh kosong!');
    }
  };
  return (
    <>
      <View style={styles.container}>
        <View
          style={{flexDirection: 'column', justifyContent: 'space-between'}}>
          <ScrollView>
            <Text style={styles.subHeaderText}>
              You must enter your current password and then type your new
              password twice.
            </Text>
            <Text style={{color: 'red', fontWeight: 'bold'}}>{errMsg}</Text>
            <Input
              secureTextEntry={show}
              placeholder="Current Password"
              autoCapitalize="none"
              editable={true}
              leftIcon={<Icon name="lock" color="#6379F4" size={20} />}
              rightIcon={
                <Icon
                  name={!show ? 'eye' : 'eye-off'}
                  color="#A9A9A9"
                  size={20}
                  onPress={() => {
                    setShow(!show);
                  }}
                />
              }
              value={pass}
              onChangeText={(text) => {
                setPass(text);
              }}
              inputContainerStyle={[
                styles.inputContainerStyle,
                {marginTop: 54},
              ]}
              inputStyle={styles.inputStyle}
            />
            <Input
              secureTextEntry={show2}
              placeholder="New Password"
              autoCapitalize="none"
              editable={true}
              leftIcon={<Icon name="lock" color="#6379F4" size={20} />}
              rightIcon={
                <Icon
                  name={!show2 ? 'eye' : 'eye-off'}
                  color="#A9A9A9"
                  size={20}
                  onPress={() => {
                    setShow2(!show2);
                  }}
                />
              }
              onChangeText={(text) => {
                setPass2(text);
              }}
              inputContainerStyle={styles.inputContainerStyle}
              inputStyle={styles.inputStyle}
            />
            <Input
              secureTextEntry={show3}
              placeholder="Repeat Password"
              autoCapitalize="none"
              editable={true}
              leftIcon={<Icon name="lock" color="#6379F4" size={20} />}
              rightIcon={
                <Icon
                  name={!show3 ? 'eye' : 'eye-off'}
                  color="#A9A9A9"
                  size={20}
                  onPress={() => {
                    setShow3(!show3);
                  }}
                />
              }
              onChangeText={(text) => {
                setPass3(text);
              }}
              inputContainerStyle={styles.inputContainerStyle}
              inputStyle={styles.inputStyle}
            />
          </ScrollView>
          <Button
            loadingProps={{size: 'large', color: 'white'}}
            buttonStyle={[styles.changePasswordButton, {marginTop: 0}]}
            title="Change Password"
            onPress={handleSubmit}
          />
        </View>
      </View>
    </>
  );
};

export default ChangePassword;

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width,
    height,
    backgroundColor: '#FAFCFF',
    paddingTop: 42,
    paddingLeft: 16,
    paddingRight: 16,
  },
  headerContainer: {
    width,
    display: 'flex',
    flexDirection: 'row',
  },
  headerText: {
    fontSize: 20,
    fontFamily: 'NunitoSans-Bold',
    alignSelf: 'center',
    color: '#4D4B57',
    marginLeft: 25,
  },
  subHeaderText: {
    color: '#7A7886',
    fontSize: 16,
    marginTop: 40,
    textAlign: 'justify',
    lineHeight: 27,
  },
  inputContainerStyle: {
    borderBottomColor: '#6379F4',
  },
  inputStyle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#3A3D42',
  },
  errorMessage: {
    color: '#FF5B37',
  },
  changePasswordButton: {
    height: 57,
    borderRadius: 12,
    backgroundColor: '#6379F4',
    marginTop: 217,
    marginBottom: 30,
  },
});
