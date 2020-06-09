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

import SignUp from './pages/singup.android';

const Landing = ({navigation}) => {
  return (
    <View className="bgImg" style={{flex: 1}}>
      <View
        className="jumbotron background-pizza"
        style={{
          textAlign: 'center',
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#87cefa',
          flex: 1,
          //   marginTop: '25vh',
          //   verticalAlign: 'baseline',
        }}>
        <Text h1 style={{fontWeight: 'bold'}}>
          PIZZA RATE
        </Text>

        {/* <Link to={`/login`}>
          <Button className="btn btn-primary" style={{marginTop: '0.5rem'}}>
            ENTER
          </Button>
        </Link> */}
        <View style={{width: '75%'}}>
          <Button title="ENTER" onPress={() => navigation.navigate('Main')} />
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '75%',
            paddingTop: '3%',
          }}>
          <View style={{flex: 1}}>
            <Button title="LOG-IN" color="#32cd32" />
          </View>
          <View style={{flex: 1}}>
            <Button
              title="REGISTER"
              color="#0000ff"
              onPress={() => navigation.navigate('Signup')}
            />
          </View>
        </View>
        <Text>Please explore and test the App!</Text>
      </View>
    </View>
  );
};

export default Landing;
