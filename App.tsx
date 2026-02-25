import { StyleSheet, ScrollView, Platform } from 'react-native';
import PokemonCard from './components/PokemonCard';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const pokemons = { 
    charmanderdata: {
    name: 'Charmander',
    type: 'Fire',
    hp: 39,
    attack: 52,
    moves: ['Scratch', 'Ember', 'Flamethrower'],
    weaknesses: ['Water', 'Ground', 'Rock'],
    image: require('./assets/charmander.png'),
  },
    bulbasaurdata : {
    name: 'Bulbasaur',
    type: 'Grass/Poison',
    hp: 45,
    attack: 49,
    moves: ['Tackle', 'Vine Whip', 'Razor Leaf'],
    weaknesses: ['Fire', 'Psychic', 'Flying', 'Ice'],
    image: require('./assets/bulbasaur.png'),
  },
    squirtledata : {
    name: 'Squirtle',
    type: 'Water',
    hp: 44,
    attack: 48,
    moves: ['Tackle', 'Water Gun', 'Bubble'],
    weaknesses: ['Electric', 'Grass'],
    image: require('./assets/squirtle.png'),
  },
    pikachudata : {
    name: 'Pikachu',
    type: 'Electric',
    hp: 35,
    attack: 55,
    moves: ['Quick Attack', 'Thunder Shock', 'Thunderbolt'],
    weaknesses: ['Ground'],
    image: require('./assets/pikachu.png'),
  }
  
  }

 
  return (
    <SafeAreaView style={styles.container}>
     <ScrollView showsHorizontalScrollIndicator={false}>
      {Object.values(pokemons).map((pokemon) => (
        <PokemonCard key={pokemon.name} {...pokemon} />
      ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
 

});


