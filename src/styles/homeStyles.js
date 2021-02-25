import {StyleSheet} from 'react-native';
import {width} from '../utils/size';

const fontFamily = {fontFamily: 'NunitoSans-Regular'};

const homeStyles = StyleSheet.create({
  container: {
    backgroundColor: '#FAFCFF',
  },
  topArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    marginTop: 30,
    marginBottom: 20,
  },
  photo: {
    width: 52,
    height: 52,
    borderRadius: 10,
  },
  nameArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
  },
  hello: {
    ...fontFamily,
    color: '#646464',
    fontSize: 18,
  },
  name: {
    ...fontFamily,
    color: '#646464',
    fontWeight: 'bold',
    fontSize: 18,
    maxWidth: 200,
  },
  infoPadd: {
    paddingHorizontal: 15,
  },
  infoArea: {
    padding: 25,
    borderRadius: 20,
    backgroundColor: '#6379F4',
  },
  subtitle: {
    ...fontFamily,
    color: '#DFDCDC',
    fontSize: 14,
  },
  balance: {
    ...fontFamily,
    color: '#DFDCDC',
    fontSize: 18,
    marginVertical: 15,
    fontWeight: 'bold',
  },
  btnList: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    marginTop: 10,
  },
  btnType: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 57,
    width: width / 2,
    maxWidth: width / 2 - 25,
    backgroundColor: '#E5E8ED',
    borderRadius: 10,
  },
  btnTypeText: {
    ...fontFamily,
    color: '#514F5B',
    fontSize: 18,
    marginVertical: 15,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  rowText: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  seeAll: {
    ...fontFamily,
    color: '#6379F4',
    fontSize: 14,
  },
  cardBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#FFF',
    borderRadius: 10,
    elevation: 1,
    marginBottom: 15,
  },
  cardTitle: {
    ...fontFamily,
    color: '#4D4B57',
    fontWeight: 'bold',
    fontSize: 16,
    maxWidth: 150,
  },
  cardSub: {
    ...fontFamily,
    color: '#7A7886',
    fontSize: 14,
  },
  cardType1: {
    ...fontFamily,
    fontWeight: 'bold',
    fontSize: 18,
    color: '#1EC15F',
  },
  cardType2: {
    ...fontFamily,
    fontWeight: 'bold',
    fontSize: 18,
    color: '#FF5B37',
  },
});

export default homeStyles;
