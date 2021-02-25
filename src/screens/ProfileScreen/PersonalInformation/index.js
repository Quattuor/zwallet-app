import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Dimensions, StatusBar} from 'react-native';
import {Button} from 'react-native-elements';
import BoldText from '../../../components/CustomText';
import {useSelector, useDispatch} from 'react-redux';
import {API_URL} from '@env';
import axios from 'axios';

const PersonalInfo = ({navigation}) => {
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
  }, []);

  return (
    <>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <View style={styles.container}>
        <Text style={styles.subHeaderText}>
          We got your personal information from the sign up proccess. If you
          want to make changes on your information, contact our support.
        </Text>
        <View style={styles.cellContainer}>
          <View style={styles.cell}>
            <Text style={styles.cellTitleText}>First Name</Text>
            <BoldText style={styles.cellChildText}>
              {userData.username}
            </BoldText>
          </View>
          <View style={styles.cell}>
            <Text style={styles.cellTitleText}>Last Name</Text>
            <BoldText style={styles.cellChildText}>
              {userData.lastname}
            </BoldText>
          </View>
        </View>
        <View style={styles.longCell}>
          <Text style={styles.cellTitleText}>Verified E-mail</Text>
          <BoldText style={styles.cellChildText}>{userData.email}</BoldText>
        </View>
        <View
          style={[styles.longCell, {display: 'flex', flexDirection: 'row'}]}>
          <View style={styles.phoneText}>
            <Text style={styles.cellTitleText}>Phone Number</Text>
            {userData.phone !== null ? (
              <BoldText style={styles.cellChildText}>
                <Button
                  containerStyle={styles.buttonStyle}
                  titleStyle={styles.addPhoneNumber}
                  type="clear"
                  title={userData.phone}
                />
              </BoldText>
            ) : (
              <BoldText style={styles.cellChildText}>
                <Button
                  containerStyle={styles.buttonStyle}
                  titleStyle={styles.addPhoneNumber}
                  type="clear"
                  title="Add Phone Number"
                  onPress={() => {
                    navigation.navigate('Add Phone Number');
                  }}
                />
              </BoldText>
            )}
          </View>
          {userData.phone !== null ? (
            <Button
              containerStyle={styles.buttonStyle}
              titleStyle={styles.manageText}
              type="clear"
              title="Manage"
              onPress={() => {
                navigation.navigate('Change Phone Number', {
                  phone: userData.phone,
                });
              }}
            />
          ) : null}
        </View>
      </View>
    </>
  );
};

export default PersonalInfo;

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width,
    height,
    backgroundColor: '#FAFCFF',
    paddingLeft: 16,
    paddingRight: 16,
  },
  headerContainer: {
    width,
    display: 'flex',
    flexDirection: 'row',
  },
  headerText: {
    fontSize: 20,
    fontFamily: 'NunitoSans-Bold',
    alignSelf: 'center',
    color: '#4D4B57',
    marginLeft: 25,
  },
  subHeaderText: {
    color: '#7A7886',
    fontSize: 16,
    marginTop: 40,
    textAlign: 'justify',
    lineHeight: 27,
    textAlign: 'center',
    letterSpacing: 0.4,
  },
  cell: {
    width: width * 0.43,
    height: 92,
    backgroundColor: 'white',
    elevation: 3,
    borderRadius: 10,
    marginTop: 30,
    padding: 15,
    justifyContent: 'space-between',
  },
  cellTitleText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#7A7886',
  },
  cellChildText: {
    fontSize: 18,
    color: '#514F5B',
  },
  longCell: {
    width: width * 0.92,
    minHeight: 87,
    backgroundColor: 'white',
    elevation: 3,
    borderRadius: 10,
    marginTop: 30,
    alignSelf: 'center',
    padding: 15,
    justifyContent: 'space-between',
  },
  cellContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonStyle: {
    alignSelf: 'center',
  },
  phoneText: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  manageText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6379F4',
  },
  addPhoneNumber: {
    fontSize: 18,
    color: '#6379F4',
  },
});
