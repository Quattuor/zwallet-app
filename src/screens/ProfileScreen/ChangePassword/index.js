import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {Button, Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';

const ChangePassword = () => {
  return (
    <>
      <View style={styles.container}>
        <View
          style={{flexDirection: 'column', justifyContent: 'space-between'}}>
          <View>
            <Text style={styles.subHeaderText}>
              You must enter your current password and then type your new
              password twice.
            </Text>
            <Input
              secureTextEntry
              placeholder="Current Password"
              autoCapitalize="none"
              editable={true}
              leftIcon={<Icon name="lock" color="#6379F4" size={20} />}
              rightIcon={<Icon name="eye-off" color="#A9A9A9" size={20} />}
              inputContainerStyle={[
                styles.inputContainerStyle,
                {marginTop: 54},
              ]}
              inputStyle={styles.inputStyle}
            />
            <Input
              secureTextEntry
              placeholder="New Password"
              autoCapitalize="none"
              editable={true}
              leftIcon={<Icon name="lock" color="#6379F4" size={20} />}
              rightIcon={<Icon name="eye-off" color="#A9A9A9" size={20} />}
              inputContainerStyle={styles.inputContainerStyle}
              inputStyle={styles.inputStyle}
            />
            <Input
              secureTextEntry
              placeholder="Repeat Password"
              autoCapitalize="none"
              editable={true}
              leftIcon={<Icon name="lock" color="#6379F4" size={20} />}
              rightIcon={<Icon name={'eye-off'} color="#A9A9A9" size={20} />}
              inputContainerStyle={styles.inputContainerStyle}
              inputStyle={styles.inputStyle}
            />
          </View>
          <Button
            loadingProps={{size: 'large', color: 'white'}}
            buttonStyle={[styles.changePasswordButton, {marginTop: 0}]}
            title="Change Password"
          />
        </View>
      </View>
    </>
  );
};

export default ChangePassword;

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width,
    height,
    backgroundColor: '#FAFCFF',
    paddingTop: 42,
    paddingLeft: 16,
    paddingRight: 16,
  },
  headerContainer: {
    width,
    display: 'flex',
    flexDirection: 'row',
  },
  headerText: {
    fontSize: 20,
    fontFamily: 'NunitoSans-Bold',
    alignSelf: 'center',
    color: '#4D4B57',
    marginLeft: 25,
  },
  subHeaderText: {
    color: '#7A7886',
    fontSize: 16,
    marginTop: 40,
    textAlign: 'justify',
    lineHeight: 27,
  },
  inputContainerStyle: {
    borderBottomColor: '#6379F4',
  },
  inputStyle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#3A3D42',
  },
  errorMessage: {
    color: '#FF5B37',
  },
  changePasswordButton: {
    height: 57,
    borderRadius: 12,
    backgroundColor: '#6379F4',
    marginTop: 217,
    marginBottom: 30,
  },
});
