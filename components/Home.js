import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Footer from './Footer';
import Header from './Header';
import Product from './products/Product';
import ProductJewelery from './products/ProductJewelery';
import ProductElectronics from './products/ProductElectronics';
import ProductMenClothing from './products/ProductMenClothing';
import ProductWomenClothing from './products/ProductWomenClothing';
import Search from './products/Search';
import Slider from './products/Slider';
import Category from './products/Category';
import { ImageBackground } from 'react-native-web';

export default function Home({ navigation }) {
  const navigateToProductDetail = (item) => {

    navigation.navigate('ProductDetail', { item });
  };



  return (


    <View style={styles.container}>
      
        <ScrollView>
          <View style={styles.search} >
            <Search navigation={navigation}/>
          </View>
          <View style={styles.slider}>
            <Slider />
          </View>
          <View style={styles.slider}>
            <Category navigation={navigation} />
          </View>
          <View>
            <Text style={styles.textnewproduct}>TẤT CẢ SẢN PHẨM</Text>
            <Product navigateToProductDetail={navigateToProductDetail} />
          </View>
        </ScrollView>
        <View style={styles.footer}>
          <Footer navigation={navigation} />
        </View>
        <StatusBar style="auto" />
      
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor:"white"

  },

  footer: {
    justifyContent: 'flex-end',
  },
  banner: {
    marginTop: 30,

  },
  search: {
    marginTop: 15
  },
  header: {},
  goback: {},
  textnewproduct: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: "red",
    textAlign: 'center'
  },



});
