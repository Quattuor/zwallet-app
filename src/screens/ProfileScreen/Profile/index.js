/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  // TouchableOpacity,
  ScrollView,
  Switch,
  Image,
  Platform,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import FastImage from 'react-native-fast-image';
import {Button} from 'react-native-elements';
import userIcon from '../../../assets/icon/user.png';
import BoldText from '../../../components/CustomText';
import {useSelector, useDispatch} from 'react-redux';
import {API_URL} from '@env';
import axios from 'axios';
import ImagePicker from 'react-native-image-crop-picker';
import {logoutUser} from '../../../utils/redux/actionCreators/auth';

const ProfileScreen = ({navigation}) => {
  // const token = useSelector((state) => state.auth.login.data.token);
  // console.log('TOKEN', token);
  // const id = useSelector((state) => state.auth.login.data.id);
  // console.log('ID USER', id);
  const getData = useSelector((state) => state.auth.login);
  const logout = useSelector((state) => state.auth.login);
  console.log('LOGOUT CHECK', logout);

  const dispatch = useDispatch();

  const [value, setValue] = useState(false);
  const [userData, setUserData] = useState({});
  const [photo, setPhoto] = useState([]);

  console.log('DATAA USER', userData);
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
  }, [getData.data]);

  const addPhoto = () => {
    ImagePicker.openPicker({
      multiple: true,
      mediaType: 'photo',
    })
      .then((images) => {
        console.log('PHOTO', images);
        setPhoto(images);
      })
      .catch((err) => {
        console.log('ERROR', err);
      });
  };

  const uploadFoto = () => {
    const pictureData = new FormData();
    console.log('FOTO', photo);
    for (let i = 0; i < photo.length; i++) {
      pictureData.append('photo', {
        name: photo[i].path.split('/').pop(),
        type: photo[i].mime,
        uri:
          Platform.OS === 'android'
            ? photo[i].path
            : photo[i].path.replace('file://', ''),
      });
    }
    console.log('PICTURE', pictureData);
    axios
      .patch(`${API_URL}/user/img/${getData.data.id}`, pictureData, {
        headers: {
          'x-access-token': 'Bearer ' + getData.data.token,
        },
      })
      .then(async ({data}) => {
        addPhoto();
        await navigation.reset({
          index: 1,
          routes: [{name: 'Home'}, {name: 'Profile'}],
        });
      })
      .catch((err) => {
        console.log('err', err);
      });
  };

  const promptLogout = () => {
    Alert.alert(
      'Logout?',
      "You'll be logout from system",
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {text: 'OK', onPress: Logout},
      ],
      {cancelable: true},
    );
  };

  const Logout = () => {
    axios
      .delete(API_URL + '/auth/logout', {
        headers: {
          'x-access-token': 'Bearer ' + getData.data.token,
        },
      })
      .then(({data}) => {
        console.log('LOGOUT', data);
        dispatch(logoutUser());
        if (data.success) {
          navigation.navigate('Login');
        }
        console.log('LOGOUT289282', logout);
      })
      .catch(({response}) => {
        console.log(response);
      });
  };

  const handleSwitch = () => {
    const check = {
      value: false,
    };
    setValue(check.value);
  };
  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 20, backgroundColor: 'white'}}>
        <View style={styles.container}>
          {userData !== undefined ? (
            <View style={styles.header}>
              <Icon
                onPress={() => {
                  navigation.goBack();
                }}
                name="arrow-left"
                style={styles.iconBackStyle}
                size={30}
                color="#4D4B57"
              />
              {photo.length !== 0 ? (
                <Image
                  style={styles.image}
                  source={
                    photo.length < 1
                      ? {uri: API_URL + userData.photo}
                      : {uri: photo[0].path}
                  }
                />
              ) : (
                <Image style={styles.image} source={userIcon} />
              )}
              <Button
                icon={<Icon name="edit-2" />}
                buttonStyle={styles.editButtonStyle}
                type="clear"
                title="Edit"
                titleStyle={styles.titleStyle}
                onPress={addPhoto}
              />
              <BoldText style={styles.nameText}>
                {userData.username} {userData.lastname}
              </BoldText>
              <Text style={styles.phoneNumber}>{userData.phone}</Text>
            </View>
          ) : (
            <View style={styles.header}>
              <Icon
                onPress={() => {
                  navigation.goBack();
                }}
                name="arrow-left"
                style={styles.iconBackStyle}
                size={30}
                color="#4D4B57"
              />
              <FastImage style={styles.image} source={userIcon} />
              <Button
                icon={<Icon name="edit-2" />}
                buttonStyle={styles.editButtonStyle}
                type="clear"
                title="Edit"
                titleStyle={styles.titleStyle}
              />
              <BoldText style={styles.nameText}>Robert Chandler</BoldText>
              <Text style={styles.phoneNumber}>+62 813-9387-7946</Text>
            </View>
          )}
          <View
            style={{flexDirection: 'column', justifyContent: 'space-between'}}>
            <View style={styles.buttonContainer}>
              <Button
                title="Personal Information"
                icon={<Icon name="arrow-right" size={30} color="#4D4B57" />}
                iconRight={true}
                buttonStyle={styles.buttonStyle}
                containerStyle={styles.buttonSingleContainer}
                titleStyle={styles.titleStyle}
                onPress={() => {
                  navigation.navigate('Personal Information');
                }}
              />
              <Button
                title="Change Password"
                icon={<Icon name="arrow-right" size={30} color="#4D4B57" />}
                iconRight={true}
                buttonStyle={styles.buttonStyle}
                containerStyle={styles.buttonSingleContainer}
                titleStyle={styles.titleStyle}
                onPress={() => {
                  navigation.navigate('Change Password');
                }}
              />
              <Button
                title="Change PIN"
                icon={<Icon name="arrow-right" size={30} color="#4D4B57" />}
                iconRight={true}
                buttonStyle={styles.buttonStyle}
                containerStyle={styles.buttonSingleContainer}
                titleStyle={styles.titleStyle}
                onPress={() => {
                  navigation.navigate('Change PIN');
                }}
              />
              <Button
                title="Notification"
                buttonStyle={styles.buttonStyle}
                containerStyle={styles.buttonSingleContainer}
                titleStyle={styles.titleStyle}
                icon={
                  <Switch
                    trackColor={{
                      false: 'rgba(169, 169, 169, 0.4)',
                      true: '#6379F4',
                    }}
                    thumbColor={value ? 'white' : 'white'}
                    onValueChange={(e) => {
                      setValue(e);
                    }}
                    value={value}
                  />
                }
                iconRight={true}
              />
            </View>
            <Button
              title="Logout"
              buttonStyle={[styles.buttonStyle, {justifyContent: 'center'}]}
              containerStyle={styles.buttonSingleContainer}
              titleStyle={styles.logoutTitleStyle}
              type="clear"
              onPress={promptLogout}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default ProfileScreen;

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height,
    width,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#FAFCFF',
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 42,
    marginBottom: 25,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    alignSelf: 'center',
    resizeMode: 'cover',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    // height: '100%',
  },
  buttonSingleContainer: {
    borderRadius: 10,
    width: 343,
    marginTop: 20,
    alignSelf: 'center',
    elevation: 2,
  },
  buttonStyle: {
    width: 343,
    height: 58,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 15,
    paddingBottom: 15,
    alignSelf: 'center',
    borderRadius: 10,
  },
  nameText: {
    alignSelf: 'center',
    fontSize: 24,
    // fontFamily: 'NunitoSans-Bold',
    color: '#4D4B57',
    marginBottom: 10,
  },
  phoneNumber: {
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '400',
    color: '#7A7886',
  },
  titleStyle: {
    color: '#4D4B57',
    fontSize: 16,
    fontFamily: 'NunitoSans-Bold',
  },
  logoutTitleStyle: {
    fontSize: 16,
    fontFamily: 'NunitoSans-Bold',
    color: '#FF5B37',
  },
  editButtonStyle: {
    width: 48,
    height: 27,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 15,
    // justifyContent: 'space-between',
  },
  editTitle: {
    color: '#7A7886',
  },

  iconBackStyle: {
    marginLeft: 21,
  },
});
