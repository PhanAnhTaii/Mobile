import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../Header';

export default function Profile({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header navigation={navigation} />
      </View>
      <View style={styles.profileInfoContainer}>
        <Image
          style={styles.profileImage}
          source={{ uri: 'https://cdn2.vectorstock.com/i/1000x1000/95/51/little-boy-logo-vector-28159551.jpg' }}     
            />
        <Text style={styles.userName}>Anh Tài</Text>
        <Text style={styles.userInfo}>Tester</Text>
        <Text style={styles.userInfo}>Location: Việt Nam</Text>
        <TouchableOpacity style={styles.editButton}>
          <Icon name="pencil" size={20} color="#fff" />
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginStart: 10,
    marginEnd: 10,
  },
  header: {
    // Your header styles
  },
  profileInfoContainer: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
  },
  profileImage: {
    width: 140,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  userInfo: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  editButtonText: {
    color: '#fff',
    marginLeft: 10,
  },
});
