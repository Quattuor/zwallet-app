import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

const Contact = ({navigation, img, name, phone}) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.allContacts}
        onPress={() => {
          navigation.navigate('transfer', {img, name, phone});
        }}>
        <Image style={styles.imgContact} source={img} />
        <View style={{marginHorizontal: 15}}>
          <Text style={styles.textContacts}>{name}</Text>
          <Text style={styles.textPhone}>{phone}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
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
  allContacts: {
    flexDirection: 'row',
    marginHorizontal: 5,
    marginVertical: 5,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    borderColor: 'black',
    alignItems: 'center',
    elevation: 5,
  },
});
