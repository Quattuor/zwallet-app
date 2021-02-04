import React, {createRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {bobi, momo, netflix, spotify, susi} from '../assets';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ActionSheet from 'react-native-actions-sheet';
import CalendarPicker from 'react-native-calendar-picker';
import {useSelector, useDispatch} from 'react-redux';
import Card from '../components/Card';
import {API_URL} from '@env';
import {setHistory} from '../utils/redux/actionCreators/history';

const actionSheetRef = createRef();
const History = ({navigation}) => {
  //   let actionSheet;
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const history = useSelector((state) => state.history.history);

  console.log(history);

  console.log(startDate);

  const selectDate = (date, type) => {
    if (type === 'END_DATE') {
      setEndDate(date);
    } else {
      setStartDate(date), setEndDate(null);
    }
  };

  const toTop = () => {
    const sorting = history.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() < new Date(a.createdAt).getTime(),
      console.log(sorting),
    );
  };

  const toLow = () => {};

  const startDatePick = startDate ? startDate.toString() : '';
  const endDatePick = endDate ? endDate.toString() : '';
  // const minDate = new Date(); // Today
  // const maxDate = new Date(2017, 6, 3);

  // console.log('start date', startDatePick);
  // console.log('end date', endDatePick);

  // console.log('start date type', typeof startDatePick);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.textThis}>This Week</Text>
        {history &&
          history.map((item, i) => {
            // console.log(API_URL + item.image);
            return (
              <Card
                key={i}
                navigation={navigation}
                name={item.name ? item.name : item.first_name}
                type={item.type}
                Img={API_URL + item.image}
                status={item.name ? 'Transfer' : 'Subscription'}
                price={item.balance}
                style={styles.card}
              />
            );
          })}
      </ScrollView>
      <View style={styles.filter}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => toTop()} style={styles.btn}>
            <Icon
              name="arrow-up"
              size={30}
              color="#FF5B37"
              style={{marginHorizontal: 5}}
            />
          </TouchableOpacity>
          <TouchableOpacity underlayColor="#6379F4" style={styles.btn}>
            <Icon
              name="arrow-down"
              size={30}
              color="#1EC15F"
              style={{marginHorizontal: 5}}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.filterByDate}
          onPress={() => {
            actionSheetRef.current?.setModalVisible();
          }}>
          <Text style={{color: '#6379F4'}}>Filter By Date</Text>
        </TouchableOpacity>
      </View>

      <ActionSheet gestureEnabled ref={actionSheetRef}>
        <View style={styles.containerCalendar}>
          <Text style={{marginVertical: 10}}>Filter By date</Text>
          <CalendarPicker
            selectedDayColor="#6379F4"
            selectedDayTextColor="white"
            allowRangeSelection={true}
            onDateChange={selectDate}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
            }}>
            <View style={{margin: 10, width: '40%'}}>
              <Text>From</Text>
              <Text>{startDatePick}</Text>
            </View>
            <View style={{margin: 10, width: '40%'}}>
              <Text>To</Text>
              <Text>{endDatePick}</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.applyBtn}
            onPress={() => actionSheetRef.current?.hide()}>
            <Text style={{color: 'white', fontSize: 16}}>Apply</Text>
          </TouchableOpacity>
        </View>
      </ActionSheet>
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    // paddingHorizontal: 15,
    paddingVertical: 15,
  },
  textThis: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  card: {
    borderRadius: 10,
  },
  btn: {
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 10,
    backgroundColor: 'white',
  },
  filter: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  filterByDate: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  allContacts: {
    flexDirection: 'row',
    marginHorizontal: 5,
    marginVertical: 5,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    borderColor: 'black',
    alignItems: 'center',
    elevation: 5,
  },
  imgContact: {
    width: 70,
    height: 70,
    borderRadius: 15,
    overflow: 'hidden',
  },
  textPhone: {
    color: '#4D4B57',
    fontSize: 13,
    fontWeight: '400',
  },
  textContacts: {
    color: '#4D4B57',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 7,
  },
  containerCalendar: {
    width: '100%',
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  applyBtn: {
    backgroundColor: '#6379F4',
    width: '100%',
    alignItems: 'center',
    paddingVertical: 20,
    borderRadius: 10,
    marginVertical: 10,
  },
});
