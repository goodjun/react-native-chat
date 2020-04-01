import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Keyboard,
} from 'react-native';

export default class Login extends React.Component {
  _onLoginPress() {
    Keyboard.dismiss();
  }

  render() {
    return (
      <KeyboardAvoidingView style={{flex: 1}}>
        <View style={styles.container}>
          <Text style={styles.logo}>Chat</Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              underlineColorAndroid="#3598DB"
              selectionColor="#3598DB"
              placeholder="Enter mobile number"
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              secureTextEntry
              underlineColorAndroid="#3598DB"
              selectionColor="#3598DB"
              style={styles.inputText}
              placeholder="Enter password"
            />
          </View>
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={this._onLoginPress}>
            <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.signup}>Signup</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#3598DB',
    marginBottom: 40,
  },
  inputView: {
    width: '80%',
    height: 50,
    marginBottom: 10,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: '#000',
    textDecorationLine: 'underline',
  },
  signup: {
    color: '#333333',
    fontSize: 12,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#3598DB',
    borderRadius: 5,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
  },
});
