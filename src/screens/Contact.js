import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import {bobi, dody, julia, left, mei, rich, susi} from '../assets';
import Card from '../components/Contact';

const Contact = ({navigation}) => {
  return (
    <>
      <StatusBar barStyle="white" translucent backgroundColor="#6379F4" />
      <View style={styles.header}>
        <View style={styles.sectionHeader}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={left} />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              marginLeft: 15,
              color: 'white',
              fontWeight: '400',
            }}>
            Find Receiver
          </Text>
        </View>
        <View style={styles.formSearch}>
          <TouchableOpacity>
            <Icon
              name="search"
              size={30}
              color="#000000"
              style={{marginHorizontal: 5}}
            />
          </TouchableOpacity>
          <TextInput
            style={{width: '100%'}}
            placeholder="Search receiver here"
          />
        </View>
      </View>
      <ScrollView style={styles.container}>
        <View style={{marginBottom: 20}}>
          <Text
            style={{
              color: '#4D4B57',
              fontSize: 18,
              fontWeight: '700',
              marginTop: 15,
              marginBottom: 10,
            }}>
            Contacts
          </Text>
          <Text style={{color: '#4D4B57', fontSize: 18, fontWeight: '400'}}>
            17 Contacts Founds
          </Text>
        </View>
        <Card
          navigation={navigation}
          Img={susi}
          name="Samuel Suhi"
          phone="+62 813-8492-9994"
        />
        <Card
          navigation={navigation}
          Img={julia}
          name="Julia Syen"
          phone="+62 812-3942-3656"
        />
        <Card
          navigation={navigation}
          Img={bobi}
          name="Bobi Sammy"
          phone="+62 813-5982-2940"
        />
        <Card
          navigation={navigation}
          Img={rich}
          name="Juliana Rich"
          phone="+62 811-6212-5663"
        />
        <Card
          navigation={navigation}
          Img={mei}
          name="Michi Mei"
          phone="+62 813-3891-3838"
        />
        <Card
          navigation={navigation}
          Img={dody}
          name="Dody Besari"
          phone="+62 0812-4334-3561"
        />
      </ScrollView>
    </>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
  header: {
    height: 218,
    width: '100%',
    backgroundColor: '#6379F4',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  sectionHeader: {
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
    marginBottom: 35,
    width: '100%',
    // justifyContent: 'space-between',
  },
  formSearch: {
    flexDirection: 'row',
    marginHorizontal: 15,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 25,
    marginTop: 40,
  },
  card: {
    width: 110,
    marginRight: 20,
    marginVertical: 10,
    padding: 20,
    borderRadius: 20,
    backgroundColor: 'white',
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  img: {
    width: 70,
    height: 70,
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 10,
  },
});
