/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import SmoothPinCode from 'react-native-smooth-pincode-input';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

const ChangePin = ({navigation}) => {
  const [code, setCode] = useState('');
  const filled = () => {
    if (code.length === 6) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <View style={styles.background}>
      <View style={styles.header}>
        <StatusBar
          translucent={true}
          backgroundColor="transparent"
          barStyle="light-content"
        />
        <View style={styles.headerContent}>
          <View style={styles.headerNav}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icons
                name="arrow-left"
                color="#fff"
                size={30}
                style={styles.buttonNav}
              />
            </TouchableOpacity>
            <Text style={styles.infoNav}>Enter Your PIN</Text>
          </View>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={{padding: 20}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.textTitle}>
          <Text style={styles.Title}>Enter PIN to Transfer</Text>
          <Text style={styles.subTitle}>
            Enter your 6 digits PIN for confirmation to continue transferring
            money.
          </Text>
        </View>
        <View style={styles.formPin}>
          <SmoothPinCode
            codeLength={6}
            cellStyle={filled() ? styles.cellPinFilled : styles.cellPin}
            value={code}
            onTextChange={(e) => setCode(e)}
          />
        </View>
      </ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <TouchableOpacity
          style={!filled() ? styles.btn : styles.btnActive}
          onPress={() =>
            filled() &&
            navigation.reset({
              index: 1,
              routes: [{name: 'Home'}, {name: 'transferSuccess'}],
            })
          }>
          <Text style={!filled() ? styles.continue : styles.continueActive}>
            Transfer Now
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

export default ChangePin;

const styles = StyleSheet.create({
  background: {
    height: '100%',
    backgroundColor: '#FAFCFF',
  },
  header: {
    backgroundColor: '#6379F4',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
    elevation: 5,
  },
  headerContent: {
    marginTop: 50,
    marginBottom: 20,
  },
  headerNav: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 11,
  },
  buttonNav: {
    padding: 5,
  },
  infoNav: {
    color: '#fff',
    fontSize: 20,
    marginLeft: 10,
  },

  container: {
    flex: 1,
    marginBottom: 20,
  },
  textTitle: {
    marginTop: 30,
    alignItems: 'center',
  },
  Title: {
    textAlign: 'center',
    fontSize: 25,
    color: '#333',
    marginBottom: 20,
  },
  subTitle: {
    textAlign: 'center',
    fontSize: 17,
    color: '#7A7886',
    marginBottom: 20,
  },
  formPin: {
    marginTop: 10,
    alignItems: 'center',
    marginBottom: '50%',
  },
  cellPin: {
    borderRadius: 10,
    width: 45,
    borderColor: '#958E8E',
    borderWidth: 1,
  },
  cellPinFilled: {
    borderRadius: 10,
    width: 45,
    borderColor: '#6379F4',
    borderWidth: 1,
  },
  btn: {
    width: '92%',
    backgroundColor: '#DADADA',
    padding: 18,
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 12,
  },
  btnActive: {
    width: '92%',
    backgroundColor: '#6379F4',
    padding: 18,
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 12,
  },
  continue: {
    fontWeight: 'bold',
    color: '#88888F',
    fontSize: 20,
  },
  continueActive: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  },
});