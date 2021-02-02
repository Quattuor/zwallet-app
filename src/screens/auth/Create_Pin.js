import React, {useState, Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {connect} from 'react-redux';

import {createPin} from '../../utils/redux/actionCreators/auth';
import MyStatusBar from '../../components/MyStatusBar';
import MyTextInput from '../../components/auth/MyTextInput';
import ButtonAuth from '../../components/auth/ButtonAuth';
import styles from '../../styles/authStyles';
import PinInput from '../../components/auth/PinInput';
import {createPinString} from '../../utils/redux/actionTypes';
import {PinchGestureHandler} from 'react-native-gesture-handler';

class Create_Pin extends Component {
  state = {
    error: '',
    disabled: true,
    pin: {
      one: '',
      two: '',
      three: '',
      four: '',
      five: '',
      six: '',
    },
    pending: false,
  };

  changeValue = (name, value) => {
    this.setState({
      pin: {
        ...this.state.pin,
        [name]: value,
      },
    });
    const updateValue = {
      ...this.state.pin,
      [name]: value,
    };

    if (
      updateValue.one.length &&
      updateValue.two.length &&
      updateValue.three.length &&
      updateValue.four.length &&
      updateValue.five.length &&
      updateValue.six.length
    ) {
      this.setState({disabled: false});
    } else {
      this.setState({disabled: true});
    }
  };

  onSubmit = async () => {
    const {one, two, three, four, five, six} = this.state.pin;
    const {
      dispatch,
      navigation,
      auth: {login},
    } = this.props;
    const newPin = Number(one + two + three + four + five + six);

    const body = {
      id: login.data.id,
      pin: newPin,
    };

    await dispatch(createPin(body));
    this.setState({pending: false});
    const {pin} = this.props.auth;

    if (pin.error) {
      this.setState({error: pin.message});
    } else {
      this.setState({error: ''});
    }

    if (pin.data) {
      // if (pin.data.pin) {
      navigation.pop();
      // } else {
      //   navigation.push('Create Pin');
      // }
      console.log(pin.data);
    }
  };

  render() {
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
              Create a PIN that’s contain 6 digits number for security purpose
              in Zwallet.
            </Text>
          </View>
          <View style={styles.pinSection}>
            <TextInput
              style={styles.pinInput}
              maxLength={1}
              keyboardType="number-pad"
              onChangeText={(e) => this.changeValue('one', e)}
            />
            <TextInput
              style={styles.pinInput}
              maxLength={1}
              keyboardType="number-pad"
              onChangeText={(e) => this.changeValue('two', e)}
            />
            <TextInput
              style={styles.pinInput}
              maxLength={1}
              keyboardType="number-pad"
              onChangeText={(e) => this.changeValue('three', e)}
            />
            <TextInput
              style={styles.pinInput}
              maxLength={1}
              keyboardType="number-pad"
              onChangeText={(e) => this.changeValue('four', e)}
            />
            <TextInput
              style={styles.pinInput}
              maxLength={1}
              keyboardType="number-pad"
              onChangeText={(e) => this.changeValue('five', e)}
            />
            <TextInput
              style={styles.pinInput}
              maxLength={1}
              keyboardType="number-pad"
              onChangeText={(e) => this.changeValue('six', e)}
            />
          </View>
          <Text style={styles.error}>{this.state.error}</Text>
          <View style={styles.bottomArea}>
            <ButtonAuth
              title="Confirm"
              disabled={this.state.disabled}
              onPress={this.onSubmit}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapsStateToProps = ({auth}) => ({
  auth,
});

export default connect(mapsStateToProps)(Create_Pin);
