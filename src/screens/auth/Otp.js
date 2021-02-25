import React, {useState} from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import axios from 'axios';

import MyStatusBar from '../../components/MyStatusBar';
import MyTextInput from '../../components/auth/MyTextInput';
import ButtonAuth from '../../components/auth/ButtonAuth';
import styles from '../../styles/authStyles';
import {API_URL} from '@env';

const Otp = () => {
  const navigation = useNavigation();
  const [error, setError] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [user, setUser] = useState({
    otp: '',
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

    if (updateValue.otp.length) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const onSubmit = async () => {
    const {otp} = user;

    if (!otp.trim().length) {
      setError('Please fulfill the form !');
    }
    axios
      .post(API_URL + '/auth/otp', {otp})
      .then(({data}) => {
        if (data.error) {
          setError(data.message);
        } else {
          setError('');
        }

        if (data.data) {
          navigation.replace('Reset Pass', {email: data.data.email});
          setUser({otp: ''});
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
        <Text style={styles.title2}>OTP</Text>
        <View style={styles.wrapSubtitle}>
          <Text style={styles.subtitle}>
            Enter your Otp so we can verify you to reset password.
          </Text>
        </View>
        <MyTextInput
          placeholder="Enter your otp"
          name="otp"
          value={user.otp}
          changeValue={changeValue}
          left="lock"
          error={error}
          max={6}
        />
        <Text style={styles.error}>{error}</Text>
        <View style={styles.bottomArea}>
          <ButtonAuth title="Confirm" disabled={disabled} onPress={onSubmit} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Otp;
