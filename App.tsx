import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
//import {pokemon} from './src/data/drata.ts';
import PokemonCard from './src/components/PokemonCard/PokemonCard';
import MainScreen from './src/screens/MainScreen/MainScreen.tsx';
import {ThemeProvider} from './src/providers/ThemeProvider/ThemeContext.tsx';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {

  return (
      <ThemeProvider>
          <MainScreen />
      </ThemeProvider>
  );
}

export default App;
