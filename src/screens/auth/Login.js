/* eslint-disable react/no-did-mount-set-state */
import React, {Component} from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
// import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import {loginUser} from '../../utils/redux/actionCreators/auth';

import MyStatusBar from '../../components/MyStatusBar';
import MyTextInput from '../../components/auth/MyTextInput';
import ButtonAuth from '../../components/auth/ButtonAuth';
import styles from '../../styles/authStyles';

class Login extends Component {
  state = {
    error: '',
    disabled: true,
    user: {
      email: '',
      pass: '',
    },
    pending: false,
  };
  componentDidMount() {
    this.setState({
      user: {
        email: '',
        pass: '',
      },
    });
  }

  changeValue = (name, value) => {
    this.setState({
      user: {
        ...this.state.user,
        [name]: value,
      },
    });
    const updateValue = {
      ...this.state.user,
      [name]: value,
    };

    if (updateValue.email.length && updateValue.pass.length) {
      this.setState({disabled: false});
    } else {
      this.setState({disabled: true});
    }
  };

  onSubmit = async () => {
    const {email, pass} = this.state.user;
    const {dispatch, navigation} = this.props;

    this.setState({pending: true});

    if (!email.includes('@')) {
      this.setState({error: 'Please input email'});
      this.setState({pending: false});
    } else {
      this.setState({error: ''});

      const body = {
        email: email.trim(),
        password: pass.trim(),
      };

      await dispatch(loginUser(body));
      this.setState({pending: false});
      const {login} = this.props.auth;

      if (login.error) {
        this.setState({error: login.message});
      } else {
        this.setState({error: ''});
      }

      if (login.data) {
        this.setState({
          user: {
            email: '',
            pass: '',
          },
        });
        if (login.data.pin) {
          navigation.reset({
            index: 0,
            routes: [{name: 'Home'}],
          });
        } else {
          navigation.push('Create Pin');
        }
      }
    }
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <MyStatusBar />
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
            name="email"
            value={this.state.user.email}
            changeValue={this.changeValue}
            left="mail"
            error={this.state.error}
          />
          <MyTextInput
            placeholder="Enter your password"
            name="pass"
            value={this.state.user.pass}
            changeValue={this.changeValue}
            left="lock"
            secure={true}
            error={this.state.error}
          />
          <TouchableOpacity style={styles.btnForgotPass}>
            <Text
              style={styles.forgotPass}
              onPress={() => this.props.navigation.push('Forgot Pass')}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
          <Text style={styles.error}>{this.state.error}</Text>
          <ButtonAuth
            title="Login"
            disabled={this.state.pending || this.state.disabled}
            onPress={this.onSubmit}
          />
          <View style={styles.signUpSection}>
            <Text style={styles.signUpText1}>Don’t have an account? Let’s</Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.push('Sign Up')}
              style={styles.signUpBtn}>
              <Text style={styles.signUpText2}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapsStateToProps = ({auth}) => ({
  auth,
});

export default connect(mapsStateToProps)(Login);
