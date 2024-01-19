import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity,Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Search = ({navigation}) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    navigation.navigate('ResultSearch');
  };

  return (
    <View style={styles.container}>
      {/* <TextInput
        style={styles.input}
        placeholder="Search"
        value={searchText}
        onChangeText={setSearchText}
      /> */}
      <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
        <Text style={{fontSize:20,paddingLeft:17,fontWeight:"bold",color:"blue"}}>BEAUTY BEACUSE OF SILK</Text>
      </TouchableOpacity>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 16,
    borderRadius: 25,
    marginHorizontal: 16,
    marginVertical: 20,
    elevation: 2,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    paddingHorizontal: 10,
  },
  searchButton: {
    padding: 8,
  },
});

export default Search;