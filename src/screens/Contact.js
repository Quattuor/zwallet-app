/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState, useCallback} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
// import {bobi, dody, julia, mei, rich, susi} from '../assets';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Card from '../components/Contact';
import axios from 'axios';
import {API_URL} from '@env';
import {useSelector} from 'react-redux';

const Contact = ({navigation}) => {
  const [receiver, setContact] = useState([]);
  const [searchPhone, setSearchPhone] = useState('');
  const token = useSelector((state) => state.auth.login.data.token);
  const id = useSelector((state) => state.auth.login.data.id);

  const listContact = useCallback(() => {
    const config = {
      headers: {
        'x-access-token': 'Bearer ' + token,
      },
    };
    axios
      .get(`${API_URL}/contact/${id}`, config)
      .then(({data}) => {
        setContact(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [token, id]);

  const handleSearch = () => {
    const config = {
      headers: {
        'x-access-token': 'Bearer ' + token,
      },
    };
    axios
      .get(`${API_URL}/user/phone/` + searchPhone, config)
      .then(({data}) => {
        setContact(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    listContact();
  }, [listContact]);

  return (
    <>
      <StatusBar barStyle="white" translucent backgroundColor="#6379F4" />
      <View style={styles.header}>
        <View style={styles.sectionHeader}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icons
              name="arrow-left"
              color="#fff"
              size={30}
              style={styles.buttonNav}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              marginLeft: 15,
              color: 'white',
              fontWeight: '400',
            }}>
            Find Receiver
          </Text>
        </View>
        <View style={styles.formSearch}>
          <TouchableOpacity onPress={handleSearch}>
            <Icon
              name="search"
              size={30}
              color="#000000"
              style={{marginHorizontal: 5}}
            />
          </TouchableOpacity>
          <TextInput
            style={{width: '100%'}}
            placeholder="Search receiver here"
            onChangeText={(text) => setSearchPhone(text)}
            onEndEditing={handleSearch}
          />
        </View>
      </View>
      <ScrollView style={styles.container}>
        <View style={{marginBottom: 20}}>
          <Text
            style={{
              color: '#4D4B57',
              fontSize: 18,
              fontWeight: '700',
              marginTop: 15,
              marginBottom: 10,
            }}>
            Contacts
          </Text>
          <Text style={{color: '#4D4B57', fontSize: 18, fontWeight: '400'}}>
            {receiver.length} Contacts Founds
          </Text>
        </View>
        {receiver &&
          receiver.map(({id_user, username, phone, photo}) => {
            return (
              <Card
                key={id_user}
                id={id_user}
                navigation={navigation}
                username={username}
                photo={photo}
                phone={phone}
              />
            );
          })}
      </ScrollView>
    </>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
  header: {
    height: 200,
    width: '100%',
    backgroundColor: '#6379F4',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  sectionHeader: {
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
    marginBottom: 35,
    width: '100%',
    // justifyContent: 'space-between',
  },
  buttonNav: {
    padding: 5,
  },
  formSearch: {
    flexDirection: 'row',
    marginHorizontal: 15,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 25,
    marginTop: 10,
  },
  // card: {
  //   width: 110,
  //   marginRight: 20,
  //   marginVertical: 10,
  //   padding: 20,
  //   borderRadius: 20,
  //   backgroundColor: 'white',
  //   borderColor: 'black',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   elevation: 5,
  // },
  // img: {
  //   width: 70,
  //   height: 70,
  //   borderRadius: 15,
  //   overflow: 'hidden',
  //   marginBottom: 10,
  // },
});
