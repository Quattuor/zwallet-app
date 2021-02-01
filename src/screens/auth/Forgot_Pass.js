import React, {useState} from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import MyStatusBar from '../../components/MyStatusBar';
import MyTextInput from '../../components/auth/MyTextInput';
import ButtonAuth from '../../components/auth/ButtonAuth';
import styles from '../../styles/authStyles';

const Forgot_Pass = () => {
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

  const onSubmit = () => {
    const {email} = user;

    if (!email.trim().length) {
      setError('Please fulfill the form !');
    }

    // console.log(user);
    navigation.push('Reset Pass');
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
