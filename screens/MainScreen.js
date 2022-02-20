import React, {useEffect, useCallback} from 'react';
import {View, Button, Text} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation, useFocusEffect} from '@react-navigation/native';

const Tab = createMaterialBottomTabNavigator();

/**
 *
 * useNavigation을 이용하여 navigation 객체를 사용
 */
function OpenDetailButton() {
  const navigation = useNavigation();
  return (
    <Button
      title="Detail 1 열기"
      onPress={() => navigation.push('Detail', {id: 1})}
    />
  );
}

/**
 * 다른 화면을 열었다가 돌아왔을 때 특정 작업을 하고 싶다면, useFocusEffect Hook을 사용
 * 현재 화면에서 다른 화면으로 넘어갈 때 특정 작업을 하고싶다면 useFocusEffect에서 함수를 만들어 반환
 * useFocusEffect 는 꼭 useCallback과 같이 사용 useCallback을 사용하지 않으면 컴포넌트가 리랜더링 될때마다 useFocusEffect에 등록된 함수가 호출
 * useCallback은 컴포넌트 내부에서 함수를 만들 때 새로 만든 함수를 사용하지 않고 이전에 만든 함수를 재사용
 */
function HomeScreen() {
  useFocusEffect(
    useCallback(() => {
      console.log('이 화면을 보고 있어요.');
      return () => {
        console.log('다른 화면을 보고 있어요');
      };
    }, []),
  );
  return (
    <View>
      <Text>Home</Text>
      <OpenDetailButton />
    </View>
  );
}
function SearchScreen() {
  return <Text>Search</Text>;
}

function NotificationScreen() {
  return <Text>Notification</Text>;
}
function MessageScreen() {
  return <Text>Message</Text>;
}

function MainScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        showIcon: true,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: '홈',
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={24} />,
          tabBarColor: 'black',
          tabBarBadge: 'new',
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: '검색',
          tabBarIcon: ({color}) => (
            <Icon name="search" color={color} size={24} />
          ),
          tabBarColor: 'gray',
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarLabel: '알림',
          tabBarIcon: ({color}) => (
            <Icon name="notifications" color={color} size={24} />
          ),
          tabBarColor: 'green',
          tabBarBadge: 30,
        }}
      />
      <Tab.Screen
        name="Message"
        component={MessageScreen}
        options={{
          tabBarLabel: '메시지',
          tabBarIcon: ({color}) => (
            <Icon name="message" color={color} size={24} />
          ),
          tabBarColor: 'blue',
          tabBarBadge: true,
        }}
      />
    </Tab.Navigator>
  );
}
export default MainScreen;
