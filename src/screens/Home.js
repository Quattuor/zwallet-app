import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {plus} from '../utils/redux/actionCreators/auth';
import {StyleSheet, Text, View, StatusBar, Button} from 'react-native';

const Home = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <View>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Text style={styles.title}>Home</Text>
      <Text>Number: {Number(auth.num)}</Text>
      <Button title="Plus" onPress={() => dispatch(plus(Number(auth.num)))} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'NunitoSans-Bold',
  },
});
