import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, StatusBar } from 'react-native';

const image = { uri: "https://images.pexels.com/photos/762579/pexels-photo-762579.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" };

class Home extends Component {

  render() {
    return (

      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.formContainer} >
          <StatusBar translucent backgroundColor='transparent' />

          <View style={styles.brandContainer}>
            <Text style={styles.logo} >RotinadaFit</Text>
            <Text style={styles.textWelcome} >Praticidade na sua rotina fit na palma da sua mão!</Text>
          </View>

          <TouchableOpacity style={styles.btnLogin} onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={styles.text}>Entrar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnRegister} onPress={() => this.props.navigation.navigate('Form')}>
            <Text style={styles.text}>Cadastro com Email</Text>
          </TouchableOpacity>

        </View>
      </ImageBackground>

    );
  }
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 50,
  },


  brandContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 330,
    marginTop: 400,
  },

  logo: {
    fontSize: 50,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: "white",
  },

  textWelcome: {
    fontSize: 17,
    color: "white",
    textAlign: 'center',
    margin: 16
  },

  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: "white",
  },

  btnLogin: {

    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    height: 60,
    width: 330,
    borderRadius: 8,
    elevation: 10,
    backgroundColor: '#4169E1',
    margin: 5

  },

  btnRegister: {

    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    height: 60,
    width: 330,
    borderRadius: 8,
    borderStyle: 'solid',
    borderColor: '#808080',
    borderWidth: 0.3,
    backgroundColor: 'transparent',
    margin: 5,


  },

  image: {
    flex: 1,
    justifyContent: "center",
    width: '100%',
    height: '100%',

  }
});

export default Home;