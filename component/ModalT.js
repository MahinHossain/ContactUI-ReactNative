import React, {Component, useEffect, useRef, useState} from 'react';
import * as Animatable from 'react-native-animatable';
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
  Accordion,
  View,
  Item,
  FooterTab,
  Footer,
} from 'native-base';

import {Data} from './Data';
import {
  TouchableWithoutFeedback,
  ScrollView,
  StyleSheet,
  SectionList,
  TouchableOpacity,
} from 'react-native';
import {Linking} from 'react-native';

import {getColorByLetter} from './ColorGenerator';
function ExampleView(props) {
  const [iscontactSaved, setcontactSaved] = useState(false);

  //for section list
  let getdata = () => {
    let contactsArray = [];
    let aCode = 'A'.charCodeAt(0);
    for (let i = 0; i < 26; i++) {
      let currchar = String.fromCharCode(aCode + i);
      let obj = {
        title: currchar,
      };
      let currntContacts = Data.filter(item => {
        return item.name[0].toUpperCase() === currchar;
      });
      if (currntContacts.length > 0) {
        currntContacts.sort((a, b) => a.name.localeCompare(b.name));
        obj.data = currntContacts;
        contactsArray.push(obj);
      }
    }

    return contactsArray;
  };

  const _renderHeader = item => {
    let colo = getColorByLetter(item.username[0]);

    return (
      <View>
        <List style={styles.headMain}>
          <View style={[styles.headerIcon, {backgroundColor: colo}]}>
            <Text>{item.username[0]}</Text>
          </View>

          <View style={{marginLeft: 9}}>
            <Text style={(styles.headTitle, {})}>{item.name}</Text>

            {iscontactSaved && (
              <View
                style={{display: 'flex', flexDirection: 'row', marginTop: 0}}>
                <Icon
                  style={{color: 'green', fontSize: 14, marginTop: 5}}
                  type="FontAwesome"
                  name="phone"
                />

                <Text
                  style={{
                    color: 'green',
                    fontSize: 14,
                    marginLeft: 5,
                  }}>
                  Unsaved
                </Text>
              </View>
            )}
          </View>

          <Right>
            <Text note>3:41pm</Text>
          </Right>
        </List>
      </View>

      //
    );
  };

  const rc_test = item => {
    return (
      <Animatable.View
        style={{
          marginLeft: 20,
          marginTop: 0,
          padding: 10,
        }}
        animation="fadeInDown"
        duration={800}>
        <View style={styles.contactDropdown}>
          <View style={styles.biWhite}>
            <Icon
              type="FontAwesome"
              name="phone"
              style={{color: 'green'}}
              onPress={() => Linking.openURL(`tel:${item.phone}`)}
            />
          </View>
          <View style={styles.biWhite}>
            <Icon
              type="FontAwesome5"
              name="comment-alt"
              style={{color: '#7DCAF8'}}
              onPress={() => Linking.openURL(`sms:${item.phone}`)}
            />
          </View>
          <View rounded style={styles.biWhite} onPress={() => alert('blok')}>
            <Icon type="FontAwesome5" name="video" style={{color: 'green'}} />
          </View>
          <View rounded style={styles.biWhite}>
            <Icon
              type="FontAwesome5"
              name="info-circle"
              style={{color: 'gray'}}
              onPress={() => props.navigation.navigate('contactdetails')}
            />
          </View>
        </View>
      </Animatable.View>
    );
  };

  const accorF = item => {
    console.log(`item.section.data`, item.section.data);
    return (
      <View>
        <Content>
          <Accordion
            style={{backgroundColor: '', padding: 10}}
            dataArray={item.section.data}
            expanded={[]}
            animation={true}
            renderHeader={_renderHeader}
            renderContent={rc_test}
          />
        </Content>
      </View>
    );
  };
  return (
    <Container>
      <ScrollView>
        <View style={{height: '100%', backgroundColor: '#E8F0F0'}}>
          <SectionList
            style={{
              backgroundColor: 'white',
              borderRadius: 20,

              marginTop: 20,
            }}
            sections={getdata()}
            keyExtractor={(item, index) => item + index}
            renderSectionHeader={({section, index}) => (
              <View style={{backgroundColor: '', padding: 10}}>
                <Text style={{backgroundColor: '#E8F3F3'}}>
                  {section.title}
                </Text>
              </View>
            )}
            renderItem={accorF}
          />
        </View>
      </ScrollView>
      <Footer style={{backgroundColor: '#f0f0f0'}}>
        <FooterTab style={styles.footartab}>
          <Text
            onPress={() => Linking.openURL(`tel:`)}
            style={styles.footerText}>
            Keypad
          </Text>

          <Text style={styles.footerText} onPress={() => alert('recent')}>
            Recent
          </Text>

          <Text style={styles.footerText} onPress={() => alert('recent')}>
            Contacts
          </Text>
        </FooterTab>
      </Footer>
    </Container>
  );
}

export default ExampleView;
const styles = StyleSheet.create({
  biWhite: {
    backgroundColor: 'white',
  },
  headTitle: {
    marginRight: 100,
    justifyContent: 'flex-start',
    padding: 5,

    fontFamily: 'sans-serif',
    fontSize: 19,

    marginTop: 3,
  },
  headMain: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    padding: 3,

    fontFamily: 'sans-serif',
    marginLeft: 5,
    marginTop: 5,

    borderBottomWidth: 0.2,
  },
  addtoContact: {
    textAlign: 'center',
    fontSize: 17,
    color: 'green',
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
  },
  contactDropdown: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 50,
    marginRight: 50,
    marginTop: 10,
    fontFamily: 'sans-serif',
  },

  clrWhite: {color: 'white'},
  accrodion: {
    padding: 15,
    backgroundColor: 'white',
    marginTop: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  footartab: {
    backgroundColor: '#f0f0f0',
    // backgroundColor: 'white',
    justifyContent: 'space-between',
    textAlign: 'center',
    padding: 8,
    marginLeft: 40,
    marginRight: 40,
  },
  footerText: {fontWeight: 'bold', color: 'green', fontSize: 18},
  headerIcon: {
    width: 40,
    height: 40,
    backgroundColor: 'skyblue',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  //
});
