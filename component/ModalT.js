import React, {Component} from 'react';
import * as Animatable from 'react-native-animatable';
import {Text, View, TouchableWithoutFeedback} from 'react-native';
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
      </View>
    </TouchableWithoutFeedback>
  );
}

export default ExampleView;
