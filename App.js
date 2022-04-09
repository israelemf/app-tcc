import React, { Component } from 'react';
import Home from './src/pages/home';
import Form from './src/pages/form';
import Login from './src/pages/login';
import Gender from './src/pages/firstAccess/gender';
import Weight from './src/pages/firstAccess/weight';
import Height from './src/pages/firstAccess/height';
import Birth from './src/pages/firstAccess/birth';
import Target from './src/pages/firstAccess/target';
import Activity from './src/pages/firstAccess/activity';
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
              headerStyle: { backgroundColor: '#1C1C1C' },
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

          <Stack.Screen name="Target" component={Target}
            options={{
              title: '',
              headerStyle: { backgroundColor: '#1C1C1C' },
              headerTintColor: 'white'
            }}
          />

          <Stack.Screen name="Activity" component={Activity}
            options={{
              title: '',
              headerStyle: { backgroundColor: '#1C1C1C' },
              headerTintColor: 'white'
            }}
          />

          <Stack.Screen name="MyTabs" component={MyTabs}
            options={{
              title: '',
              headerStyle: { backgroundColor: '#1C1C1C' },
              headerTintColor: 'white',
            }}
          />

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;



