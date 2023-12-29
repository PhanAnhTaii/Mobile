import React, { useState } from 'react';
import { StatusBar, ScrollView, StyleSheet, Text, View, Image, TextInput,TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';


export default function Category() {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    console.log('Performing search for:', searchText);
    // Thực hiện xử lý tìm kiếm tại đây
  };
  const slider = [
    { id: 1, name: 'Sản phẩm 1', image: require('../../assets/images/product3.jpg') },
    { id: 2, name: 'Sản phẩm 2', image: require('../../assets/images/product2.jpg') },
    { id: 3, name: 'Sản phẩm 3', image: require('../../assets/images/product1.jpg') },
    // Thêm các sản phẩm khác tùy ý
  ];

  const renderProductItem = ({ item }) => {
    return (
      <View style={styles.productItem}>
        <Image source={item.image} style={styles.productImage} />
      </View>
    );
  };

  return (
    
    <View style={styles.container}>
   
      <Carousel
        data={slider}
        renderItem={renderProductItem}
        sliderWidth={400}
        itemWidth={370}
        loop={true}
        layout="default"
        autoplay={true}
        autoplayInterval={3000}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  productItem: {
    flex: 1,
    alignItems: 'center',
  },
  productImage: {
    width: 370,
    height: 200,
    borderRadius: 10,
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