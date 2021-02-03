import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {connect} from 'react-redux';
import {setReceiver} from '../utils/redux/actionCreators/contact';
import {API_URL} from '@env';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

const Contact = (props) => {
  return (
    <View style={styles.gap}>
      <TouchableOpacity
        style={styles.allContacts}
        onPress={() => {
          props.setReceiverRedux(
            props.id_user,
            props.username,
            props.photo,
            props.phone,
          );
          props.navigation.navigate('transfer');
        }}>
        {props.photo !== null ? (
          <Image
            style={styles.imgContact}
            source={{uri: API_URL + props.photo}}
          />
        ) : (
          <Icons name="account-outline" color="#6379F4" size={70} />
        )}
        <View style={{marginHorizontal: 15}}>
          <Text style={styles.textContacts}>{props.username}</Text>
          <Text style={styles.textPhone}>{props.phone}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  gap: {
    marginBottom: 5,
  },
  imgContact: {
    width: 70,
    height: 70,
    borderRadius: 15,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
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

const mapDispatchToProps = (dispatch) => {
  return {
    setReceiverRedux: (id_user, username, photo, phone) =>
      dispatch(setReceiver(id_user, username, photo, phone)),
  };
};

export default connect(null, mapDispatchToProps)(Contact);
