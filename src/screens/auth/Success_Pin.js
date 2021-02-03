import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from '../../styles/authStyles';
import MyStatusBar from '../../components/MyStatusBar';
import IconF from 'react-native-vector-icons/Feather';
import ButtonAuth from '../../components/auth/ButtonAuth';

const Success_Pin = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <MyStatusBar />
      <View style={styles.topContainer1}>
        <Text style={styles.title1}>Zwallet</Text>
      </View>
      <View style={styles.bottomContainer3}>
        <View style={styles.centerBox}>
          <View style={styles.box}>
            <IconF name="check" color="#FFF" size={30} />
          </View>
        </View>
        <Text style={styles.title2}>PIN Successfully Created</Text>
        <Text style={styles.subtitle}>
          Your PIN was successfully created and you can now access all the
          features in Zwallet. Login to your new account and start exploring!
        </Text>
        <View style={styles.bottomButton}>
          <ButtonAuth
            title="Home"
            disabled={false}
            onPress={() => navigation.push('Home')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Success_Pin;
