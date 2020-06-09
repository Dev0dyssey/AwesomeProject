import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {Text, View} from 'react-native';
import {Button, Input} from 'react-native-elements';

const SignUp = props => (
  <View>
    <View
      style={{
        alignItems: 'center',
        paddingTop: '5%',
      }}>
      <View style={{width: '75%'}}>
        <Input
          label="Create username"
          placeholder="Username"
          leftIcon={{type: 'material', name: 'person'}}
        />
        <Input
          label="Create a password"
          placeholder="Password"
          leftIcon={{type: 'material', name: 'lock'}}
        />
      </View>
      <View
        style={{
          width: '75%',
          marginBottom: '10%',
          display: 'flex',
          flexDirection: 'row',
        }}>
        <View style={{flex: 1, marginRight: 2}}>
          <Icon.Button name="facebook" backgroundColor="#3b5998">
            <Text style={{color: 'white', textAlign: 'center'}}>Facebook</Text>
          </Icon.Button>
        </View>
        <View style={{flex: 1}}>
          <Icon.Button name="google">Google</Icon.Button>
        </View>
      </View>
      <Button title="Create Account" buttonStyle={{}} />
    </View>
  </View>
);

export default SignUp;
