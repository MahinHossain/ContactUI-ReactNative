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

export default function App() {
  return (
    <Accordion />
    // <ModalT />

    // <View
    //   style={{
    //     alignContent: 'center',
    //     marginTop: 30,
    //     // backgroundColor: '#6c5554',
    //     height: 500,
    //   }}>
    //   <Collapse>
    //     <CollapseHeader>
    //       <List>
    //         <Text style={{fontSize: 22, padding: 20, color: 'black'}}>
    //           Simon Mignolet
    //         </Text>
    //       </List>
    //     </CollapseHeader>
    //     <CollapseBody style={{backgroundColor: '#1c5554'}}>
    //       <Text style={{textAlign: 'center', fontSize: 20, color: 'white'}}>
    //         mobile 01433212366
    //       </Text>

    //       <View
    //         style={{
    //           display: 'flex',
    //           flexDirection: 'row',
    //           justifyContent: 'space-between',
    //           marginLeft: 50,
    //           marginRight: 50,
    //           padding: 10,
    //         }}>
    //         <Button success rounded small success onPress={() => alert('call')}>
    //           <Text>call</Text>
    //           {/* <Icon name="arrow-back" /> */}
    //         </Button>
    //         <Button success rounded small onPress={() => alert('sms')}>
    //           <Text>sms</Text>
    //         </Button>
    //         <Button success rounded small danger onPress={() => alert('blok')}>
    //           <Text>block</Text>
    //         </Button>
    //       </View>
    //     </CollapseBody>
    //   </Collapse>
    //   {/* othwe */}
    //   <List>
    //     <ListItem avatar>
    //       <Left>
    //         <Thumbnail
    //           source={{
    //             uri: 'https://s29843.pcdn.co/blog/wp-content/uploads/sites/2/2019/06/YouTube-Thumbnail-Sizes.png',
    //           }}
    //         />
    //       </Left>
    //       <Body>
    //         <Collapse>
    //           <CollapseHeader>
    //             <Text style={{fontSize: 22}}>Kumar Pratik</Text>
    //           </CollapseHeader>
    //           <CollapseBody style={{backgroundColor: ''}}>
    //             <Text
    //               style={{textAlign: 'center', fontSize: 20, color: 'white'}}>
    //               mobile 01433212366
    //             </Text>

    //             <View
    //               style={{
    //                 display: 'flex',
    //                 flexDirection: 'row',
    //                 justifyContent: 'space-between',
    //                 marginLeft: 50,
    //                 marginRight: 50,
    //                 padding: 10,
    //               }}>
    //               <Button
    //                 success
    //                 rounded
    //                 small
    //                 success
    //                 onPress={() => alert('call')}>
    //                 <Text>call</Text>
    //                 {/* <Icon name="arrow-back" /> */}
    //               </Button>
    //               <Button success rounded small onPress={() => alert('sms')}>
    //                 <Text>sms</Text>
    //               </Button>
    //               <Button
    //                 success
    //                 rounded
    //                 small
    //                 danger
    //                 onPress={() => alert('blok')}>
    //                 <Text>block</Text>
    //               </Button>
    //             </View>
    //           </CollapseBody>
    //         </Collapse>
    //       </Body>
    //     </ListItem>
    //   </List>
    //   {/* two */}
    //   <List>
    //     <ListItem avatar>
    //       <Left>
    //         <Thumbnail
    //           source={{
    //             uri: 'https://s29843.pcdn.co/blog/wp-content/uploads/sites/2/2019/06/YouTube-Thumbnail-Sizes.png',
    //           }}
    //         />
    //       </Left>
    //       <Body>
    //         <Collapse>
    //           <CollapseHeader>
    //             <Text style={{fontSize: 22}}>Kumar Pratik1</Text>
    //           </CollapseHeader>
    //           <CollapseBody style={{backgroundColor: '', margin: 10}}>
    //             <Text
    //               style={{textAlign: 'center', fontSize: 20, color: 'white'}}>
    //               mobile 01433212366
    //             </Text>

    //             <View
    //               style={{
    //                 display: 'flex',
    //                 flexDirection: 'row',
    //                 justifyContent: 'space-between',
    //                 marginLeft: 30,
    //                 marginRight: 30,
    //                 margin: 0,
    //               }}>
    //               <Button
    //                 success
    //                 rounded
    //                 small
    //                 success
    //                 onPress={() => alert('call')}>
    //                 <Text>call</Text>
    //                 {/* <Icon name="arrow-back" /> */}
    //               </Button>
    //               <Button success rounded small onPress={() => alert('sms')}>
    //                 <Text>sms</Text>
    //               </Button>
    //               <Button
    //                 success
    //                 rounded
    //                 small
    //                 danger
    //                 onPress={() => alert('blok')}>
    //                 <Text>block</Text>
    //               </Button>
    //             </View>
    //           </CollapseBody>
    //         </Collapse>
    //       </Body>
    //     </ListItem>
    //   </List>
    // </View>
  );
}
var styles = StyleSheet.create({
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
// let styles = StyleSheet.create({
//   backgroundGradient: 'vertical',
//   backgroundGradientTop: '#333333',
//   backgroundGradientBottom: '#666666',
// });
