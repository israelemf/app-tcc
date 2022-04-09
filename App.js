import React, { Component } from 'react';
import Home from './src/pages/home';
import Form from './src/pages/form';
import Login from './src/pages/login';
import Gender from './src/pages/firstAccess/gender';
import Weight from './src/pages/firstAccess/weight';
import Height from './src/pages/firstAccess/height';
import Birth from './src/pages/firstAccess/birth';
import Object from './src/pages/firstAccess/object';
import Feed from './src/pages/mainPage/feed';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyTabs from './src/components/bottomNavigator';

class App extends Component {

  render() {

    const Stack = createNativeStackNavigator();

    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" component={Home}
            options={{
              title: '',
              headerShown: false
            }}
          />

          <Stack.Screen name="Login" component={Login}
            options={{
              title: '',
              headerStyle: { backgroundColor: '#000000' },
              headerTintColor: 'white'

            }}
          />

          <Stack.Screen name="Form" component={Form}
            options={{
              title: '',
              headerStyle: { backgroundColor: '#1C1C1C' },
              headerTintColor: 'white'
            }}
          />

          <Stack.Screen name="Gender" component={Gender}
            options={{
              title: '',
              headerStyle: { backgroundColor: '#1C1C1C' },
              headerTintColor: 'white'
            }}
          />

          <Stack.Screen name="Weight" component={Weight}
            options={{
              title: '',
              headerStyle: { backgroundColor: '#1C1C1C' },
              headerTintColor: 'white'
            }}
          />

          <Stack.Screen name="Height" component={Height}
            options={{
              title: '',
              headerStyle: { backgroundColor: '#1C1C1C' },
              headerTintColor: 'white'
            }}
          />

          <Stack.Screen name="Birth" component={Birth}
            options={{
              title: '',
              headerStyle: { backgroundColor: '#1C1C1C' },
              headerTintColor: 'white'
            }}
          />

          <Stack.Screen name="Object" component={Object}
            options={{
              title: '',
              headerStyle: { backgroundColor: '#1C1C1C' },
              headerTintColor: 'white'
            }}
          />

          <Stack.Screen name="MyTabs" component={MyTabs}
            options={{
              headerShown: false
            }}
          />

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;



