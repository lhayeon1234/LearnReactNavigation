import React, {useEffect} from 'react';
import {Button, View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

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

function HomeScreen() {
  return (
    <View>
      <Text>Home</Text>
      <OpenDetailButton />
    </View>
  );
}

export default HomeScreen;
