import React from 'react';
import {Pressable, View, Text, FlatList, Image, StyleSheet, SafeAreaView} from 'react-native';
import { pokemon } from '../../data/data';
import { useTheme, ColorsData, ThemeToggleButton } from '../../providers/ThemeProvider/ThemeContext';

//create the component
const MainScreen = () => {
  const { colors } = useTheme();

  const DATA = pokemon;
  const styles = getStyles(colors);

  const renderItem = ({item}: any) => {
    const colorStyles = getPokemonStyles(item.color);
    return (
      <Pressable onPress={
        () => {
          console.log(item.name);
          //TODO: set up navigation
        }
      }
                 //@ts-ignore
                 style={colorStyles.pokemonLineItemContainer}>
        {/*@ts-ignore*/}
        <Image source={item.localImageUrl} style={colorStyles.image} />
        {/*@ts-ignore*/}
        <Text style={colorStyles.text}>{item.name}</Text>
      </Pressable>
    );
  };

  return (
    <SafeAreaView  style={styles.container}>
      <ThemeToggleButton />
      <FlatList data={DATA} renderItem={renderItem} />
    </SafeAreaView>
  );
};

//export the component
export default MainScreen;

const getStyles = (themeColors: ColorsData) => StyleSheet.create({
  container: {
    backgroundColor: themeColors.background,
    color: themeColors.text,
  },
});

//create the getStyles function
const getPokemonStyles = (pokemonColor: string) => StyleSheet.create({
    pokemonLineItemContainer: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: pokemonColor,
      marginVertical: 16,
      marginHorizontal: 16,
      //drop shadow
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      borderRadius: 20,
      padding: 15,
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'black',
      marginRight: 'auto',
      marginLeft: 75,
    },
    image: {
      width: 75,
      height: 75,
      marginRight: 20,
      backgroundColor: 'white',
      borderStyle: 'solid',
      borderColor: pokemonColor,
      borderBottomRightRadius: 20,
      borderWidth: 3,
      zIndex: 1,
      position: 'absolute',
    },
});
