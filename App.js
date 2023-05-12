import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card } from 'react-native-paper';


import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



function Tela1({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={('https://seeklogo.com/images/S/snapchat-logo-2D9C3E7ADA-seeklogo.com.png')}
          style={styles.image}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button1}
          onPress={() => navigation.navigate('Entrar')}
        >
          <Text style={styles.buttonText1}>Fazer login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.buttonText2}>Criar conta</Text>
        </TouchableOpacity>
      </View>
    </View>

  );
}


function Tela2({ navigation }) {
  return (
      <View style={styles.container2}>
        <Text style={styles.title}>Fazer login</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>NOME DE USUÁRIO OU E-MAIL</Text>
          <TextInput
            style={styles.input}
            placeholder="E-mail ou usuário"
          />
          <TouchableOpacity>         
          <Text style={styles.text2}>Usar numero de telefone</Text>
        </TouchableOpacity>
          <Text style={styles.label}>SENHA</Text>
          <TextInput
            style={styles.input}
            placeholder="Senha"
            secureTextEntry
          />
        </View>
        <View style={styles.buttonContainer2}>
          <TouchableOpacity style={styles.button3}>
            <Text style={styles.buttonText3}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
}


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Entrar e registrar" component={Tela1} />
        <Stack.Screen name="Entrar" component={Tela2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ffed00',
    padding: 8,
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 350,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button1: {
    backgroundColor: 'white',
    padding: 10,
    margin: 8,
    borderRadius: 15,
    width: 110,
  },
  buttonText1: {
    color: 'black',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  button2: {
    backgroundColor: '#0eacfe',
    padding: 10,
    margin: 8,
    borderRadius: 15,
    width: 110,
  },
  buttonText2: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
  },
   container2: {
      flex: 1,
      justifyContent: 'center',
      paddingTop: Constants.statusBarHeight,
      backgroundColor: 'white',
      padding: 8,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      color: 'black',
      marginBottom: 20,
    },

    inputContainer: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'left',
      marginBottom: 20,
    },
    label: {
      fontSize: 16,
      color: '#0eacfe',
      paddingLeft: 10,
      fontWeight: 'bold',
    },
    input: {
      padding: 10,
      margin: 8,
      marginBottom: 0,
      borderRadius: 5,
      width: 300,
      color: '#87888c'
    },
    text2: {
      fontSize: 13,
      marginTop: 10,
      marginBottom: 10,
      marginLeft: 10,
      textAlign: 'left',
      color: '#0eacfe',
    },
    buttonContainer2: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    button3: {
      backgroundColor: 'gray',
      padding: 10,
      margin: 8,
      borderRadius: 5,
      width: 300,
    },
    buttonText3: {
      color: '#fff',
      fontSize: 15,
      textAlign: 'center',
    },
});
