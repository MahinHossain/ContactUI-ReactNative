import React from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
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

export default function App() {
  return <Accordion />;
}
