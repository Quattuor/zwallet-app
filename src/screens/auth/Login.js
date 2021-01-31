import React, {useState} from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';

import MyTextInput from '../../components/auth/MyTextInput';
import ButtonAuth from '../../components/auth/ButtonAuth';
import styles from '../../styles/authStyles';

const Login = () => {
  const [error, setError] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [user, setUser] = useState({
    name: '',
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

    if (updateValue.name.length && updateValue.pass.length) {
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
      <View style={styles.topContainer}>
        <Text style={styles.title1}>Zwallet</Text>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.title2}>Login</Text>
        <View style={styles.wrapSubtitle}>
          <Text style={styles.subtitle}>
            Login to your existing account to access all the features in
            Zwallet.
          </Text>
        </View>
        <MyTextInput
          placeholder="Enter your e-mail"
          name="name"
          value={user.name}
          changeValue={changeValue}
          left="mail"
          error={error}
        />
        <MyTextInput
          placeholder="Enter your password"
          name="pass"
          value={user.pass}
          changeValue={changeValue}
          left="lock"
          secure={true}
          error={error}
        />
        <TouchableOpacity style={styles.btnForgotPass}>
          <Text style={styles.forgotPass}>Forgot Password?</Text>
        </TouchableOpacity>
        <Text style={styles.error}>{error}</Text>
        <ButtonAuth title="Login" disabled={disabled} onPress={onSubmit} />
        <View style={styles.signUpSection}>
          <Text style={styles.signUpText1}>Don’t have an account? Let’s</Text>
          <TouchableOpacity style={styles.signUpBtn}>
            <Text style={styles.signUpText2}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;
