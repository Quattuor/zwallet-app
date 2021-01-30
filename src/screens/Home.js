import React from 'react';
import {StyleSheet, Text, View, StatusBar, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
// import {API_URL} from '@env';
import {plus} from '../utils/redux/actionCreators/auth';

const Home = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <View>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Text style={styles.title}>Home Develop</Text>
      <Icon name="rocket" size={30} color="#900" />
      {/* <Text>{API_URL}</Text> */}
      <Text>Number: {Number(auth.num)}</Text>
      <Button title="Plus" onPress={() => dispatch(plus(Number(auth.num)))} />
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'NunitoSans-Bold',
  },
});
