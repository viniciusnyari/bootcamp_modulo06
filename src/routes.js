import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import User from './pages/User';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          options={{
            title: 'Usuários',
            headerTitleStyle: {
              alignSelf: 'center',
            },
            headerStyle: {
              backgroundColor: '#7159c1',
            },
            headerTintColor: '#fff',
          }}
          component={Main}
        />
        <Stack.Screen
          name="User"
          options={{
            title: 'Bla',
            headerTitleStyle: {
              alignSelf: 'center',
            },
          }}
          component={User}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
