import React from 'react';
import { StatusBar, ScrollView, StyleSheet, Text, View, Image } from 'react-native';


export default function Newproduct() {
  return (
    <View style={styles.container}>
 
      <ScrollView horizontal={true} style={styles.bannerContainer}>
    
        <Image source={require('../../assets/components/Home/Banner/iphone12pm.jpg')} style={styles.bannerImage} />
        <Image source={require('../../assets/components/Home/Banner/iphone12pm.jpg')} style={styles.bannerImage} />
        <Image source={require('../../assets/components/Home/Banner/iphone12pm.jpg')} style={styles.bannerImage} />
        <Image source={require('../../assets/components/Home/Banner/iphone12pm.jpg')} style={styles.bannerImage} />
        <Image source={require('../../assets/components/Home/Banner/iphone12pm.jpg')} style={styles.bannerImage} />
        <Image source={require('../../assets/components/Home/Banner/iphone12pm.jpg')} style={styles.bannerImage} />
        <Image source={require('../../assets/components/Home/Banner/iphone12pm.jpg')} style={styles.bannerImage} />
        <Image source={require('../../assets/components/Home/Banner/iphone12pm.jpg')} style={styles.bannerImage} />
        <Image source={require('../../assets/components/Home/Banner/iphone12pm.jpg')} style={styles.bannerImage} />
        <Image source={require('../../assets/components/Home/Banner/iphone12pm.jpg')} style={styles.bannerImage} />
        <Image source={require('../../assets/components/Home/Banner/iphone12pm.jpg')} style={styles.bannerImage} />
        <Image source={require('../../assets/components/Home/Banner/iphone12pm.jpg')} style={styles.bannerImage} />

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
  bannerContainer: {
    height: 220, 

    
  },
  bannerImage: {

      width:100,
      height:150,
      resizeMode: 'center',
      borderWidth: 1,
     
  },
  
});
