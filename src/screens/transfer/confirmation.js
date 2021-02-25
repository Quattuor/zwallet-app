import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {API_URL} from '@env';

import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

const Confirmation = ({navigation, route}) => {
  const timeStamp = new Date(Date.now());
  const [date] = useState(String(timeStamp).split(' ').slice(1, 4));
  const [time] = useState(String(timeStamp).split(' ')[4].split(':'));
  const {
    id_contact,
    phone_contact,
    photo_contact,
    username_contact,
    amount,
    balanceLeft,
    notes,
  } = route.params;
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
            <Text style={s.infoNav}>Confirmation</Text>
          </View>
          <View style={s.headerInfo}>
            {photo_contact !== null ? (
              <Image
                style={s.userImage}
                source={{uri: API_URL + photo_contact}}
              />
            ) : (
              <Icons name="account-outline" color="#6379F4" size={50} />
            )}
            <View style={s.infoContent}>
              <Text style={s.infoUsername}>{username_contact}</Text>
              <Text style={s.infoPhone}>{phone_contact}</Text>
            </View>
          </View>
        </View>
      </View>

      <ScrollView>
        <View style={s.body}>
          <View style={s.wrapRow}>
            <View style={s.card1}>
              <Text style={s.headerCard}>Amount</Text>
              <Text style={s.contentCard}> {amount} </Text>
            </View>

            <View style={s.card2}>
              <Text style={s.headerCard}>Balance left</Text>
              <Text style={s.contentCard}> {balanceLeft} </Text>
            </View>
          </View>

          <View style={s.wrapRow}>
            <View style={s.card1}>
              <Text style={s.headerCard}>Date</Text>
              <Text style={s.contentCard}>
                {`${date[0]} ${date[1]}, ${date[2]}`}
              </Text>
            </View>

            <View style={s.card2}>
              <Text style={s.headerCard}>Time</Text>
              <Text style={s.contentCard}> {`${time[0]}.${time[1]}`} </Text>
            </View>
          </View>

          <View style={s.card3}>
            <Text style={s.headerCard}>Notes</Text>
            <Text style={s.contentCard}>
              {notes === null ? 'Without notes' : notes}{' '}
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={s.buttonAct}>
        <TouchableOpacity
          style={s.button}
          onPress={() =>
            navigation.navigate('pinToTransfer', {
              id_contact,
              phone_contact,
              photo_contact,
              username_contact,
              amount,
              balanceLeft,
              notes,
              date: `${date[0]} ${date[1]}, ${date[2]}`,
              time: `${time[0]}.${time[1]}`,
            })
          }>
          <Text style={s.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Confirmation;

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
  wrapRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  body: {
    marginTop: 30,
  },
  card1: {
    backgroundColor: '#fff',
    marginLeft: 18,
    elevation: 5,
    borderRadius: 10,
    width: 175,
    height: 87,
    marginBottom: 20,
    padding: 15,
    justifyContent: 'space-between',
  },
  card2: {
    backgroundColor: '#fff',
    marginRight: 18,
    elevation: 5,
    borderRadius: 10,
    width: 175,
    height: 87,
    marginBottom: 20,
    padding: 15,
    justifyContent: 'space-between',
  },
  card3: {
    backgroundColor: '#fff',
    marginHorizontal: 18,
    elevation: 5,
    borderRadius: 10,
    height: 87,
    marginBottom: 20,
    padding: 15,
    justifyContent: 'space-between',
  },
  headerCard: {
    fontSize: 16,
    color: '#7A7886',
  },
  contentCard: {
    fontSize: 18,
    color: '#514F5B',
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
