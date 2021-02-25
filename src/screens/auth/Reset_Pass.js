import React, {useState} from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

import MyStatusBar from '../../components/MyStatusBar';
import MyTextInput from '../../components/auth/MyTextInput';
import ButtonAuth from '../../components/auth/ButtonAuth';
import styles from '../../styles/authStyles';
import {API_URL} from '@env';

const Reset_Pass = ({route}) => {
  const navigation = useNavigation();
  const [error, setError] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [user, setUser] = useState({
    pass1: '',
    pass2: '',
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

    if (updateValue.pass1.length && updateValue.pass2.length) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const onSubmit = () => {
    const {pass1, pass2} = user;

    if (pass1 !== pass2) {
      setError("Password doesn't match !");
    } else {
      const email = route.params.email;
      axios
        .post(API_URL + '/auth/reset_pass', {email, password: pass1})
        .then(({data}) => {
          if (data.error) {
            setError(data.message);
          } else {
            setError('');
          }

          if (data.data) {
            navigation.navigate('Home');
            setUser({pass1: '', pass2: ''});
          }
        })
        .catch((e) => {
          console.log(e, 'Error');
        });
    }
    // console.log(user);
    // navigation.reset();
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
            Create and confirm your new password so you can login to Zwallet.
          </Text>
        </View>
        <MyTextInput
          placeholder="Create new password"
          name="pass1"
          value={user.pass1}
          changeValue={changeValue}
          left="lock"
          secure={true}
          error={error}
        />
        <MyTextInput
          placeholder="Confirm new password"
          name="pass2"
          value={user.pass2}
          changeValue={changeValue}
          left="lock"
          secure={true}
          error={error}
        />
        <Text style={styles.error}>{error}</Text>
        <View style={styles.bottomArea}>
          <ButtonAuth
            title="Reset Password"
            disabled={disabled}
            onPress={onSubmit}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Reset_Pass;
