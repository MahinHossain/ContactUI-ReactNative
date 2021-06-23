import React from 'react';
import {View, StyleSheet} from 'react-native';
// import {LinearGradient} from 'expo-linear-gradient';
import LinearGradient from 'react-native-linear-gradient';

import {
  Collapse,
  CollapseHeader,
  CollapseBody,
  AccordionList,
} from 'accordion-collapse-react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Left,
  Right,
  Icon,
  Badge,
  Button,
  List,
  ListItem,
  Thumbnail,
} from 'native-base';
import Accordion from './component/AccordionTest';
import ModalT from './component/ModalT';
import 'react-native-gesture-handler';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import {NavigationContainer} from '@react-navigation/native';
export default function App() {
  const Tab = createMaterialBottomTabNavigator();

  return (
    // <NavigationContainer>
    //   <Tab.Navigator
    //     inactiveColor="gray"
    //     activeColor="black"
    //     barStyle={{
    //       backgroundColor: '#EDF2F1',
    //     }}>
    //     <Tab.Screen
    //       style={{fontSize: 20}}
    //       name="Contacts"
    //       component={Accordion}
    //       // options={{tabBarIcon: 'conmmmtact'}}
    //     />
    //     <Tab.Screen
    //       name="Recent"
    //       component={ModalT}
    //       // options={{tabBarBadge: 3, tabBarIcon: 'menu'}}
    //     />
    //     <Tab.Screen
    //       name="Test"
    //       component={Accordion}
    //       // options={{tabBarBadge: 3, tabBarIcon: 'arrow'}}
    //     />
    //   </Tab.Navigator>
    // </NavigationContainer>

    <Accordion />
  );
}
