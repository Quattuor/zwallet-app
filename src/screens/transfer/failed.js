import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {API_URL} from '@env';

const failed = ({navigation, route}) => {
  const {
    amount,
    balanceLeft,
    date,
    time,
    notes,
    username,
    photo_user,
    phone_user,
    username_contact,
    photo_contact,
    phone_contact,
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
            <Text style={s.infoNav}>Transfer Details</Text>
          </View>
        </View>
      </View>
      <ScrollView>
        <View style={s.headBody}>
          <Icons name="close-circle" color="#FF5B37" size={80} style={s.icon} />
          <Text style={s.headText}>Transfer Failed</Text>
          <Text style={s.subHeadText}>
            We can’t transfer your money at the moment, we recommend you to
            check your internet connection and try again.
          </Text>
        </View>
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
              <Text style={s.contentCard}> {date} </Text>
            </View>

            <View style={s.card2}>
              <Text style={s.headerCard}>Time</Text>
              <Text style={s.contentCard}> {time} </Text>
            </View>
          </View>

          <View style={s.card3}>
            <Text style={s.headerCard}>Notes</Text>
            <Text style={s.contentCard}> {notes} </Text>
          </View>
        </View>

        <View style={s.fromTO}>
          <Text style={s.headText}>From</Text>
          <View style={s.cardInfo}>
            {photo_user !== null ? (
              <Image style={s.userImage} source={{uri: API_URL + photo_user}} />
            ) : (
              <Icons name="account-outline" color="#6379F4" size={50} />
            )}
            <View style={s.infoContent}>
              <Text style={s.infoUsername}>{username}</Text>
              <Text style={s.infoPhone}>{phone_user}</Text>
            </View>
          </View>

          <Text style={s.headText}>To</Text>
          <View style={s.cardInfo}>
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
        <View style={s.buttonAct}>
          <TouchableOpacity
            style={s.button}
            onPress={() =>
              navigation.navigate('pinToTransfer', {...route.params})
            }>
            <Text style={s.buttonText}>Try Again</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default failed;

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
    marginTop: 60,
    marginBottom: 25,
  },
  headerNav: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 11,
  },
  infoNav: {
    color: '#fff',
    fontSize: 20,
    marginLeft: 10,
  },

  headBody: {
    alignItems: 'center',
    marginTop: 30,
  },
  headText: {
    fontSize: 22,
    marginTop: 20,
    color: '#4D4B57',
  },
  subHeadText: {
    fontSize: 16,
    color: '#7A7886',
    marginTop: 10,
    paddingHorizontal: 20,
    textAlign: 'center',
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

  fromTO: {
    marginBottom: 30,
    marginHorizontal: 19,
  },
  cardInfo: {
    marginTop: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 20,
    flexDirection: 'row',
    elevation: 5,
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

  buttonAct: {
    marginVertical: 20,
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
