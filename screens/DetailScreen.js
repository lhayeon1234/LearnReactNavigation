import React, {useEffect} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {useRoute} from '@react-navigation/native';

/**
 * useRoute는 Screen이 아닌 컴포넌트에서 route 객체를 사용할 수 있게함.
 */
function IDText() {
  const route = useRoute();
  return <Text style={styles.text}>id : {route.params.id}</Text>;
}
function DetailScreen({route, navigation}) {
  useEffect(() => {
    navigation.setOptions({
      title: `상세정보 - ${route.params.id}`,
    });
  }, [navigation, route.params.id]);
  return (
    <View style={styles.block}>
      <IDText />
      <View style={styles.buttons}>
        <Button
          title="다음"
          onPress={() => navigation.push('Detail', {id: route.params.id + 1})}
        />
        <Button title="뒤로가기" onPress={() => navigation.pop()} />
        <Button title="처음으로" onPress={() => navigation.popToTop()} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 48,
  },
  buttons: {
    flexDirection: 'row',
  },
});
export default DetailScreen;
