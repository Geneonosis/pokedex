import React from 'react';
import {View, Text, Image, StyleSheet, ImageSourcePropType, Pressable} from 'react-native';
import {pokemon} from '../../data/data';
import { ThemeToggleButton, useTheme } from '../../providers/ThemeProvider/ThemeContext.tsx';

const PokemonCard = () => {
  const { isDarkTheme } = useTheme();
  const [pokemonId, setPokemonId] = React.useState(1);

  const pokemonStyles = styles(isDarkTheme, pokemon[pokemonId]?.color );

  const handleNextButton = () => {
    //check bounds of array
    if (pokemonId === pokemon.length - 1) {
      return;
    }
    //incriment pokemonId by 1
    setPokemonId(pokemonId + 1);
  };

  const handleBackButton = () => {
    //check bounds of array
    if (pokemonId === 1) {
      return;
    }
    //decrement pokemonId by 1
    setPokemonId(pokemonId - 1);
  };

  return (
    <View style={pokemonStyles.container}>
      <Image source={pokemon[pokemonId]?.localImageUrl as ImageSourcePropType} style={pokemonStyles.image} />
      <View style={pokemonStyles.textContainer}>
        <Text style={pokemonStyles.headerText}>{pokemon[pokemonId]?.name}</Text>
          <View style={pokemonStyles.metaDataContainer}>
            <Text style={pokemonStyles.descriptionText}>{pokemon[pokemonId]?.description}</Text>
            <View style={pokemonStyles.metaDataContainerInner}>
              <Text style={pokemonStyles.metaDataContainerInnerTextLabel}>{'Type:'}
                <Text style={pokemonStyles.metaDataContainerInnerText}>
                  {pokemon[pokemonId]?.type}
                </Text>
              </Text>
              <Text style={pokemonStyles.metaDataContainerInnerTextLabel}>{'Height:'}
               <Text style={pokemonStyles.metaDataContainerInnerText}>{pokemon[pokemonId]?.height}</Text>
              </Text>
              <Text style={pokemonStyles.metaDataContainerInnerTextLabel}>{'Weight:'}
                <Text style={pokemonStyles.metaDataContainerInnerText}>{pokemon[pokemonId]?.weight}</Text>
              </Text>
            </View>
        </View>
        <View style={pokemonStyles.buttonsContainer}>
        <Pressable
          style={pokemonStyles.backButton}
          onPress={handleBackButton}
        >
          <Text style={pokemonStyles.buttonText}>Back</Text>
        </Pressable>
        <Pressable
          style={pokemonStyles.nextButton}
          onPress={handleNextButton}
        >
          <Text style={pokemonStyles.buttonText}>Next</Text>
        </Pressable>
        </View>
        <ThemeToggleButton />
      </View>
    </View>
  );
};

export default PokemonCard;

const styles = (isDarkTheme: boolean, color?:string) => StyleSheet.create({
  container: {
    paddingTop: 50,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: isDarkTheme ? 'black' : 'white',
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: color,
    marginTop: 110,
    paddingTop: 110,
    width: '100%',
    height: '100%',
  },
  metaDataContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    margin: 16,
    borderRadius: 16,
  },
  metaDataContainerInner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 16,
  },
  metaDataContainerInnerTextLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  metaDataContainerInnerText: {
    fontSize: 16,
    fontWeight: 'normal',
  },
  image: {
    width: 210,
    height: 210,
    backgroundColor: 'white',
    borderRadius: 200,
    borderTopStartRadius: 0,
    borderTopEndRadius: 0,
    position: 'absolute',
    zIndex: 1,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 16,
  },
  descriptionText: {
    fontSize: 18,
    fontWeight: 'normal',
    padding: 16,
  },
  headerText: {
    padding: 16,
    fontSize: 36,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '100%',
    height: 80,
    padding: 5,
  },
  backButton: {
    flex: 1,
    backgroundColor: '#2a2a2a',
    padding: 16,
    borderRadius: 10,
    marginRight: 2.5,
  },
  nextButton: {
    flex: 1,
    backgroundColor: 'red',
    padding: 16,
    borderRadius: 10,
    marginLeft: 2.5,
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
