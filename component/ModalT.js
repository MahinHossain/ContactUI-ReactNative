import React, {Component} from 'react';
import * as Animatable from 'react-native-animatable';
import {Text, View, TouchableWithoutFeedback, ScrollView} from 'react-native';
import {useRef} from 'react';
import {useEffect} from 'react';
function ExampleView() {
  const handleViewRef = useRef({});
  const bounce = () => {};

  return (
    <TouchableWithoutFeedback>
      <View
        // ref={handleViewRef}
        style={{alignContent: 'center', marginTop: 50}}>
        <Animatable.Text
          animation="bounce"
          duration={5000}
          easing="ease-in-out-back"
          style={{backgroundColor: 'coral'}}>
          Bounce me!
        </Animatable.Text>
        {/* <Text style={{fontFamily: 'normal'}}> normal </Text>
        <Text style={{fontFamily: 'notoserif'}}> notoserif </Text>
        <Text style={{fontFamily: 'sans-serif'}}> sans-serif </Text>
        <Text style={{fontFamily: 'sans-serif-light'}}> sans-serif-light </Text>
        <Text style={{fontFamily: 'sans-serif-thin'}}> sans-serif-thin </Text>
        <Text style={{fontFamily: 'sans-serif-condensed'}}>
          sans-serif-condensed
        </Text>
        <Text style={{fontFamily: 'sans-serif-medium'}}>sans-serif-medium</Text>
        <Text style={{fontFamily: 'serif'}}> serif </Text>
        <Text style={{fontFamily: 'Roboto'}}> Roboto </Text>
        <Text style={{fontFamily: 'monospace'}}> monospace </Text> */}
        <ScrollView>
          <Text style={{fontFamily: 'normal'}}> normal </Text>
          <Text style={{fontFamily: 'notoserif'}}> Hello </Text>
          <Text style={{fontFamily: 'sans-serif'}}> Hello </Text>
          <Text style={{fontFamily: 'sans-serif-light'}}> Helloht </Text>
          <Text style={{fontFamily: 'sans-serif-thin'}}> Hello </Text>
          <Text style={{fontFamily: 'sans-serif-condensed'}}> Hello</Text>
          <Text style={{fontFamily: 'sans-serif-medium'}}> sHello </Text>
          <Text style={{fontFamily: 'serif'}}> Hello </Text>
          <Text style={{fontFamily: 'Roboto'}}> Hello </Text>
          <Text style={{fontFamily: 'monospace'}}> Hello </Text>
          <Text style={{fontFamily: 'normal'}}> normal </Text>
          <Text style={{fontFamily: 'notoserif'}}> Hello </Text>
          <Text style={{fontFamily: 'sans-serif'}}> Hello </Text>
          <Text style={{fontFamily: 'sans-serif-light'}}> Helloht </Text>
          <Text style={{fontFamily: 'sans-serif-thin'}}> Hello </Text>
          <Text style={{fontFamily: 'sans-serif-condensed'}}> Hello</Text>
          <Text style={{fontFamily: 'sans-serif-medium'}}> sHello </Text>
          <Text style={{fontFamily: 'serif'}}> Hello </Text>
          <Text style={{fontFamily: 'Roboto'}}> Hello </Text>
          <Text style={{fontFamily: 'monospace'}}> Hello </Text>
          <Text style={{fontFamily: 'normal'}}> normal </Text>
          <Text style={{fontFamily: 'notoserif'}}> Hello </Text>
          <Text style={{fontFamily: 'sans-serif'}}> Hello </Text>
          <Text style={{fontFamily: 'sans-serif-light'}}> Helloht </Text>
          <Text style={{fontFamily: 'sans-serif-thin'}}> Hello </Text>
          <Text style={{fontFamily: 'sans-serif-condensed'}}> Hello</Text>
          <Text style={{fontFamily: 'sans-serif-medium'}}> sHello </Text>
          <Text style={{fontFamily: 'serif'}}> Hello </Text>
          <Text style={{fontFamily: 'Roboto'}}> Hello </Text>
          <Text style={{fontFamily: 'monospace'}}> Hello </Text>
          <Text style={{fontFamily: 'normal'}}> normal </Text>
          <Text style={{fontFamily: 'notoserif'}}> Hello </Text>
          <Text style={{fontFamily: 'sans-serif'}}> Hello </Text>
          <Text style={{fontFamily: 'sans-serif-light'}}> Helloht </Text>
          <Text style={{fontFamily: 'sans-serif-thin'}}> Hello </Text>
          <Text style={{fontFamily: 'sans-serif-condensed'}}> Hello</Text>
          <Text style={{fontFamily: 'sans-serif-medium'}}> sHello </Text>
          <Text style={{fontFamily: 'serif'}}> Hello </Text>
          <Text style={{fontFamily: 'Roboto'}}> Hello </Text>
          <Text style={{fontFamily: 'monospace'}}> Hello </Text>
          <Text style={{fontFamily: 'normal'}}> normal </Text>
          <Text style={{fontFamily: 'notoserif'}}> Hello </Text>
          <Text style={{fontFamily: 'sans-serif'}}> Hello </Text>
          <Text style={{fontFamily: 'sans-serif-light'}}> Helloht </Text>
          <Text style={{fontFamily: 'sans-serif-thin'}}> Hello </Text>
          <Text style={{fontFamily: 'sans-serif-condensed'}}> Hello</Text>
          <Text style={{fontFamily: 'sans-serif-medium'}}> sHello </Text>
          <Text style={{fontFamily: 'serif'}}> Hello </Text>
          <Text style={{fontFamily: 'Roboto'}}> Hello </Text>
          <Text style={{fontFamily: 'monospace'}}> Hello </Text>
          <Text style={{fontFamily: 'normal'}}> normal </Text>
          <Text style={{fontFamily: 'notoserif'}}> Hello </Text>
          <Text style={{fontFamily: 'sans-serif'}}> Hello </Text>
          <Text style={{fontFamily: 'sans-serif-light'}}> Helloht </Text>
          <Text style={{fontFamily: 'sans-serif-thin'}}> Hello </Text>
          <Text style={{fontFamily: 'sans-serif-condensed'}}> Hello</Text>
          <Text style={{fontFamily: 'sans-serif-medium'}}> sHello </Text>
          <Text style={{fontFamily: 'serif'}}> Hello </Text>
          <Text style={{fontFamily: 'Roboto'}}> Hello </Text>
          <Text style={{fontFamily: 'monospace'}}> Hello </Text>
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default ExampleView;
