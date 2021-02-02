import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {plus} from '../utils/redux/actionCreators/auth';
import {StyleSheet, Text, View, StatusBar, Button} from 'react-native';
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
      <Button title="Transfer" onPress={() => navigation.navigate('transfer')} />
      <Button title="Plus" onPress={() => dispatch(plus(Number(auth.num)))} />
      <View style={{marginTop: 20}}>
        <Button
          title="Contact"
          onPress={() => navigation.navigate('Contact')}
        />
        <Button
          title="History"
          onPress={() => navigation.navigate('History')}
        />
        <Button
          title="Notification"
          onPress={() => navigation.navigate('Notification')}
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
});
