import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Button,
  StyleSheet,
  StatusBar,
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
        <View>
          <StatusBar
            translucent
            backgroundColor="transparent"
            barStyle="dark-content"
          />
          <Button
            title="Transfer"
            onPress={() => this.props.navigation.push('transfer')}
          />
          <View style={style.profile}>
            <Button
              title="Go To Profile"
              onPress={() => this.props.navigation.push('Profile')}
            />
          </View>
          <View style={style.profile}>
            <Button
              title="Go To Topup"
              onPress={() => this.props.navigation.push('Topup')}
            />
            <View style={{marginTop: 20}}>
              <Button
                title="Contact"
                onPress={() => this.props.navigation.push('Contact')}
              />
              <Button
                title="History"
                onPress={() => this.props.navigation.push('History')}
              />
              <Button
                title="Notification"
                onPress={() => this.props.navigation.push('Notification')}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const style = StyleSheet.create({
  title: {
    fontFamily: 'NunitoSans-Bold',
  },
  profile: {
    marginTop: 20,
  },
});

const mapsStateToProps = ({auth}) => ({
  auth,
});

export default connect(mapsStateToProps)(Home);
