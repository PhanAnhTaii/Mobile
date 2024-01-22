import React from 'react';
import { StyleSheet, View, ImageBackground, KeyboardAvoidingView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './components/pages/Login';
import Home from './components/Home';
import Register from './components/pages/Register';
import Profile from './components/pages/Profile';
import Cart from './components/pages/Cart';
import Product from './components/pages/Product';
import Category from './components/pages/Category';
import ProductDetail from './components/pages/ProductDetail';
import ProductJewelery from './components/pages/ProductJewelery';
import ProductElectronics from './components/pages/ProductElectronics';
import ProductMenClothing from './components/pages/ProductMenClothing';
import ProductWomenClothing from './components/pages/ProductWomenClothing';
import ResultSearch from './components/pages/ResultSearch';

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
          <Stack.Screen
         name="ResultSearch"
         component={ResultSearch}
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
