import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {plus} from '../utils/redux/actionCreators/auth';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Button,
  TouchableOpacity,
} from 'react-native';
// import {API_URL} from '@env';

const Home = ({navigation}) => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <View>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Text style={styles.title}>Home Develop</Text>
      {/* <Text>{API_URL}</Text> */}
      <Text>Number: {Number(auth.num)}</Text>
      <Button title="Plus" onPress={() => dispatch(plus(Number(auth.num)))} />
      <View style={styles.profile}>
        <Button
          title="Go To Profile"
          onPress={() => navigation.navigate('Profile')}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'NunitoSans-Bold',
  },
  profile: {
    marginTop: 20,
  },
});
