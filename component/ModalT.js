import React, {Component, useEffect, useRef, useState} from 'react';
import * as Animatable from 'react-native-animatable';
import {Text, View, TouchableWithoutFeedback, ScrollView} from 'react-native';
import SectionListContacts from 'react-native-sectionlist-contacts';
import axios from 'axios';

function ExampleView() {
  let sectionList = useRef([]);
  const [data, setdata] = useState([]);
  const handleViewRef = useRef({});
  const bounce = () => {};
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        setdata(res.data);
      })
      .catch(err => console.log(`err`, err));
  }, []);

  const _renderHeader = params => {
    console.log(`{params.key}`, params.key);
    return (
      <View style={{backgroundColor: ''}}>
        <Text>{params.key}</Text>
      </View>
    );
  };
  const _renderItem = (item, index, section) => {
    // console.log('---custom-renderItem--', item, index, section);
    return (
      <View style={{backgroundColor: ''}}>
        <Text>{item.name}</Text>
      </View>
    );
  };
  return (
    <View style={{height: 700}}>
      <SectionListContacts
        style={{backgroundColor: ''}}
        // ref={s => (sectionList = s)}
        sectionListData={data}
        // sectionHeight={150}
        // showsVerticalScrollIndicator={true}
        // initialNumToRender={data.length}
        renderHeader={_renderHeader}
        renderItem={_renderItem}
        // otherAlphabet="#"
      />
    </View>
  );
}

export default ExampleView;
