import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import Header from '../Header';


export default function Cart({navigation}) {
 
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    const loadCartItems = async () => {
      try {
        const cartData = await AsyncStorage.getItem('cart');
        if (cartData) {
          const parsedCart = JSON.parse(cartData);
  
        
          const updatedCart = parsedCart.map(item => ({
            ...item,
            quantity: item.quantity || 1,
          }));
  
          setCartItems(updatedCart);
        }
      } catch (error) {
        console.error('Lỗi khi đọc dữ liệu giỏ hàng:', error);
      }
    };
  
    loadCartItems();
  }, []);

  const calculateTotalPrice = () => {
    const total = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    return total.toFixed(2); // Làm tròn đến 2 chữ số thập phân
  };

  const handleDeleteItem = (itemId) => {

    const updatedCart = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCart);

   
    AsyncStorage.setItem('cart', JSON.stringify(updatedCart))
      .then(() => {
        console.log('Sản phẩm đã được xóa khỏi giỏ hàng');
      })
      .catch((error) => {
        console.error('Lỗi khi lưu giỏ hàng mới:', error);
      });
  };
  const handleDecreaseQuantity = (itemId) => {

  const updatedCart = cartItems.map(item => {
    if (item.id === itemId) {
      
      const newQuantity = Math.max(1, item.quantity - 1);
      return { ...item, quantity: newQuantity };
    }
    return item;
  });

  setCartItems(updatedCart);


  AsyncStorage.setItem('cart', JSON.stringify(updatedCart))
    .then(() => {
      console.log('Số lượng sản phẩm đã được giảm');
    })
    .catch((error) => {
      console.error('Lỗi khi lưu giỏ hàng mới:', error);
    });
};

  const handleIncreaseQuantity = (itemId) => {

    const updatedCart = cartItems.map(item => {
      if (item.id === itemId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCart);


    AsyncStorage.setItem('cart', JSON.stringify(updatedCart))
      .then(() => {
        console.log('Số lượng sản phẩm đã được tăng');
      })
      .catch((error) => {
        console.error('Lỗi khi lưu giỏ hàng mới:', error);
      });
  };
  const handleReduceQuantity = (itemId) => {

  const updatedCart = cartItems.map(item => {
    if (item.id === itemId) {
   
      const newQuantity = Math.max(1, item.quantity - 1);
      return { ...item, quantity: newQuantity };
    }
    return item;
  });

  setCartItems(updatedCart);


  AsyncStorage.setItem('cart', JSON.stringify(updatedCart))
    .then(() => {
      console.log('Số lượng sản phẩm đã được giảm');
    })
    .catch((error) => {
      console.error('Lỗi khi lưu giỏ hàng mới:', error);
    });
};
const navigateToProductDetail = (item) => {
   
  navigation.navigate('ProductDetail', { item });
};


return (
  <View style={styles.container}>
         <View style={styles.header}>
        <Header navigation={navigation} />
      </View>
    <Text style={styles.header}>Giỏ hàng </Text>
    {cartItems.length > 0 ? (
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
           <TouchableOpacity onPress={()=>navigateToProductDetail(item)}>
          <View style={styles.cartItem}>

            <Image source={{ uri: item.image }} style={styles.productImage} />
            <View style={styles.productDetails}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.price}>Giá tiền: ${item.price}</Text>
              

              <View style={styles.actionButtons}>
                <View style={styles.action}>
                  <View style={styles.congtru}>
                    <TouchableOpacity  onPress={() => handleIncreaseQuantity(item.id)}>
                      <Icon name="plus" size={19} color="#888888" />
                    </TouchableOpacity>
                  </View>
                 
                  <Text style={styles.quantity}>{item.quantity}</Text>

                  <View style={styles.congtru}>
                  <TouchableOpacity  onPress={() => handleReduceQuantity(item.id)}>
                    <Icon  name="minus" size={19} color="#888888" />
                  </TouchableOpacity>
                  </View>
                </View>

                <TouchableOpacity onPress={() => handleDeleteItem(item.id)}>
                  <Text style={{fontSize:16,color: 'gray',}}>Xóa</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
           </TouchableOpacity>
        )}
      />
    ) : (
      <Text style={styles.emptyCartText}>Giỏ hàng trống</Text>
    )}
    <View style={styles.totalContainer}>
      <Text style={styles.totalText}>Tổng thanh toán:</Text>
      <Text style={styles.totalPrice}>${calculateTotalPrice()}</Text>
    </View>
    <TouchableOpacity style={styles.paymentButton}>
      <Text style={styles.paymentButtonText}>Thanh toán</Text>
    </TouchableOpacity>
  </View>
);

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  header: {
    fontSize: 23,
    textAlign:"center",
    color: 'red',
    fontWeight: 'bold',
    marginBottom: 16,
  },
  cartItem: {
    flexDirection: 'row',
    borderColor: 'gray',
    padding: 8,
    marginBottom: 8,
    borderBottomColor:'black',
    borderBottomWidth:0.2,
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: 'center',
    marginRight: 8,
  },
  productDetails: {
    flex: 1,
  },
  title: {
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    color: '#F15B31',
  },
  quantity: {
    fontSize: 14,
    color: 'gray',
    textAlign:'center',
    borderRightWidth:0.6,
    borderLeftWidth:0.6,
    borderColor:'#EEEEEE',
    width:30,
    height:20,
 
  },
  congtru:{
    textAlign:'center',
    paddingTop:2,
  },
  action:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth:1,
    borderColor:'#EEEEEE',
    width:100,
    height:25,
  },
  actionButtons: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-around',
    height:20,
  },
  actionButtonText: {
    color: 'blue',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalPrice: {
    fontSize: 18,
    color: '#F15B31',
    fontWeight: 'bold',
  },
  paymentButton: {
    backgroundColor: '#3399FF',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',

  },
  paymentButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  emptyCartText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    color: 'gray',
  },
  
});
