import React from 'react';
import {Pressable, View, Text, FlatList, Image, StyleSheet} from 'react-native';
import { pokemon } from '../../data/data';

//create the component
const MainScreen = ({ navigation }: any) => {
  const DATA = pokemon;

  const renderItem = ({item}: any) => {
    const colorStyles = getPokemonStyles(item.color);
    return (
      <Pressable onPress={
        () => {
          console.log(item.name);
          //todo: navigate to PokemonCard
          navigation.navigate('PokemonCard', {pokemonId: item.id});
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
    <View>
      <FlatList data={DATA} renderItem={renderItem} />
    </View>
  );
};

//export the component
export default MainScreen;

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
