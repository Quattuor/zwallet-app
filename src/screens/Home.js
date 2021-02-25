/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {connect} from 'react-redux';

import {
  userTransaction,
  userSubscribe,
  setHistory,
} from '../utils/redux/actionCreators/history';
import IconF from 'react-native-vector-icons/Feather';
import MyStatusBar from '../components/MyStatusBar';
import Photo from '../assets/images/profile.png';
import styles from '../styles/homeStyles';
import {API_URL} from '@env';

const Modal = ({hide, navigation}) => {
  const {height, width} = Dimensions.get('window');
  return (
    <View
      style={{
        position: 'absolute',
        zIndex: 1,
        top: 0,
        width: width,
        height: height,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        onPress={hide}
        style={{backgroundColor: '#00000090', width: '100%', height: '100%'}}
      />

      <View
        style={{
          backgroundColor: '#fff',
          elevation: 5,
          width: '70%',
          position: 'absolute',
          zIndex: 1,
          borderRadius: 14,
          alignItems: 'center',
          paddingVertical: 18,
        }}>
        <Text style={{fontSize: 18, marginBottom: 10}}>
          Phone Number Doesn't Exist
        </Text>
        <Text style={{paddingHorizontal: 30, textAlign: 'center'}}>
          {'tap the profile photo at the top \nto add a phone number \n\nor'}
        </Text>
        <TouchableOpacity
          onPress={navigation}
          style={{backgroundColor: '#6379F4', marginTop: 10, borderRadius: 10}}>
          <Text
            style={{
              color: '#fff',
              paddingHorizontal: 15,
              paddingVertical: 10,
              fontSize: 15,
            }}>
            Click Me
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: props.auth.login.data.phone,
      isModal: false,
      histories: [],
    };
  }
  getHistory = async () => {
    const {
      dispatch,
      auth: {login},
    } = this.props;

    await dispatch(userTransaction(login.data.id));
    await dispatch(userSubscribe(login.data.id));
    const {users, instance} = this.props.history;

    const histories = [...users.data, ...instance.data];
    const sort = histories.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() < new Date(a.createdAt).getTime(),
    );
    // const sort = histories.sort((a, b) => b.createdAt - a.createdAt);
    await dispatch(setHistory(sort));
    this.setState({
      histories: sort,
    });
  };

  componentDidMount() {
    this.getHistory();
  }

  render() {
    const {login} = this.props.auth;
    // const {history} = this.props.history;
    // console.log(login);
    console.log(this.state.histories);
    const {phone, isModal} = this.state;
    // console.log(history, 'HISTORY 53');

    return (
      <>
        <MyStatusBar />
        <ScrollView
          style={styles.container}
          scrollEnabled={isModal ? false : true}>
          {isModal && (
            <Modal
              hide={() => {
                this.setState({
                  isModal: !isModal,
                });
              }}
              navigation={() => {
                this.setState({
                  isModal: !isModal,
                });
                this.props.navigation.navigate('Add Phone Number');
              }}
            />
          )}
          <View style={styles.topArea}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Profile')}>
              <Image source={Photo} style={styles.photo} />
            </TouchableOpacity>
            <View style={styles.nameArea}>
              <View style={styles.titleArea}>
                <Text style={styles.hello}>Hello,</Text>
                <Text style={styles.name}>
                  {login.data
                    ? login.data.username && login.data.lastname
                      ? login.data.username + ' ' + login.data.lastname
                      : login.data.username
                    : 'John Doe'}
                </Text>
              </View>
              <TouchableOpacity style={styles.btnBell}>
                <IconF name="bell" color="#4D4B57" size={23} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.infoPadd}>
            <View style={styles.infoArea}>
              <Text style={styles.subtitle}>Balance</Text>
              <Text style={styles.balance}>
                {login.data && login.data.balance
                  ? 'Rp.' + login.data.balance
                  : 'Rp.0'}
              </Text>
              <Text style={styles.subtitle}>
                {login.data && login.data.phone
                  ? login.data.phone
                  : 'Please add phone first'}
              </Text>
            </View>
          </View>
          <View style={styles.btnList}>
            <TouchableOpacity style={styles.btnType}>
              <IconF name="arrow-up" color="#608DE2" size={21} />
              <Text
                style={styles.btnTypeText}
                onPress={() => this.props.navigation.navigate('Contact')}>
                Transfer
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnType}>
              <IconF name="plus" color="#608DE2" size={21} />
              <Text style={styles.btnTypeText}>Top Up</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowText}>
            <Text style={styles.btnTypeText}>Transaction History</Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('History')}>
              <Text style={styles.seeAll}>See all</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.cardList}>
            {this.state.histories &&
              this.state.histories.map((item, i) => {
                // console.log(new Date(item.createdAt).getTime());
                console.log(API_URL + item.image);
                return (
                  <TouchableOpacity key={i}>
                    <View style={styles.cardBox}>
                      <Image
                        source={{uri: API_URL + item.image}}
                        style={styles.photo}
                      />
                      <View style={styles.nameArea}>
                        <View>
                          <Text style={styles.cardTitle}>
                            {item.name ? item.name : item.first_name}
                          </Text>
                          <Text style={styles.cardSub}>Transfer</Text>
                        </View>
                        <Text
                          style={
                            item.type === 'Top Up'
                              ? styles.cardType1
                              : styles.cardType2
                          }>
                          {' '}
                          {item.type === 'Top Up' ? '+' : '-'}Rp.{item.balance}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })}
          </View>
        </ScrollView>
      </>
    );
  }
}

const mapsStateToProps = ({auth, history}) => ({
  auth,
  history,
});

export default connect(mapsStateToProps)(Home);
