import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';

// const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);
const LoginPage = ({ navigation }) => (

  <View style={styles.container}>
    <TextInput
      style={styles.input}
      placeholder="U S E R N A M E"
    />
    <TextInput
      style={styles.input}
      placeholder="P A S S W O R D"
    />
    <TouchableOpacity
      style={styles.loginScreenButton}
      activeOpacity={0.70}
      onPress={() => navigation.navigate('MapView')}
    >
      <Text style={styles.loginText}>L O G I N</Text>
    </TouchableOpacity>
  </View>

);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginScreenButton: {
    width: screenWidth - 75,
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: '#1E6738',
    borderRadius: 5,
  },
  loginText: {
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10
  },
  input: {
    width: screenWidth - 75,
    fontSize: 16,
    height: 45,
    paddingLeft: 20,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    margin: 10,
  }
});

export default LoginPage;
