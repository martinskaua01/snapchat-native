import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


function TelaA({ navigation }) {
  return (
    <View style={styles.menu}>
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.navigate('TelaA')}
      >
        <Text style={styles.buttonText}>Tela A</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.navigate('TelaB')}
      >
        <Text style={styles.buttonText}>Tela B</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.navigate('TelaC')}
      >
        <Text style={styles.buttonText}>Tela C</Text>
      </TouchableOpacity>
    </View>
  );
}

function TelaB({ navigation }) {
  return (
    <View style={styles.menu}>
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.navigate('TelaA')}
      >
        <Text style={styles.buttonText}>Tela A</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.navigate('TelaB')}
      >
        <Text style={styles.buttonText}>Tela B</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.navigate('TelaC')}
      >
        <Text style={styles.buttonText}>Tela C</Text>
      </TouchableOpacity>
    </View>
  );
}

function TelaC({ navigation }) {
  return (
    <View style={styles.menu}>
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.navigate('TelaA')}
      >
        <Text style={styles.buttonText}>Tela A</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.navigate('TelaB')}
      >
        <Text style={styles.buttonText}>Tela B</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.navigate('TelaC')}
      >
        <Text style={styles.buttonText}>Tela C</Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TelaA" component={TelaA} />
        <Stack.Screen name="TelaB" component={TelaB} />
        <Stack.Screen name="TelaC" component={TelaC} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

  menu: {
    flexDirection: 'row',
    paddingVertical: 1,
    paddingHorizontal: 4,
    flex: 1,
    backgroundColor: 'gray',
    marginTop: 630,
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
  },
  menuButton: {
    flex: 1,
    alignSelf: 'center',
    paddingVertical: 12,
    paddingHorizontal: 4,
    borderRadius: 10,
    marginBottom: 1,
    marginLeft: 8, 
    marginRight: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
