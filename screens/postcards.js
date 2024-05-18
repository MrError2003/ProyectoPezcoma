import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ImageBackground, ScrollView } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';


function Postcards() {

  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (!token) {
        throw new Error('No token found');
      }

      const response = await fetch('https://integrador4to.onrender.com/api/post/', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to fetch posts: ${errorText}`);
      }

      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
      setError(error.message);
    }
  };

  return (
    <ImageBackground source={require('../assets/posts_bg.png')} style={styles.backgroundImage}>
      <ScrollView>
        <View style={styles.container}>
          {posts.map(post => (
            <View key={post._id} style={styles.card}>
              <Text>{post.title}</Text>
              <Text>{post.content}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </ImageBackground>


  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 99,
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 99,
    width: 350,
    height: 'auto',
    borderRadius: 25,
    padding: 5,
    elevation: -5,
    backgroundColor: 'white',
    marginVertical: 10,
    paddingHorizontal: 30,
    paddingVertical: 20,
    textAlign: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default Postcards;