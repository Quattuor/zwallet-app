import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Switch,
  Image,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import FastImage from 'react-native-fast-image';
import {Button} from 'react-native-elements';
import userIcon from '../../../assets/icon/user.png';
import BoldText from '../../../components/CustomText';
import {useSelector} from 'react-redux';
import {API_URL} from '@env';
import axios from 'axios';
import ImagePicker from 'react-native-image-crop-picker';

const ProfileScreen = ({navigation}) => {
  const token = useSelector((state) => state.auth.login.data.token);
  console.log('TOKEN', token);
  const id = useSelector((state) => state.auth.login.data.id);
  console.log('ID USER', id);

  const [value, setValue] = useState(false);
  const [userData, setUserData] = useState({});
  const [photo, setPhoto] = useState([]);

  const config = {
    headers: {
      'x-access-token': 'Bearer ' + token,
    },
  };

  console.log('DATAA USER', userData);
  useEffect(() => {
    axios
      .get(`${API_URL}/user/${id}`, config)
      .then(({data}) => {
        setUserData(data.data[0]);
      })
      .catch(({response}) => {
        console.log(response.data);
      });
  }, []);

  const addPhoto = () => {
    ImagePicker.openPicker({
      multiple: true,
      mediaType: 'photo',
    })
      .then((images) => {
        console.log('PHOTO', images.length);
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
      .patch(`${API_URL}/user/img/${id}`, pictureData, config)
      .then(async ({data}) => {
        await addPhoto();
        navigation.reset({
          index: 1,
          routes: [{name: 'Home'}, {name: 'Profile'}],
        });
      })
      .catch((err) => {
        console.log('err', err);
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
              {photo.length < 1 ? (
                <Image
                  style={styles.image}
                  source={{uri: API_URL + userData.photo}}
                />
              ) : (
                <Image style={styles.image} source={{uri: photo[0].path}} />
              )}
              {/* <FastImage style={styles.image} source={userIcon} /> */}
              {/* {foto.map((item) => {
                return (
                  <FastImage
                    style={styles.image}
                    source={{uri: foto.length !== 0 ? item.path : ''}}
                    key={foto.indexOf(item)}
                  />
                );
              })} */}
              {/* <FastImage style={styles.image} source={{uri: foto.path}} /> */}
              {photo.length < 1 ? (
                <Button
                  icon={<Icon name="edit-2" />}
                  buttonStyle={styles.editButtonStyle}
                  type="clear"
                  title="Edit"
                  titleStyle={styles.titleStyle}
                  onPress={addPhoto}
                />
              ) : (
                <Button
                  icon={<Icon name="edit-2" />}
                  buttonStyle={styles.editButtonStyle}
                  type="clear"
                  title="Edit"
                  titleStyle={styles.titleStyle}
                  onPress={uploadFoto}
                />
              )}
              {/* <Button
                icon={<Icon name="edit-2" />}
                buttonStyle={styles.editButtonStyle}
                type="clear"
                title="Edit"
                titleStyle={styles.titleStyle}
                onPress={uploadFoto}
              /> */}
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
                    onValueChange={(value) => {
                      setValue(value);
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
