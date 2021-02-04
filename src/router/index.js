import React, {useEffect, useState, useCallback} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';

import Home from '../screens/Home';
import Login from '../screens/auth/Login';
import Sign_Up from '../screens/auth/Sign_Up';
import Forgot_Pass from '../screens/auth/Forgot_Pass';
import Reset_Pass from '../screens/auth/Reset_Pass';
import Create_Pin from '../screens/auth/Create_Pin';
import Success_Pin from '../screens/auth/Success_Pin';
import ProfileScreen from '../screens/ProfileScreen/Profile';
import PersonalInfo from '../screens/ProfileScreen/PersonalInformation';
import ChangePassword from '../screens/ProfileScreen/ChangePassword';
import ChangePin from '../screens/ProfileScreen/ChangePin';
import AddPhoneNumber from '../screens/ProfileScreen/AddPhoneNumber';
import ChangePhoneNumber from '../screens/ProfileScreen/ChangePhoneNumber';
import Topup from '../screens/TopupScreen';
import Contact from '../screens/Contact';
import History from '../screens/History';
import Notification from '../screens/Notification';
import {
  transferInput,
  transferPin,
  transferConfirm,
  transferSuccess,
  transferFailed,
} from '../screens/transfer';
import {useSocket} from '../utils/context/socketProvider';
// import {Alert} from 'react-native';
import Otp from '../screens/auth/Otp';
import PushNotification from 'react-native-push-notification';
import {showNotification} from '../notif';
import {
  userTransaction,
  userSubscribe,
  setHistory,
} from '../utils/redux/actionCreators/history';
import {getUser} from '../utils/redux/actionCreators/auth';
import {connect} from 'react-redux';

const Stack = createStackNavigator();

const MainRouter = (props) => {
  const token = useSelector((state) => state.auth.login);
  const [route, setRoute] = useState(!token.data ? 'Login' : 'Home');

  useEffect(() => {
    PushNotification.createChannel(
      {
        channelId: 'notif',
        channelName: 'My Notification channel',
        channelDescription: 'A channel to categories your notification',
        soundName: 'default',
        importance: 4,
        vibrate: true,
      },
      (created) => console.log(`createchannel returned '${created}'`),
    );
    PushNotification.getChannels((channel_ids) => {
      console.log(channel_ids);
    });
  }, []);

  // console.log('ROUTER', token);
  useEffect(() => {
    if (!token.data) {
      // console.log('TOKEN KOSONG');
      setRoute('Login');
    } else {
      // console.log('ADA');
      setRoute('Home');
    }
    SplashScreen.hide();
  }, [token.data]);

  const socket = useSocket();

  const getHistory = useCallback(async () => {
    const {
      dispatch,
      auth: {login},
    } = props;

    await dispatch(userTransaction(login.data.id));
    await dispatch(userSubscribe(login.data.id));
    const {users, instance} = props.history;

    const histories = [...users.data, ...instance.data];
    const sort = histories.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() < new Date(a.createdAt).getTime(),
    );
    // const sort = histories.sort((a, b) => b.createdAt - a.createdAt);
    await dispatch(setHistory(sort));
  }, [props]);

  useEffect(() => {
    const {
      dispatch,
      auth: {login},
    } = props;
    const channel = 'notif';
    if (socket === undefined) {
      return;
    }
    socket.on('connect', () => {
      socket.on('topup', ({title, message}) => {
        // let wall = 0;
        // wall += 1;
        // console.log(wall);
        // if (wall === 2) {
        showNotification(title, message, channel);
        console.log(login.data.id);
        dispatch(getUser(login.data.id));
        getHistory();
        // console.log('ini main router', login.data.id);
        // Alert.alert(title, message);
        console.log(message);
      });
      socket.on('transaction', ({title, message}) => {
        showNotification(title, message, channel);
        dispatch(getUser(login.data.id));
        getHistory();
        // Alert.alert(title, message);
        console.log(message);
      });
    });
    return () => socket.off('connect');
  }, [socket, getHistory, props]);

  return (
    <Stack.Navigator initialRouteName={route}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Sign Up"
        component={Sign_Up}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Forgot Pass"
        component={Forgot_Pass}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Otp" component={Otp} options={{headerShown: false}} />
      <Stack.Screen
        name="Reset Pass"
        component={Reset_Pass}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Create Pin"
        component={Create_Pin}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Success Pin"
        component={Success_Pin}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Topup"
        component={Topup}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Personal Information"
        component={PersonalInfo}
        options={{
          headerStyle: {
            backgroundColor: '#6379F4',
            height: 110,
            borderBottomLeftRadius: 25,
            borderBottomRightRadius: 25,
          },
          headerTintColor: 'white',
          headerTitleStyle: {fontWeight: 'bold'},
        }}
      />
      <Stack.Screen
        name="Change Password"
        component={ChangePassword}
        options={{
          headerStyle: {
            backgroundColor: '#6379F4',
            height: 110,
            borderBottomLeftRadius: 25,
            borderBottomRightRadius: 25,
          },
          headerTintColor: 'white',
          headerTitleStyle: {fontWeight: 'bold'},
        }}
      />
      <Stack.Screen
        name="Change PIN"
        component={ChangePin}
        options={{
          headerStyle: {
            backgroundColor: '#6379F4',
            height: 110,
            borderBottomLeftRadius: 25,
            borderBottomRightRadius: 25,
          },
          headerTintColor: 'white',
          headerTitleStyle: {fontWeight: 'bold'},
        }}
      />
      <Stack.Screen
        name="Add Phone Number"
        component={AddPhoneNumber}
        options={{
          headerStyle: {
            backgroundColor: '#6379F4',
            height: 110,
            borderBottomLeftRadius: 25,
            borderBottomRightRadius: 25,
          },
          headerTintColor: 'white',
          headerTitleStyle: {fontWeight: 'bold'},
        }}
      />
      <Stack.Screen
        name="Change Phone Number"
        component={ChangePhoneNumber}
        options={{
          headerStyle: {
            backgroundColor: '#6379F4',
            height: 110,
            borderBottomLeftRadius: 25,
            borderBottomRightRadius: 25,
          },
          headerTintColor: 'white',
          headerTitleStyle: {fontWeight: 'bold'},
        }}
      />
      <Stack.Screen
        name="transfer"
        component={transferInput}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="confirmation"
        component={transferConfirm}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="pinToTransfer"
        component={transferPin}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="transferSuccess"
        component={transferSuccess}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="transferFailed"
        component={transferFailed}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Contact"
        component={Contact}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="History"
        component={History}
        options={{
          title: 'History',
        }}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{
          title: 'Notification',
        }}
      />
    </Stack.Navigator>
  );
};

const mapsStateToProps = ({auth, history}) => ({
  auth,
  history,
});

export default connect(mapsStateToProps)(MainRouter);
