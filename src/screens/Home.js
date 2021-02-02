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
});

export default connect(mapsStateToProps)(Home);
