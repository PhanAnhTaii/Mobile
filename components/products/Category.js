import React from 'react';
import { StatusBar, ScrollView, StyleSheet, Text, View, Image,  TouchableOpacity } from 'react-native';

export default function Category({navigation}) {
  const Jewelery = () => {
    navigation.navigate('ProductJewelery');
  };
  const Electronics = () => {
    navigation.navigate('ProductElectronics');
  };
  const Men = () => {
    navigation.navigate('ProductMenClothing');
  };
  const Women = () => {
    navigation.navigate('ProductWomenClothing');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textcategory}>DANH MỤC</Text>
      <ScrollView horizontal={true} contentContainerStyle={styles.CategoryContainer}>
          <TouchableOpacity  onPress={Jewelery}>
          <View style={styles.column} >
            <Image source={require("../../assets/components/Home/Category/jewelery.png")} style={styles.CategoryImage} resizeMode="contain" />
            <Text style={styles.categoryText}>Jewelery</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={Electronics}>
          <View style={styles.column} >
            <Image source={require("../../assets/components/Home/Category/electronics.png")} style={styles.CategoryImage} resizeMode="contain" />
            <Text style={styles.categoryText}>Electronics</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={Men}>
          <View style={styles.column} >
            <Image source={require("../../assets/components/Home/Category/men.png")} style={styles.CategoryImage} resizeMode="contain" />
            <Text style={styles.categoryText}>Men</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={Women}>
          <View style={styles.column} >
            <Image source={require("../../assets/components/Home/Category/women.png")} style={styles.CategoryImage} resizeMode="contain" />
            <Text style={styles.categoryText}>Women</Text>
          </View>
          </TouchableOpacity>

          

      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  CategoryContainer: {
    flexDirection: 'row',
  },
  column: {
    marginRight: 30, // Add spacing between columns if needed
  },
  CategoryImage: {
    width: 53,
    height: 80,
    marginBottom: 10,
    marginLeft:10 // Add spacing between rows if needed
  },
  categoryText: {
    textAlign: 'center',
    fontSize: 13,
    marginLeft:8 // Add spacing between rows if needed

  },
  textcategory: {
  marginTop:18,
   marginBottom:5,
   fontSize:20,
   fontWeight: 'bold',
   color:"red",
   textAlign:'center'
  },
});
