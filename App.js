import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Header } from 'react-native-elements';
import * as Speech from 'expo-speech';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      chunks: [],
    };
  }
  speak = () => {
    var say = this.state.text;
    Speech.speak(say);
  };
  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={''}
          centerComponent={{
            text: 'Text to Speech converter',
            style: { color: '#fff', fontSize: 17 },
          }}
        />
      
        <Image style={{ width: 150, height: 150, marginLeft: 120, marginTop: 15}}  source={require('./SP.jpeg')}></Image>
        <TextInput
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({ text: text });
          
          }}
          value={this.state.text}
          placeholder={"Enter Word Here"}
        />
        <TouchableOpacity style={styles.goButton} onPress={this.speak}>
          <Text style={styles.buttonText }>Click here to hear the sound</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  inputBox: {
   border:'solid',
    width: '80%',
    height: 30,
    alignSelf: 'center',
    textAlign: 'center',
  },
  goButton: {
    border: 'solid',
    width: '60%',
    borderRadius: 10,
    height: '15%',
    alignSelf: 'center',
    marginTop: 30,
    backgroundColor: '#6abd',
    textAlign: 'center',
  },
  buttonText: {
   fontSize: 20,
    fontWeight: 'bold',
  },
  displayText: {
     fontSize: 30,
    fontFamily: 'halvetica',
    marginBottom: 15,
    marginTop: -40,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: '#e67575',
    border: 'transparent',
    borderRadius: 10,
    boxShadow: '0 0 10px 0 rgba(0,0,0,.4)',
    height: 40,
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 18,
    paddingTop: 3,
  },
});
