import React, {useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Card = (props) => {
  let txtcolor = 'red';
  if (props.type === 'Top Up') {
    txtcolor = 'green';
  }
  // if (txtcolor >= 0) {
  //   txtcolor = 'green';
  // } else {
  //   txtcolor = 'red';
  // }

  console.log(props.Img);

  const [color, setcolor] = useState(txtcolor);

  return (
    <TouchableOpacity
      style={styles.container}
      //   onPress={() => {
      //     props.navigation.navigate('Success');
      //   }}
    >
      <View style={{flexDirection: 'row'}}>
        <View style={styles.containerImage}>
          <Image style={styles.img} source={{uri: props.Img}} />
        </View>
        <View style={styles.txtContainer}>
          <Text style={styles.txtName}>{props.name}</Text>
          <Text style={styles.status}>{props.status}</Text>
        </View>
      </View>
      <View>
        <Text style={{...styles.price, color}}>Rp {props.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 96,
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 20,
    marginBottom: 20,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerImage: {
    height: 56,
    width: 56,
    backgroundColor: '#EBEEF2',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    maxHeight: 56,
    maxWidth: 56,
    borderRadius: 10,
  },
  txtContainer: {
    marginLeft: 15,
    height: 50,
    justifyContent: 'space-between',
  },
  txtName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  status: {
    color: '#7A7886',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Card;
