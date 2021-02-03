import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const ChangePhoneNumber = () => {
  return (
    <>
      <Text style={styles.subHeaderText}>
        You can only delete the phone number and then you must add another phone
        number.
      </Text>
      <View style={[styles.longCell, {display: 'flex', flexDirection: 'row'}]}>
        <View style={styles.phoneText}>
          <Text style={styles.cellTitleText}>Primary</Text>
          <Text style={styles.cellChildText}>+62 813 9387 7946</Text>
        </View>
        <Icon name="trash" size={30} color="#BBBBBE" style={styles.trashIcon} />
      </View>
    </>
  );
};

export default ChangePhoneNumber;

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  subHeaderText: {
    color: '#7A7886',
    fontSize: 17,
    marginTop: 40,
    textAlign: 'center',
    lineHeight: 27,
    paddingHorizontal: '5%',
  },
  longCell: {
    width: width * 0.92,
    minHeight: 87,
    backgroundColor: 'white',
    elevation: 3,
    borderRadius: 10,
    marginTop: 40,
    alignSelf: 'center',
    padding: 15,
    justifyContent: 'space-between',
  },
  phoneText: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  cellTitleText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#7A7886',
  },
  cellChildText: {
    fontSize: 18,
    fontFamily: 'NunitoSans-Bold',
    color: '#514F5B',
  },
  trashIcon: {
    alignSelf: 'center',
  },
});
