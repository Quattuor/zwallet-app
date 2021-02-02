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
      <ScrollView style={styles.container}>
        <MyStatusBar />
        <View style={styles.topArea}>
          <TouchableOpacity>
            <Image source={Photo} style={styles.photo} />
          </TouchableOpacity>
          <View style={styles.nameArea}>
            <View style={styles.titleArea}>
              <Text style={styles.hello}>Hello,</Text>
              <Text style={styles.name}>Robert Chandler</Text>
            </View>
            <TouchableOpacity style={styles.btnBell}>
              <IconF name="bell" color="#4D4B57" size={23} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.infoPadd}>
          <View style={styles.infoArea}>
            <Text style={styles.subtitle}>Balance</Text>
            <Text style={styles.balance}>Rp120.000</Text>
            <Text style={styles.subtitle}>+62 813-9387-7946</Text>
          </View>
        </View>
        <View style={styles.btnList}>
          <TouchableOpacity style={styles.btnType}>
            <IconF name="arrow-up" color="#608DE2" size={21} />
            <Text style={styles.btnTypeText}>Transfer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnType}>
            <IconF name="plus" color="#608DE2" size={21} />
            <Text style={styles.btnTypeText}>Top Up</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rowText}>
          <Text style={styles.btnTypeText}>Transaction History</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cardList}>
          <TouchableOpacity>
            <View style={styles.cardBox}>
              <Image source={Photo} style={styles.photo} />
              <View style={styles.nameArea}>
                <View>
                  <Text style={styles.cardTitle}>Samuel Suhi</Text>
                  <Text style={styles.cardSub}>Transfer</Text>
                </View>
                <Text style={styles.cardType1}>+Rp50.000</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.cardBox}>
              <Image source={Photo} style={styles.photo} />
              <View style={styles.nameArea}>
                <View>
                  <Text style={styles.cardTitle}>Samuel Suhi</Text>
                  <Text style={styles.cardSub}>Transfer</Text>
                </View>
                <Text style={styles.cardType1}>+Rp50.000</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.cardBox}>
              <Image source={Photo} style={styles.photo} />
              <View style={styles.nameArea}>
                <View>
                  <Text style={styles.cardTitle}>Samuel Suhi</Text>
                  <Text style={styles.cardSub}>Transfer</Text>
                </View>
                <Text style={styles.cardType1}>+Rp50.000</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
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
