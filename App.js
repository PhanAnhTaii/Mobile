import React from 'react';
import { StyleSheet, View, ImageBackground, KeyboardAvoidingView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './components/login/Login';
import Home from './components/Home';
import Register from './components/login/Register';
import Profile from './components/profile/Profile';
import Cart from './components/cart/Cart';
import Product from './components/products/Product';
import Category from './components/products/Category';
import ProductDetail from './components/products/ProductDetail';
import ProductJewelery from './components/products/ProductJewelery';
import ProductElectronics from './components/products/ProductElectronics';
import ProductMenClothing from './components/products/ProductMenClothing';
import ProductWomenClothing from './components/products/ProductWomenClothing';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
   
      <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
         name="Home"
         component={Home}
         options={{ headerShown: false }}
        />
        <Stack.Screen
         name="Register"
         component={Register}
         options={{ headerShown: false }}
        />
        <Stack.Screen
         name="Profile"
         component={Profile}
         options={{ headerShown: false }}
        />
        {/* <Stack.Screen
         name="Favorite"
         component={Favorite}
         options={{ headerShown: false }}
        /> */}
         <Stack.Screen
         name="Cart"
         component={Cart}
         options={{ headerShown: false }}
        />
        <Stack.Screen
         name="Product"
         component={Product}
         options={{ headerShown: false }}
        />
        
        <Stack.Screen
         name="ProductDetail"
         component={ProductDetail}
         options={{ headerShown: false }}
        />
         <Stack.Screen
         name="Category"
         component={Category}
         options={{ headerShown: false }}
        />
        <Stack.Screen
         name="ProductJewelery"
         component={ProductJewelery}
         options={{ headerShown: false }}
        />
        <Stack.Screen
         name="ProductElectronics"
         component={ProductElectronics}
         options={{ headerShown: false }}
        />
        <Stack.Screen
         name="ProductMenClothing"
         component={ProductMenClothing}
         options={{ headerShown: false }}
        />
        <Stack.Screen
         name="ProductWomenClothing"
         component={ProductWomenClothing}
         options={{ headerShown: false }}
        />


    </Stack.Navigator>
    
  
  </NavigationContainer>    
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },


});
