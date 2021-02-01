import React, {useState} from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import MyStatusBar from '../../components/MyStatusBar';
import MyTextInput from '../../components/auth/MyTextInput';
import ButtonAuth from '../../components/auth/ButtonAuth';
import styles from '../../styles/authStyles';
import PinInput from '../../components/auth/PinInput';

const Create_Pin = () => {
  const navigation = useNavigation();
  const [error, setError] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [user, setUser] = useState({
    email: '',
    pass: '',
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

    if (updateValue.email.length && updateValue.pass.length) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const onSubmit = () => {
    const {email, pass} = user;

    if (!email.trim().length && !pass.length) {
      setError('Please fulfill the form !');
    }

    console.log(user);
  };

  return (
    <ScrollView style={styles.container}>
      <MyStatusBar />
      <View style={styles.topContainer}>
        <Text style={styles.title1}>Zwallet</Text>
      </View>
      <View style={styles.bottomContainer2}>
        <Text style={styles.title2}>Create Security PIN</Text>
        <View style={styles.wrapSubtitle}>
          <Text style={styles.subtitle}>
            Create a PIN that’s contain 6 digits number for security purpose in
            Zwallet.
          </Text>
        </View>
        <PinInput />
        <Text style={styles.error}>{error}</Text>
        <View style={styles.bottomArea}>
          <ButtonAuth title="Confirm" disabled={disabled} onPress={onSubmit} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Create_Pin;
