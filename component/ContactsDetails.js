import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  FlatList,
  ActivityIndicator,
  Linking,
} from 'react-native';
import {Icon} from 'native-base';

// import { Container } from './styles';

const Contactsetails = () => {
  const img = {
    uri: 'https://static.thenounproject.com/png/58663-200.png',
  };
  const [contactInfo, setContactInfo] = useState(null);
  return (
    <View style={styles.container}>
      <ImageBackground style={{height: 300}} source={img}>
        <Text style={styles.mainText}>Mahin Hossain</Text>
      </ImageBackground>

      <View style={{flex: 1, marginTop: 20}}>
        <Text style={{fontSize: 20}}>098765432</Text>
        <Icon
          style={{color: 'green', fontSize: 14, marginTop: 5}}
          type="FontAwesome"
          name="phone"
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height / 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText: {
    position: 'absolute',
    bottom: 5,
    left: 5,
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  phonenNumberContainer: {
    flex: 1,
    marginHorizontal: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
    elevation: 5,
    paddingVertical: 20,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default Contactsetails;
