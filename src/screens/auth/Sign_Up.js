import React, {useState} from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';

import MyTextInput from '../../components/auth/MyTextInput';
import ButtonAuth from '../../components/auth/ButtonAuth';
import MyStatusBar from '../../components/MyStatusBar';
import styles from '../../styles/authStyles';

const Sign_Up = () => {
  const [error, setError] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [user, setUser] = useState({
    name: '',
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

    if (
      updateValue.name.length &&
      updateValue.email.length &&
      updateValue.pass.length
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const onSubmit = () => {
    const {name, pass} = user;

    if (!name.trim().length && !pass.length) {
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
      <View style={styles.bottomContainer}>
        <Text style={styles.title2}>Sign Up</Text>
        <View style={styles.wrapSubtitle}>
          <Text style={styles.subtitle}>
            Create your accout to access Zwallet
          </Text>
        </View>
        <MyTextInput
          placeholder="Enter your username"
          name="name"
          value={user.name}
          changeValue={changeValue}
          left="user"
          error={error}
        />
        <MyTextInput
          placeholder="Enter your e-mail"
          name="email"
          value={user.email}
          changeValue={changeValue}
          left="mail"
          error={error}
        />
        <MyTextInput
          placeholder="Create your password"
          name="pass"
          value={user.pass}
          changeValue={changeValue}
          left="lock"
          secure={true}
          error={error}
        />
        <Text style={styles.error}>{error}</Text>
        <ButtonAuth title="Login" disabled={disabled} onPress={onSubmit} />
        <View style={styles.signUpSection}>
          <Text style={styles.signUpText1}>Already have an account? Let’s</Text>
          <TouchableOpacity style={styles.signUpBtn}>
            <Text style={styles.signUpText2}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Sign_Up;
