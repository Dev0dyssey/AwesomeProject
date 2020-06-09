import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

const MainPage = () => {
  return (
    <View className="bgImg" style={{flex: 1}}>
      <View className="jumbotron background-pizza" style={{}}>
        <Text h1 style={{fontWeight: 'bold', textAlign: 'center'}}>
          MAIN PAGE
        </Text>
      </View>
    </View>
  );
};

export default MainPage;
