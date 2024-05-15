import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';


function Postcards () {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
          const token = await AsyncStorage.getItem('token');
          if (!token) {
            throw new Error('No token found');
          }
          const response = await fetch('https://integrador4to.onrender.com/api/posts', {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          });
          if (!response.ok) {
            throw new Error('Failed to fetch posts');
          }
          const data = await response.json();
          setPosts(data);
        } catch (error) {
          console.error(error);
        }
      };

    return (
        <ImageBackground source={require('../assets/posts_bg.png')} style={styles.backgroundImage}>
            <View style={styles.container}>
            {posts.map(post => (
                    <View key={post._id} style={styles.card}>
                        <Text>{post.title}</Text>
                        <Text>{post.content}</Text>
                    </View>
                ))}
            </View>
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
        height: 300,
        borderRadius: 25,
        padding: 5,
        elevation: -5,
        backgroundColor: 'white',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
      },
});

export default Postcards;