/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

const input = ({navigation}) => {
  const [focus, setfocus] = useState(false);
  const [amount, setamount] = useState('');
  const [notes, setnotes] = useState('');
  return (
    <View style={s.background}>
      <View style={s.header}>
        <StatusBar
          translucent={true}
          backgroundColor="transparent"
          barStyle="light-content"
        />
        <View style={s.headerContent}>
          <View style={s.headerNav}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icons
                name="arrow-left"
                color="#fff"
                size={30}
                style={s.buttonNav}
              />
            </TouchableOpacity>
            <Text style={s.infoNav}>Transfer</Text>
          </View>
          <View style={s.headerInfo}>
            <View style={s.userImage}>
              <Icons name="account-outline" color="#6379F4" size={50} />
            </View>
            <View style={s.infoContent}>
              <Text style={s.infoUsername}>...</Text>
              <Text style={s.infoPhone}>...</Text>
            </View>
          </View>
        </View>
      </View>
      <ScrollView style={s.body}>
        <View style={s.wrapAmount}>
          <TextInput
            keyboardType={'number-pad'}
            placeholder={focus === false ? '0.00' : ''}
            placeholderTextColor="#B5BDCC"
            style={s.inputAmount}
            defaultValue={
              focus === false
                ? amount === ''
                  ? amount
                  : `Rp${Number(amount.split('.').join(''))
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`
                : amount === ''
                ? amount
                : amount
                    .split('.')
                    .join('')
                    .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
            }
            onChangeText={(e) => setamount(e)}
            onFocus={() => setfocus(true)}
            onEndEditing={() => setfocus(false)}
          />
        </View>

        <Text style={s.infoBal}>...</Text>

        <View style={notes !== '' ? s.wrapNotes2 : s.wrapNotes}>
          <Icons
            name="pencil-outline"
            color={notes !== '' ? '#6379F4' : '#A9A9A9a0'}
            size={35}
          />
          <TextInput
            placeholder="Add some notes"
            placeholderTextColor="#A9A9A9f0"
            style={s.inputNotes}
            onChangeText={(e) => setnotes(e)}
            onFocus={() => setnotes(' ')}
            onEndEditing={() => notes === ' ' && setnotes('')}
          />
        </View>
        <View
          style={{...s.buttonAct, display: focus === false ? 'none' : 'flex'}}>
          <TouchableOpacity
            style={s.button}
            onPress={() => navigation.navigate('confirmation')}>
            <Text style={s.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View
        style={{...s.buttonAct, display: focus === false ? 'flex' : 'none'}}>
        <TouchableOpacity
          style={s.button}
          onPress={() => navigation.navigate('confirmation')}>
          <Text style={s.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default input;

const s = StyleSheet.create({
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
  headerInfo: {
    marginTop: 30,
    marginHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 20,
    flexDirection: 'row',
  },
  userImage: {
    width: 56,
    height: 56,
    overflow: 'hidden',
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginRight: 15,
  },
  infoContent: {
    justifyContent: 'space-between',
    paddingVertical: 1,
    width: '80%',
  },
  infoUsername: {
    fontSize: 18,
  },
  infoPhone: {
    fontSize: 15,
    color: '#6f6f6f',
  },
  body: {
    paddingHorizontal: 18,
    marginBottom: 25,
  },
  wrapAmount: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  inputAmount: {
    fontSize: 40,
    textAlign: 'center',
    padding: 0,
    marginTop: 50,
    color: '#6379F4',
  },
  infoBal: {
    marginVertical: 30,
    fontSize: 16,
    color: '#7C7895',
    textAlign: 'center',
  },
  wrapNotes: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#A9A9A9a0',
    marginBottom: 40,
  },
  wrapNotes2: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#6379F4',
    marginBottom: 40,
  },
  inputNotes: {
    fontSize: 18,
    marginLeft: 10,
    color: '#3A3D42',
  },
  buttonAct: {
    bottom: 20,
  },
  button: {
    backgroundColor: '#6379F4',
    justifyContent: 'center',
    alignItems: 'center',
    height: 57,
    borderRadius: 12,
    marginHorizontal: 16,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
