import React from 'react';
import { StatusBar, ScrollView, StyleSheet, Text, View, Image } from 'react-native';

export default function Banner() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.bannerContainer}>
        <View>
          <Image
            source={require('../../assets/components/Home/Banner/iphone13.jpg')}
            style={styles.bannerImage}
          />
          <Text style={styles.textbanner}>IPHONE 13 PRO MAX</Text>
        </View>
        <Image
          source={require('../../assets/components/Home/Banner/iphone12pm.jpg')}
          style={styles.bannerImage}
        />
        <Image
          source={require('../../assets/components/Home/Banner/iphone13.jpg')}
          style={styles.bannerImage}
        />
        <Image
          source={require('../../assets/components/Home/Banner/iphone.jpg')}
          style={styles.bannerImage}
        />
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    height: 400,
  },
  bannerContainer: {
    width: '100%',
    flexDirection: 'column',
    marginTop: 20,
    
  },
  bannerImage: {
    width: '100%',
    height: 600,
    marginBottom: 8,
    position: 'relative',
  },
  textbanner: {
    fontSize: 35,
    color:"white",
    position: 'absolute',
    top: '50%', 
    left: '15%', 
    transform: [{ translateX: -50 }, { translateY: -50 }],
  },
});
