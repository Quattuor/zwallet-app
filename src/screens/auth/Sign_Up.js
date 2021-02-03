import React, {useEffect, useState, Component} from 'react';
import {useDispatch, useSelector, connect} from 'react-redux';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';

import MyTextInput from '../../components/auth/MyTextInput';
import ButtonAuth from '../../components/auth/ButtonAuth';
import MyStatusBar from '../../components/MyStatusBar';
import styles from '../../styles/authStyles';

import {signupUser} from '../../utils/redux/actionCreators/auth';

class Sign_Up extends Component {
  state = {
    error: '',
    disabled: true,
    user: {
      name: '',
      email: '',
      pass: '',
    },
    pending: false,
  };

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

    if (
      updateValue.name.length &&
      updateValue.email.length &&
      updateValue.pass.length
    ) {
      this.setState({disabled: false});
    } else {
      this.setState({disabled: true});
    }
  };

  onSubmit = async () => {
    const {name, email, pass} = this.state.user;
    const {dispatch, navigation} = this.props;

    this.setState({pending: true});

    if (!email.includes('@')) {
      this.setState({error: 'Please input email'});
      this.setState({pending: false});
    } else {
      this.setState({error: ''});

      const body = {
        username: name.trim(),
        email: email.trim(),
        password: pass.trim(),
      };

      await dispatch(signupUser(body));
      this.setState({pending: false});
      const {signup} = this.props.auth;

      if (signup.error) {
        this.setState({error: signup.message});
      } else {
        this.setState({error: ''});
      }

      if (signup.data) {
        navigation.pop();
      }
    }
  };

  // componentDidMount() {
  //   console.log(this.props);
  //   console.log(this.state);
  // }

  render() {
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
            value={this.state.user.name}
            changeValue={this.changeValue}
            left="user"
            error={this.state.error}
          />
          <MyTextInput
            placeholder="Enter your e-mail"
            name="email"
            value={this.state.user.email}
            changeValue={this.changeValue}
            left="mail"
            error={this.state.error}
          />
          <MyTextInput
            placeholder="Create your password"
            name="pass"
            value={this.state.user.pass}
            changeValue={this.changeValue}
            left="lock"
            secure={true}
            error={this.state.error}
          />
          <Text style={styles.error}>{this.state.error}</Text>
          <ButtonAuth
            title="Login"
            disabled={this.state.pending || this.state.disabled}
            onPress={this.onSubmit}
          />
          <View style={styles.signUpSection}>
            <Text style={styles.signUpText1}>
              Already have an account? Let’s
            </Text>
            <TouchableOpacity style={styles.signUpBtn}>
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

export default connect(mapsStateToProps)(Sign_Up);
