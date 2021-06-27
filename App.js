import React from 'react';

import Accordion from './component/AccordionTest';
import ModalT from './component/ModalT';
import Contactsetails from './component/ContactsDetails';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import 'react-native-gesture-handler';
export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="modalscreen" component={ModalT} />
        <Stack.Screen name="contactdetails" component={Contactsetails} />
      </Stack.Navigator>
    </NavigationContainer>

    // <ModalT />
  );
}
