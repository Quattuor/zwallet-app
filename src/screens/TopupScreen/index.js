/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import image from '../../assets/icon/logo.png';
import FastImage from 'react-native-fast-image';
import {useSelector} from 'react-redux';
import {API_URL} from '@env';
import axios from 'axios';

const data = [
  {
    number: 1,
    value: 'Go to the nearest ATM or you can use E-Banking.',
  },
  {
    number: 2,
    value: 'Type your security number on the ATM or E-Banking.',
  },
  {
    number: 3,
    value: 'Select “Transfer” in the menu.',
  },
  {
    number: 4,
    value: 'Type the virtual account number that we provide you at the top.',
  },
  {
    number: 5,
    value: 'Type the amount of the money you want to top up.',
  },
  {
    number: 6,
    value: 'Read the summary details.',
  },
  {
    number: 7,
    value: 'Press transfer / top up.',
  },
  {
    number: 8,
    value: 'You can see your money in Zwallet within 3 hours.',
  },
];

const Topup = ({navigation}) => {
  const getData = useSelector((state) => state.auth.login);

  const [userData, setUserData] = useState({});

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      if (getData.data) {
        axios
          .get(`${API_URL}/user/${getData.data.id}`, {
            headers: {
              'x-access-token': 'Bearer ' + getData.data.token,
            },
          })
          .then(({data}) => {
            setUserData(data.data[0]);
          })
          .catch(({response}) => {
            console.log(response.data);
          });
      }
    });
    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <View style={[styles.container, {flex: 1}]}>
        <View style={styles.header}>
          <StatusBar
            barStyle="light-content"
            backgroundColor="#6379F4"
            translucent={true}
          />
          <View style={styles.headerSection}>
            <Icon
              onPress={() => {
                navigation.goBack();
              }}
              name="arrow-left"
              color="white"
              size={26}
            />
            <Text style={styles.headerText}>Top Up</Text>
          </View>
          <View style={styles.headerCard}>
            <FastImage style={styles.cardImage} source={image} />
            <View style={styles.headerCardText}>
              <Text style={styles.virtualText}>Virtual Account Number</Text>
              <Text style={styles.phoneNumberText}>{userData.id_virtual}</Text>
            </View>
          </View>
        </View>
        <ScrollView>
          <Text
            style={{
              marginTop: 30,
              marginLeft: 20,
              fontSize: 22,
              fontFamily: 'NunitoSans-Bold',
              color: '#514F5B',
            }}>
            How to Top-Up
          </Text>
          {data.map((x) => {
            return (
              <View style={styles.cardHow} key={x.number}>
                <View>
                  <Text
                    style={{
                      paddingVertical: '10%',
                      paddingHorizontal: '8%',
                      color: '#6379F4',
                      fontSize: 20,
                      fontWeight: 'bold',
                    }}>
                    {x.number}
                  </Text>
                </View>
                <Text
                  style={{
                    textAlign: 'justify',
                    position: 'absolute',
                    margin: 30,
                    paddingHorizontal: '10%',
                    fontSize: 17,
                    fontFamily: 'NunitoSans',
                    display: 'flex',
                    color: '#7A7886',
                    alignSelf: 'center',
                    //   backgroundColor: 'red',
                  }}>
                  {x.value}
                </Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </>
  );
};

export default Topup;

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    backgroundColor: '#FAFCFF',
  },
  headerSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  header: {
    width,
    height: 220,
    backgroundColor: '#6379F4',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 42,
  },
  headerText: {
    fontSize: 20,
    fontFamily: 'NunitoSans-Bold',
    color: 'white',
    marginLeft: 26,
  },
  headerCard: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    width: 343,
    height: 96,
    marginTop: 40,
    alignSelf: 'center',
    borderRadius: 10,
  },
  cardImage: {
    height: 56,
    width: 56,
    alignSelf: 'center',
    marginLeft: 16,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  headerCardText: {
    display: 'flex',
    flexDirection: 'column',
    // alignSelf: 'center',
    justifyContent: 'space-evenly',
    marginLeft: 15,
  },
  virtualText: {
    fontSize: 16,
    fontFamily: 'NunitoSans',
    color: '#7A7886',
    fontWeight: '400',
  },
  phoneNumberText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#4D4B57',
    fontFamily: 'NunitoSans-Bold',
  },
  cardHow: {
    // flexDirection: 'row',
    width: '90%',
    backgroundColor: '#FFFFFF',
    marginHorizontal: '5%',
    marginVertical: '5%',
    elevation: 3,
    borderRadius: 10,
  },
});
