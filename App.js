// import React, {useState, useEffect} from 'react';
// import {View, Text} from 'react-native';
// import auth from '@react-native-firebase/auth';

// function App() {
//   // Set an initializing state whilst Firebase connects
//   const [initializing, setInitializing] = useState(true);
//   const [user, setUser] = useState();

//   // Handle user state changes
//   function onAuthStateChanged(user) {
//     setUser(user);
//     if (initializing) setInitializing(false);
//   }

//   useEffect(() => {
//     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//     return subscriber; // unsubscribe on unmount
//   }, []);

//   if (initializing) return null;

//   if (!user) {
//     return (
//       <View>
//         <Text>Login</Text>
//       </View>
//     );
//   }

//   return (
//     <View>
//       <Text>Welcome {user.email}</Text>
//     </View>
//   );
// }

// export default App;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {Picker} from '@react-native-community/picker';
import Landing from './src/landingpage.android';
import MainPage from './src/mainpage.android';
import SignUp from './src/pages/singup.android';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import auth from '@react-native-firebase/auth';

const App: () => React$Node = () => {
  // const [selectedValue, selectValue] = useState('Option One');
  // const [initializing, setInitializing] = useState(true);
  // const [user, setUser] = useState();
  const Stack = createStackNavigator();

  // const onAuthStateChanged = user => {
  //   setUser(user);
  //   if (initializing) setInitializing(false);
  // };

  // useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //   return subscriber;
  // }, []);

  // if (initializing) return null;

  // if (!user) {
  //   return (
  //     <View>
  //       <Text>LOGIN</Text>
  //     </View>
  //   );
  // }

  return (
    <>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" />
        {/* <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )} */}
        <View style={{flex: 1}}>
          <View style={{flex: 1}}>
            {/* <Text style={styles.sectionTitle}>
                Welcome to React Native App!
              </Text> */}
            <Stack.Navigator
              initialRouteName="Landing"
              screenOptions={{headerShown: false}}>
              <Stack.Screen
                name="Landing"
                component={Landing}
                options={{title: 'Pizza Rate App'}}
              />
              <Stack.Screen name="Main" component={MainPage} />
              <Stack.Screen name="Signup" component={SignUp} />
              {/* <Landing /> */}
            </Stack.Navigator>
            {/* <Picker
                selectedValue={selectedValue}
                onValueChange={(itemValue, itemIndex) =>
                  selectValue(itemValue)
                }>
                <Picker.Item label="Option One" value="Option One" />
                <Picker.Item label="Option Two" value="Option Two" />
                <Picker.Item label="Option Three" value="Option Three" />
              </Picker> */}
          </View>
          {/* <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                This is a newly edited screen all!
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks /> */}
        </View>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
