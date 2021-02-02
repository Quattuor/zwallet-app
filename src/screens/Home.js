import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import {connect} from 'react-redux';
import IconF from 'react-native-vector-icons/Feather';
import MyStatusBar from '../components/MyStatusBar';
import Photo from '../assets/images/profile.png';
import styles from '../styles/homeStyles';

class Home extends Component {
  render() {
    return (
      <ScrollView>
        <MyStatusBar />
        <View>
          <Image source={Photo} style={styles} />
          <View>
            <View>
              <Text>Hello,</Text>
              <Text>Robert Chandler</Text>
            </View>
            <TouchableOpacity>
              <IconF name="bell" />
              {/* <IconF name="arrow-up" /> */}
            </TouchableOpacity>
          </View>
        </View>
        <Button
          title="Login"
          onPress={() => this.props.navigation.push('Login')}
        />
        <Button
          title="Create Pin"
          onPress={() => this.props.navigation.push('Create Pin')}
        />
      </ScrollView>
    );
  }
}

const mapsStateToProps = ({auth}) => ({
  auth,
=======
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
      <Button
        title="Transfer"
        onPress={() => navigation.navigate('transfer')}
      />
      <Button title="Plus" onPress={() => dispatch(plus(Number(auth.num)))} />
      <View style={styles.profile}>
        <Button
          title="Go To Profile"
          onPress={() => navigation.navigate('Profile')}
        />
      </View>
      <View style={styles.profile}>
        <Button
          title="Go To Topup"
          onPress={() => navigation.navigate('Topup')}
        />
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

export default connect(mapsStateToProps)(Home);
