import React, {useState} from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import axios from 'axios';

import {sendOtp} from '../../utils/redux/actionCreators/auth';
import MyStatusBar from '../../components/MyStatusBar';
import MyTextInput from '../../components/auth/MyTextInput';
import ButtonAuth from '../../components/auth/ButtonAuth';
import styles from '../../styles/authStyles';
import {API_URL} from '@env';

const Forgot_Pass = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [error, setError] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [user, setUser] = useState({
    email: '',
  });

  const changeValue = (name, value) => {
    setUser({
      ...user,
      [name]: value,
    });
    const updateValue = {
      ...user,
      [name]: value,
    };

    if (updateValue.email.length) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const onSubmit = async () => {
    const {email} = user;

    if (!email.trim().length) {
      setError('Please fulfill the form !');
    }
    axios
      .post(API_URL + '/auth/send_otp', {email})
      .then(({data}) => {
        if (data.error) {
          setError(data.message);
        } else {
          setError('');
        }

        if (data.data) {
          setUser({email: ''});
          navigation.navigate('Otp');
        }
      })
      .catch((e) => {
        console.log(e, 'Error');
      });
    // console.log(user);
    // navigation.push('Reset Pass');
  };

  return (
    <ScrollView style={styles.container}>
      <MyStatusBar />
      <View style={styles.topContainer}>
        <Text style={styles.title1}>Zwallet</Text>
      </View>
      <View style={styles.bottomContainer2}>
        <Text style={styles.title2}>Reset Password</Text>
        <View style={styles.wrapSubtitle}>
          <Text style={styles.subtitle}>
            Enter your Zwallet e-mail so we can send you a password reset link.
          </Text>
        </View>
        <MyTextInput
          placeholder="Enter your e-mail"
          name="email"
          value={user.email}
          changeValue={changeValue}
          left="mail"
          error={error}
        />
        <Text style={styles.error}>{error}</Text>
        <View style={styles.bottomArea}>
          <ButtonAuth title="Confirm" disabled={disabled} onPress={onSubmit} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Forgot_Pass;
