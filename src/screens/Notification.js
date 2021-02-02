import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {down, up} from '../assets';
import Card from '../components/Notification';

const History = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.textThis}>This Week</Text>
        <Card
          navigation={navigation}
          Img={down}
          status="Transfered from Joshua Lee"
          price="220000"
          style={styles.card}
        />
        <Card
          navigation={navigation}
          Img={up}
          status="Netflix subscription"
          price="149000"
          style={styles.card}
        />
        <Text style={styles.textThis}>This Month</Text>
        <Card
          navigation={navigation}
          Img={up}
          status="Transfer to Jessica Lee"
          price="100000"
          style={styles.card}
        />
        <Card
          navigation={navigation}
          Img={down}
          status="Top up from BNI E-Banking"
          price="300000"
          style={styles.card}
        />
        <Card
          navigation={navigation}
          Img={up}
          status="Transfer to Mama Mia"
          price="50000"
          style={styles.card}
        />
      </ScrollView>
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    // paddingHorizontal: 15,
    paddingVertical: 15,
  },
  textThis: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  card: {
    borderRadius: 10,
  },
  btn: {
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 10,
    backgroundColor: 'white',
  },
  filter: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  filterByDate: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  allContacts: {
    flexDirection: 'row',
    marginHorizontal: 5,
    marginVertical: 5,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    borderColor: 'black',
    alignItems: 'center',
    elevation: 5,
  },
  imgContact: {
    width: 70,
    height: 70,
    borderRadius: 15,
    overflow: 'hidden',
  },
  textPhone: {
    color: '#4D4B57',
    fontSize: 13,
    fontWeight: '400',
  },
  textContacts: {
    color: '#4D4B57',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 7,
  },
  containerCalendar: {
    width: '100%',
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  applyBtn: {
    backgroundColor: '#6379F4',
    width: '100%',
    alignItems: 'center',
    paddingVertical: 20,
    borderRadius: 10,
    marginVertical: 10,
  },
});
