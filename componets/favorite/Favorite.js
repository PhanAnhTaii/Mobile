import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CommonActions } from '@react-navigation/native';
import Header from '../Header';
import Footer from '../Footer';

export default function Favorite({ navigation }) {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
        <Header navigation={navigation} />
      </View>
        <Text>

        Favorit
        </Text>
        <View style={styles.footer}>
          <Footer navigation={navigation} />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
 
  
    borderWidth:1,
    
  },
  footer: {
    flex:1,
    justifyContent: 'flex-end',
  },
  header:{
    marginTop:20
  }
});
